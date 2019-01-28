import React from 'react'
import UserCreate from './UserCreate';
import LanguageContext from '../contexts/languageContext';

class App extends React.Component{
    state = {language : 'english'}

    onLanguageChange = language => {
        this.setState({language})
    }

    render(){
        
        return(
            <div className="ui container">
                <div>Select Languages:
                    <i className="flag us" onClick={() => this.onLanguageChange('english')}/>
                    <i className="flag hk" onClick={() => this.onLanguageChange('cantones')}/>
                </div>
                <LanguageContext.Provider value={this.state.language} >
                    <UserCreate />
                </LanguageContext.Provider>
            </div>
        )
    }
}
export default App;