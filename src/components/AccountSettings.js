import   {useState, useEffect,useContext} from 'react'
import {Link} from 'react-router-dom'
import AuthContext from '../context/auth-context';
import '../App.css';
import Sidebar from './Sidebar'
import ToggleButton from 'react-toggle-button'
import logo from '../logo.svg'
import DashIcon from '../assets/img/dash-icon.svg'
import logoutIcon from '../assets/img/logoutIcon.svg'
import ham from '../assets/img/ham.svg'
import accountIcon from '../assets/img/account-settings-icon.svg'
import closeIcon from '../assets/img/x.svg'




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
    let [isSidebarOn,setSidebarOn] = useState(true)
    let [isNavOpen, setIsNavOpen]=useState(false)
    let [showSaveConfirmationDialogue,setShowSaveConfirmationDialogue] = useState(false)
    let [isSaveDailogueConfirmed,setIsSaveDailogueConfirmed] = useState(undefined);
    window.addEventListener('resize',()=>{
        if(window.innerWidth<800){
            setSidebarOn(false)
        }else{
            
            setSidebarOn(true)
        }
    })
    
    let handleSaveBtn = () =>{
        setShowSaveConfirmationDialogue(true)
                
    }
    let handleYesConfirmation = () => {
        let form = document.getElementById('saveSettingsForm')
        setIsSaveDailogueConfirmed(true)
            console.log("yes ")
            form.submit()

    }
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
        if(window.innerWidth<800){
            setSidebarOn(false)
        }else{
            
            setSidebarOn(true)
        }

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
        if(isSaveDailogueConfirmed===false){ 
            setIsSaveDailogueConfirmed(undefined)
            return 
        }
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
       {showSaveConfirmationDialogue &&
            <div className="showConfirmation">
                <p>Are you sure?</p>
                <div>
                    <button onClick={handleYesConfirmation}>Yes</button>
                    <button onClick={()=>{setShowSaveConfirmationDialogue(false); setIsSaveDailogueConfirmed(false)}}>No</button>
                </div>
            </div>
       }
       { isSidebarOn && <Sidebar active="accountSettings"/>}
       <div className="dash-content">
       { !isSidebarOn && 
                    <div className="navbar-container">
                        <div className="navbar">
                            <img src={logo} className="dash-logo" alt="Logo"/>
                            <div onClick={()=>{setIsNavOpen(!isNavOpen)}}>
                            {isNavOpen ? <img src={closeIcon} alt=""/> : <img src={ham} alt=""/>}
                            </div>
                        </div>
                        {isNavOpen && <div>
                            <div className="dash-nav-list">
                                <Link to="/dashboard" className="react-router-link-reset">
                                    <div className='nav-list-item'>
                                        <img src={DashIcon} alt=""/>
                                        <p>Dashboard</p>
                                    </div>
                                </Link>
                                <Link to="/accountsettings" className="react-router-link-reset">
                                    <div className='nav-list-item  nav-list-item-active'>
                                        <img src={accountIcon} alt=""/>
                                        <p>Account Settings</p>
                                    </div>
                                </Link>
                            </div>
                            <div className="dash-nav-list">
                                <Link to="#" className="react-router-link-reset" onClick={context.logout} >
                                    <div className='nav-logout'>
                                        <img src={logoutIcon} alt=""/>
                                        <p>Logout</p>
                                    </div>
                                </Link>
                            </div>    
                        </div>}
                       </div>
            }
           <div className="dash-title-container">
                <h1 className="dash-title">Account Settings</h1>
           </div>
           <div className="account-settings-toggle-item">
          
                        <p>Production</p>
                        <ToggleButton 
                            value={isProduction}
                            onToggle={ handleToggle}
                        />
            </div>
           <form id="saveSettingsForm" onSubmit={submitHandler}>

           
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
                <button onClick={handleSaveBtn} >Save</button>
            </div>
            </form>
        </div>          
   </div>
  );
}

export default AccountSettings;

