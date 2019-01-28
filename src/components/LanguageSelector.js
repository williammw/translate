import React from 'react';
import LanguageContext from '../contexts/languageContext';
class LanguageSelector extends React.Component {
    static contextType = LanguageContext;
    render(){
        return (
            <div>Select Languages:
                <i className="flag us" onClick={() => this.context.onLanguageChange('english')}/>
                <i className="flag hk" onClick={() => this.context.onLanguageChange('cantones')}/>
            </div>
        )
    }
}

export default LanguageSelector