import React from 'react'
import UserCreate from './UserCreate';
import {LanguageStore} from '../contexts/languageContext';
import ColorContext from '../contexts/ColorContext';
import LanguageSelector from './LanguageSelector';


class App extends React.Component{
   

    render(){        
        return(
            <LanguageStore>
                <div className="ui container">
                    <LanguageSelector />
                    {// <div>Select Languages:
                    //     <i className="flag us" onClick={() => this.onLanguageChange('english')}/>
                    //     <i className="flag hk" onClick={() => this.onLanguageChange('cantones')}/>
                    // </div>
                    }
                    <ColorContext.Provider value="green">                    
                            <UserCreate />                    
                    </ColorContext.Provider>
                </div>
            </LanguageStore>
        )
    }
}
export default App;