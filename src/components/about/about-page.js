import React, {Component} from 'react'
import contact from './about-info'
import contactCSS from './about.css'
import githubIcon from '../../assets/images/contact-icons/github-icon.png'
import linkedinIcon from '../../assets/images/contact-icons/linkedIn-icon.png'
import headshot from '../../assets/images/contact-icons/headshot.png'
import casualBobbleBody from '../../assets/images/bobble-bodies/partPigBobbleBody.png'
import conneryHead from '../../assets/images/bobble-bodies/conneryHead.png'

class AboutPage extends Component {
    constructor(props){
        super(props)
    }

    render(){

        const contactElements = contact.map((item, index) => {
            return (
                <div className="users" key={index}>
                    
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

        const bobbleBodyStyle1 = {
            'backgroundImage': 'url('+casualBobbleBody+')',
            'height': '80%',
            'backgroundSize': 'contain',
            'backgroundRepeat': 'no-repeat',
            'marginTop': '35%',
            'marginLeft': '25%'
        };

        // const bobbleBodyStyle2 = {
        //     'backgroundImage': 'url('+businessBody+')',
        //     'height': '80%',
        //     'backgroundSize': 'contain',
        //     'backgroundRepeat': 'no-repeat',
        //     'marginTop': '35%',
        //     'marginLeft': '25%'
        // };

        const bobbleHeadStyle1 = {
            'content': 'url('+conneryHead+')',
            'width': '113%',
            'backgroundSize': 'contain',
            'backgroundRepeat': 'no-repeat',
            'marginLeft': '-22%',
            'animation': 'bobble .4s',
            'animationIterationCount': 'infinite'
        }

        return(
            <div className="contactContainer">
                <div className="images">
                    <div>
                        <div className="bobbleBody1" style={bobbleBodyStyle1}>
                            <div className="bobbleHead1" style={bobbleHeadStyle1}></div>
                        </div>
                    </div>
                    <div>
                        <div className="bobbleBody1" style={bobbleBodyStyle1}>
                            <div className="bobbleHead1" style={bobbleHeadStyle1}></div>
                        </div>
                    </div>
                    <div>
                        <div className="bobbleBody1" style={bobbleBodyStyle1}>
                            <div className="bobbleHead1" style={bobbleHeadStyle1}></div>
                        </div>
                    </div> 
                    <div>
                        <div className="bobbleBody1" style={bobbleBodyStyle1}>
                            <div className="bobbleHead1" style={bobbleHeadStyle1}></div>
                        </div>
                    </div> 
                    <div>
                        <div className="bobbleBody1" style={bobbleBodyStyle1}>
                            <div className="bobbleHead1" style={bobbleHeadStyle1}></div>
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