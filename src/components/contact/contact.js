import React, {Component} from 'react';
import contact from './contactInfo';
import contactCSS from './contact.css';
import githubIcon from '../../assets/images/contact-icons/github-icon.png'
import linkedinIcon from '../../assets/images/contact-icons/linkedIn-icon.png'
import headshot from '../../assets/images/contact-icons/headshot.png'

class ContactPage extends Component {
    constructor(props){
        super(props)
    }

    render(){

        const contactElements = contact.map((item, index) => {
            return (
                <div className="users" key={index}>
                    <div>
                        <img className="userHeadshot" src={headshot}/>
                    </div>
                    <div className="userName">{item.name}</div>
                    <div className="userRole">{item.role}</div>
                        <div className="contactIcons">
                            <div className="githubLink">
                                <a href={`${item.github}`}><img src={githubIcon}/></a>
                            </div>
                            <div className="linkedInLink">
                                <a href={`${item.linkedin}`}><img src={linkedinIcon}/></a>
                            </div>
                        </div>
                </div>
            )
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