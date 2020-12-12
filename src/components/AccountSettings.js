import React, {useState, useEffect} from 'react'
import '../App.css';
import Sidebar from './Sidebar'
import ToggleButton from 'react-toggle-button'





function AccountSettings() {
    let [isProduction,setIsProduction] = useState(false);
    
    useEffect(()=>{
        
    },[])

  return (
   <div className="dash-container">
       <Sidebar active="accountSettings"/>
       <div className="dash-content">
           <div className="dash-title-container">
                <h1 className="dash-title">Account Settings</h1>
           </div>
           <div className="account-settings-toggle-item">
                        <p>Production</p>
                        <ToggleButton 
                            value={isProduction}
                            onToggle={()=>{
                                setIsProduction(!isProduction)
                            }}
                        />
            </div>
            <div className="settings-form-container">
                <div className="settings-from-field">
                    <p>Trading Amount</p>
                    <input type="number"/>
                </div>
                <div className="settings-from-field">
                    <p>% of Pool of Trade</p>
                    <input type="number"/>
                </div>
                <div className="settings-from-field">
                    <p>Gas Limit</p>
                    <input type="number"/>
                </div>
                <div className="settings-from-field">
                    <p>Gas Price</p>
                    <input type="number"/>
                </div>
                <div className="settings-from-field">
                    <p>Slippage Tolerence</p>
                    <input type="number"/>
                </div>
                <div className="settings-from-field">
                    <p>Infura Key</p>
                    <input type="text"/>
                </div>
                <div className="settings-from-field">
                    <p>Recieving Address</p>
                    <input type="text"/>
                </div>
                <div className="settings-from-field">
                    <p>EtherScan API Key</p>
                    <input type="text"/>
                </div>
                <div className="settings-from-field">
                    <p>Token Address</p>
                    <input type="text"/>
                </div>
                <div className="settings-from-field">
                    <p>UniSwap Router Address</p>
                    <input type="text"/>
                </div>
                <div className="settings-from-field">
                    <p>Private Key</p>
                    <input type="text"/>
                </div>
            </div>
            <div className="account-settings-save">
                <button>Save</button>
            </div>
        </div>          
   </div>
  );
}

export default AccountSettings;

