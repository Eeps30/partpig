
import React, { Component } from "react";
import './startModal.css';

class Modal extends Component {
    constructor(props){
        super(props);
        
    }
    hideModal(){
        console.log('clicked');
        document.getElementsByClassName('noResultModal').add.classList('hide');
    }
    render() {
        return(
        <div className="noResultModal toggleDisplay">
            <div className="modalBox">
                <div className="modalEscape" onClick={this.hideModal}>X</div>
                <div className="text modalText">
                    <h1>Welcome To part Pig Beta!</h1>
                    <h3>Try searching Subaru impreza for best results</h3>
                </div>
            </div>
        </div>
        );
    }
}

export default Modal;