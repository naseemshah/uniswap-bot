 
import   {useState, useEffect,useContext} from 'react'
 
import AuthContext from '../context/auth-context';
import '../App.css';
import Sidebar from './Sidebar'
import ToggleButton from 'react-toggle-button'





function abbreviateNumber(value) {
    var newValue = value;
    if (value >= 1000) {
        var suffixes = ["", "k", "m", "b","t"];
        var suffixNum = Math.floor( (""+value).length/3 );
        var shortValue = '';
        for (var precision = 2; precision >= 1; precision--) {
            shortValue = parseFloat( (suffixNum != 0 ? (value / Math.pow(1000,suffixNum) ) : value).toPrecision(precision));
            var dotLessShortValue = (shortValue + '').replace(/[^a-zA-Z 0-9]+/g,'');
            if (dotLessShortValue.length <= 2) { break; }
        }
        if (shortValue % 1 != 0)  shortValue = shortValue.toFixed(1);
        newValue = shortValue+suffixes[suffixNum];
    }
    return newValue;
}


function Dashboard() {
    const fetchData=async()=>{
        try {

       
        const resource="settings"
        let response=await fetch(`http://localhost:5000/${resource}`,
        {
         method: 'GET',         
         headers: {
           'Content-Type': 'application/json',
           Authorization: 'Bearer ' + context.token
         }
       })
       if (response.status !== 200 && response.status !== 201) {            
           return
         }          
         const resData =await   response.json()
         if(resData.count==1){
            const {  PRODUCTION ,ETHER_TRADE_AMOUNT ,PERCENT_OF_POOL_TO_TRADE ,GASLIMIT ,GASPRICE ,SLIPPAGE_TOLERANCE ,
                ACCOUNT ,
                   
                TOKENB_ADDRESS ,
                ROUTERV2ADDRESS}=resData.Settings[0];

                setInfoData([
                    { title: 'Trade Amount',
                    value: ETHER_TRADE_AMOUNT,
                    valueType: 'eth'},

                    {
                        title: 'Percent of Pool amount Trade',
                        value: PERCENT_OF_POOL_TO_TRADE,
                        valueType: 'percent'
                    },
                    {
                        title: 'Gas Limit',
                        value: GASLIMIT,
                        valueType: 'eth'
                    },
                    {
                        title: 'Gas Price',
                        value: GASPRICE,
                        valueType: 'eth'
                    },
                    {
                        title: 'Slippage Tolerance',
                        value: SLIPPAGE_TOLERANCE,
                        valueType: 'percent'
                    },
                    {
                        title: 'Receiving Address',
                        value: ACCOUNT,
                        valueType: 'address'
                    },
                    {
                        title: 'Token Address',
                        value: TOKENB_ADDRESS,
                        valueType: 'address'
                    },
                    {
                        title: 'Uniswap Address',
                        value: ROUTERV2ADDRESS,
                        valueType: 'address'
                    }
                ])    
          
            
            setIsProduction(PRODUCTION=="1") 
            const resource="botcontrol"
            let response1=await fetch(`http://localhost:5000/${resource}`,
            {
             method: 'GET',         
             headers: {
               'Content-Type': 'application/json',
               Authorization: 'Bearer ' + context.token
             }
           })
           if (response1.status !== 200 && response1.status !== 201) {            
               return
             }          
             const resData1 =await response1.json()
             setIsBotOn(resData1.start)
             console.log(resData1)
             
    
                   
        
         }

        }
        catch(e){
            console.log(e.message)
        }
    }
   
    const context=useContext (AuthContext)
    const [isProduction,setIsProduction] = useState(false);   
    
    let [isBotOn,setIsBotOn] = useState(false);
    let [infoData,setInfoData] = useState([]);
    let [botInfo,setBotInfo] = useState([]);
    
    const handleToggle=()=>{
        setIsProduction(!isProduction)
    }
    useEffect(()=>{
        fetchData()
       

        setBotInfo([
            {
                content: 'Bot Started @ 11:00pm',
                contentType: 'message'
            },
            {
                content: [
                    'Transaction Hash:  0x516516519516518461651989549',
                    'Token Address:  0x516516519516518461651989549',
                    'Gas Price:  500000'
                ],
                contentType: 'transaction'
            },
            {
                content: 'Bot Ended @ 11:00pm',
                contentType: 'message'
            }
        ])
    },[])
    const handleBotToggle=async ()=>{

        const resource="botcontrol"
        
        setIsBotOn(!isBotOn)
        let requestBody={start:!isBotOn};
         
            let response1=await fetch(`http://localhost:5000/${resource}`,
            {
             method: 'POST',  
             body: JSON.stringify(requestBody),       
             headers: {
               'Content-Type': 'application/json',
               Authorization: 'Bearer ' + context.token
             }
           })
           if (response1.status !== 200 && response1.status !== 201) {  
                      
               return
             }          
             const resData1 =await response1.json()
             
        
    }

  return (
   <div className="dash-container">
       <Sidebar active="dashboard"/>
       <div className="dash-content">
           <div className="dash-title-container">
                <h1 className="dash-title">Dashboard</h1>
                <div className="dash-toggle-container">
                    <div className="dash-toggle-item">
                        <p>Production</p>
                        <ToggleButton 
                            value={isProduction}
                            
                        />
                    </div>
                    <div className="dash-toggle-item">
                        <p>Bot</p>
                        <ToggleButton 
                            value={isBotOn}
                            onToggle={handleBotToggle}
                        />
                    </div>
                </div>
           </div>
            <div className="dash-info">

            {
                    infoData.map((info, id)=>{
                        if(info.valueType === 'percent'){
                            return <div key={id} className="dash-info-item">
                                <p className="dash-info-item-title">
                                {info.title}
                                </p>
                                <p className="dash-info-item-value">
                                    {info.value}%
                                </p>
                            </div>
                            
                            
                        }else if(info.valueType === 'eth'){
                            return <div key={id} className="dash-info-item">
                                <p className="dash-info-item-title">
                                    {info.title}
                                </p>
                                <p className="dash-info-item-value-eth">
                                    { abbreviateNumber(info.value)} <span>ETH</span>
                                </p>
                            </div>

                        } else if(info.valueType === 'address'){
                            return <div key={id} className="dash-info-item">
                                <p className="dash-info-item-title">
                                {info.title}
                                </p>
                                <p className="dash-info-item-value-address">
                                    {info.value.substring(0,5)+'...'+ info.value.substring(info.value.length-3,info.value.length)}
                                </p>
                            </div>

                        }
                    })
                }

                
               
                
                

            </div>
            <div className="bot-info-container">
                    <h1 className='bot-info-container-title'>Bot Result</h1>
                    {
                        botInfo.map((info, id)=>{
                            if(info.contentType === 'message'){
                                return <div key={id} className="bot-info-content-message">
                                {info.content}
                            </div>
                                
                                
                            }else if(info.contentType === 'transaction'){
                                return <div key={id} className="bot-info-content-transaction">
                                <p>Transaction Found</p>
                                {
                                    info.content.map((detail,id)=>{
                                        return<div key={id}>
                                        {detail}
                                    </div>
                                    })
                                }
                                
                                
                            </div>

                            }
                        })
                    }
                   
            </div>
       </div>
   </div>
  );
}

export default Dashboard;

