import React from 'react';
import LanguageContext from '../contexts/languageContext';
import ColorContext from '../contexts/ColorContext';

class Button extends React.Component {
    static contextType = LanguageContext;
    renderSubmit(language){
        return language === 'english' ? 'Submit' : '提交';
    }
    renderButton(color){
        return (
            <button className={`ui button ${color}`}>
                <LanguageContext.Consumer>
                    {({language}) => this.renderSubmit(language)}
                </LanguageContext.Consumer>
            </button>
        )
    }
    render(){
        // const text = this.context === 'english' ? 'Submit' : '提交';
        return (
                <ColorContext.Consumer>
                {(color) =>
                    this.renderButton(color)
                }
                </ColorContext.Consumer>
                )
    }
}

export default Button;