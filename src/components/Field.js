import React from 'react';
import LanguageContext from '../contexts/languageContext';
class Field extends React.Component {
    static contextType = LanguageContext;
    render(){
        const text = this.context.language === 'english' ? 'Name' : '名字';
        return (
            <div className="ui field">
                <label>{text}</label>
                <input />
            </div>
        )
    }
}
export default Field;