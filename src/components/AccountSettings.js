import   {useState, useEffect,useContext} from 'react'
 
import AuthContext from '../context/auth-context';
import '../App.css';
import Sidebar from './Sidebar'
import ToggleButton from 'react-toggle-button'





function AccountSettings() {
    const context=useContext (AuthContext)
    const [isProduction,setIsProduction] = useState(false);   
    const [etherTradeAmount,setEtherTradeAmount]=useState("")
    const [percentOfPoolToTrade,setPercentOfPoolToTrade]=useState("")    
    const [gasLimit,SetGasLimit]=useState("")
    const [gasePrice,setGasPrice]=useState("")
    const [slippageToelerance,setSlippageToelerance]=useState("")     
    const [infuraKey,setInfuraKey]=useState("")
    const [account,setAccount]=useState("")
    const [etherScanApiKey,setEtherScanApiKey]=useState("")
    const [tokenBAddress,setTokenBAddress]=useState("")
    const [routerV2Address,setRouterV2Address]=useState("")
    const [privateKey,setPrivateKey]=useState("")
    
  
    const handleToggle=()=>{
        setIsProduction(!isProduction)
    }
    const  handleEtherTradeAmountTextChange=(e)=>{
        setEtherTradeAmount(e.target.value);
    }
    const  handlPercentOfPoolToTradeTextChange=(e)=>{
        setPercentOfPoolToTrade(e.target.value);
    }
    const  handleGasLimitTextChange=(e)=>{
        SetGasLimit(e.target.value);
    }
    const  handleGasPriceTextChange=(e)=>{
        setGasPrice(e.target.value);
    }
    const  handleSlippageToeleranceChange=(e)=>{
        setSlippageToelerance(e.target.value);
    }
    const  handleInfuraKeyTextChange=(e)=>{
        setInfuraKey(e.target.value);
    }

    const  handleAccountTextChange=(e)=>{
        setAccount(e.target.value);
    }
    const  handleEtherScanApiKeyTextChange=(e)=>{
        setEtherScanApiKey(e.target.value);
    }
    const  handleTokenBAddressTextChange=(e)=>{
        setTokenBAddress(e.target.value);
    }
    const  handleRouterV2AddressTextChange=(e)=>{
        setRouterV2Address(e.target.value);
    }
    const  handlePrivateKeyChange=(e)=>{
        setPrivateKey(e.target.value);
    }
    
    useEffect(async ()=>{

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
            const {  PRODUCTION ,ETHER_TRADE_AMOUNT ,PERCENT_OF_POOL_TO_TRADE ,GASLIMIT ,GASPRICE ,SLIPPAGE_TOLERANCE ,INFURA_KEY ,
                ACCOUNT ,
                ETHERSCAN_API_KEY ,
                TOKENB_ADDRESS ,
                ROUTERV2ADDRESS}=resData.Settings[0];
            setInfuraKey( INFURA_KEY)
            
            setIsProduction(PRODUCTION=="1") 
            setEtherTradeAmount(ETHER_TRADE_AMOUNT)
            setPercentOfPoolToTrade(PERCENT_OF_POOL_TO_TRADE)    
            SetGasLimit(GASLIMIT)
            setGasPrice(GASPRICE)
            setSlippageToelerance(SLIPPAGE_TOLERANCE)     
            setInfuraKey(INFURA_KEY)
            setAccount(ACCOUNT)
            setEtherScanApiKey(ETHERSCAN_API_KEY)
            setTokenBAddress(TOKENB_ADDRESS)
            setRouterV2Address(ROUTERV2ADDRESS)
         }
        
    },[])
    const returnUndefined=(value)=>{
        const x=  !value ? undefined : value
        return x
         
    }
    const  submitHandler = async event => {
        event.preventDefault();
        returnUndefined(gasLimit)
        const PRODUCTION  =isProduction ? "1" :"0"
        const  ETHER_TRADE_AMOUNT   =returnUndefined(etherTradeAmount   )
        const PERCENT_OF_POOL_TO_TRADE  =returnUndefined( percentOfPoolToTrade)
        const GASLIMIT   =returnUndefined( gasLimit)
        const GASPRICE = returnUndefined( gasePrice)
        const SLIPPAGE_TOLERANCE  =returnUndefined( slippageToelerance)
        const INFURA_KEY  =returnUndefined(infuraKey)
        const ACCOUNT  =returnUndefined( account)
        const ETHERSCAN_API_KEY = returnUndefined(etherScanApiKey)
        const TOKENB_ADDRESS    =returnUndefined(tokenBAddress)
        const ROUTERV2ADDRESS   =returnUndefined( routerV2Address)
        const PRIVATE_KEY   =returnUndefined( privateKey)  
    let requestBody={        
        PRODUCTION  ,
        ETHER_TRADE_AMOUNT   ,
        PERCENT_OF_POOL_TO_TRADE  ,
        GASLIMIT   ,
        GASPRICE  ,
        SLIPPAGE_TOLERANCE  ,
        INFURA_KEY  ,
        ACCOUNT  ,
        ETHERSCAN_API_KEY  ,  
        TOKENB_ADDRESS    ,
        ROUTERV2ADDRESS   ,
        PRIVATE_KEY   ,
    }
       const resource="settings"    
        let response=await fetch(`http://localhost:5000/${resource}`,     
         {
          method: 'POST',
          body: JSON.stringify(requestBody),
          headers: {
            'Content-Type': 'application/json',
            Authorization: 'Bearer ' + context.token
          }
        })
        if (response.status !== 200 && response.status !== 201) {
             
            return
          }
           
          const resData =await   response.json()
      
     
      };

  return (
   <div className="dash-container">
       <Sidebar active="accountSettings"/>
       <div className="dash-content">
           <div className="dash-title-container">
                <h1 className="dash-title">Account Settings</h1>
           </div>
           <div className="account-settings-toggle-item">
               {infuraKey}
                        <p>Production</p>
                        <ToggleButton 
                            value={isProduction}
                            onToggle={ handleToggle}
                        />
            </div>
           <form onSubmit={submitHandler}>

           
            <div className="settings-form-container">
                <div className="settings-from-field">
                    <p>Trading Amount</p>
                    <input type="number"  value={etherTradeAmount} onChange={handleEtherTradeAmountTextChange}/>
                </div>
                <div className="settings-from-field">
                    <p>% of Pool of Trade</p>
                    <input type="number" value={percentOfPoolToTrade}  onChange={ handlPercentOfPoolToTradeTextChange}/>
                </div>
                <div className="settings-from-field">
                    <p>Gas Limit</p>
                    <input type="number"   value={gasLimit} onChange={handleGasLimitTextChange}/>
                </div>
                <div className="settings-from-field">
                    <p>Gas Price</p>
                    <input type="number" value={gasePrice} onChange={handleGasPriceTextChange}/>
                </div>
                <div className="settings-from-field">
                    <p>Slippage Tolerence</p>
                    <input type="number"  value={slippageToelerance} onChange={handleSlippageToeleranceChange}/>
                </div>
                <div className="settings-from-field">
                    <p>Infura Key</p>
                    <input type="text"   value={infuraKey} onChange={ handleInfuraKeyTextChange}/>
                </div>
                <div className="settings-from-field">
                    <p>Recieving Address</p>
                    <input type="text" value={account} onChange={handleAccountTextChange}/>
                </div>
                <div className="settings-from-field">
                    <p>EtherScan API Key</p>
                    <input type="text" value={etherScanApiKey} onChange={handleEtherScanApiKeyTextChange}/>
                </div>
                <div className="settings-from-field">
                    <p>Token Address</p>
                    <input type="text" value={tokenBAddress} onChange={handleTokenBAddressTextChange}/>
                </div>
                <div className="settings-from-field">
                    <p>UniSwap Router Address</p>
                    <input type="text" value={routerV2Address} onChange={handleRouterV2AddressTextChange} />
                </div>
                <div className="settings-from-field">
                    <p>Private Key</p>
                    <input type="text" value={privateKey} onChange={handlePrivateKeyChange}/>
                </div>
            </div>
            <div className="account-settings-save">
                <button>Save</button>
            </div>
            </form>
        </div>          
   </div>
  );
}

export default AccountSettings;

