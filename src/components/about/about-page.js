import React, {Component} from 'react'
import contact from './about-info'
import contactCSS from './about.css'
import githubIcon from '../../assets/images/contact-icons/github-icon.png'
import linkedinIcon from '../../assets/images/contact-icons/linkedIn-icon.png'
import headshot from '../../assets/images/contact-icons/headshot.png'
import alexHead from '../../assets/images/bobble-bodies/alex-head.png'
import evanHead from '../../assets/images/bobble-bodies/evan-head.png'
import brianHead from '../../assets/images/bobble-bodies/brian-head.png'
import daveHead from '../../assets/images/bobble-bodies/dave-head.png'
import liHead from '../../assets/images/bobble-bodies/li-head.png'

class AboutPage extends Component {
    constructor(props){
        super(props)

        this.state = {
            isLoaded: false
        }

    }

    render(){

        const { song } = this.props;
        const { isLoaded } = this.state;

        const contactElements = contact.map((item, index) => {
            
            return (
                <div className="users" key={index}>
                    
                    <div className="userName">{item.name}</div>
                    <div className="userRole">{item.role}</div>
                        <div className="contactIcons">
                            <div className="githubLink">
                                <a onClick={() => window.open(`${item.github}`, "_blank")}><img src={githubIcon}/></a>
                            </div>
                            <div className="linkedInLink">
                                <a onClick={() => window.open(`${item.linkedin}`, "_blank")}><img src={linkedinIcon}/></a>
                            </div>
                        </div>
                </div>
            )
        })

        return(
            <div className="aboutUsContainer">
                <div className="images">
                    <div className='person'>
                        <div className="bobbleBody1">
                            <div className="bobbleHead1 head"></div>
                        </div>
                    </div>
                    <div className='person'>
                        <div className="bobbleBody1">
                            <div className="bobbleHead2 head"></div>
                        </div>
                    </div>
                    <div className='person'>
                        <div className="bobbleBody1">
                            <div className="bobbleHead3 head"></div>
                        </div>
                    </div> 
                    <div className='person'>
                        <div className="bobbleBody1">
                            <div className="bobbleHead4 head"></div>
                        </div>
                    </div> 
                    <div className='person'>
                        <div className="bobbleBody1">
                            <div className="bobbleHead5 head"></div>
                        </div>
                    </div>                 
                </div>
                <div className="infoContainer">
                    {contactElements}
                </div>
            </div>
        )
    }
}

export default AboutPage