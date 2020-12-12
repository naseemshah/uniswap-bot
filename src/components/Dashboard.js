import React, {useState, useEffect} from 'react'
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
    let [isProduction,setIsProduction] = useState(false);
    let [isBotOn,setIsBotOn] = useState(false);
    let [infoData,setInfoData] = useState([]);
    useEffect(()=>{
        setInfoData([
            {
                title: 'Percent of Pool amount Trade',
                value: 78,
                valueType: 'percent'
            },
            {
                title: 'Gas Limit',
                value: 100000000,
                valueType: 'eth'
            },
            {
                title: 'Gas Price',
                value: 100000000,
                valueType: 'eth'
            },
            {
                title: 'Slippage Tolerance',
                value: 1.0,
                valueType: 'percent'
            },
            {
                title: 'Receiving Address',
                value: '0x93a109f93459E5D1623eEE1c57F6453CBDB1D5b9',
                valueType: 'address'
            },
            {
                title: 'Token Address',
                value: '0x93a109f93459E5D1623eEE1c57F6453CBDB1D5b9',
                valueType: 'address'
            },
            {
                title: 'Uniswap Address',
                value: '0x93a109f93459E5D1623eEE1c57F6453CBDB1D5b9',
                valueType: 'address'
            }
        ]) 
    },[])

  return (
   <div className="dash-container">
       <Sidebar />
       <div className="dash-content">
           <div className="dash-title-container">
                <h1 className="dash-title">Dashboard</h1>
                <div className="dash-toggle-container">
                    <div className="dash-toggle-item">
                        <p>Production</p>
                        <ToggleButton 
                            value={isProduction}
                            onToggle={()=>{
                                setIsProduction(!isProduction)
                            }}
                        />
                    </div>
                    <div className="dash-toggle-item">
                        <p>Bot</p>
                        <ToggleButton 
                            value={isBotOn}
                            onToggle={()=>{
                                setIsBotOn(!isBotOn)
                            }}
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
                                    {info.value.substring(0,5)+ '...' + info.value.substring(info.value.length-3,info.value.length)}
                                </p>
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

