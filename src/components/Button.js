import React from 'react';
import LanguageContext from '../contexts/languageContext';

class Button extends React.Component {
    static contextType = LanguageContext;
    renderSubmit(value){
        return value === 'english' ? 'Submit' : '提交';
    }
    render(){
        // const text = this.context === 'english' ? 'Submit' : '提交';
        return (
                <button className="ui button primary">
                    <LanguageContext.Consumer>
                        {(value) => this.renderSubmit(value)}
                    </LanguageContext.Consumer>
                </button>
                )
    }
}

export default Button;