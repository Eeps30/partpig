import React, {Component} from 'react';
import contact from './contactInfo';
import contactCSS from './contact.css';

class ContactPage extends Component {
    constructor(props){
        super(props)
    }

    render(){

        const contactElements = contact.map((item, index) => {
            return <div className="user">{item.name},{item.role},{item.github},{item.linkedin}</div>
        })

        return(
            <div className="contactContainer">
                <div className="images">
                    Images
                </div>
                <div className="infoContainer">
                    {contactElements}
                </div>
            </div>
        )
    }
}

export default ContactPage