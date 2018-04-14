import React, {Component} from 'react';
import './partInfo.css';
import {Link} from 'react-router-dom';
import fb from '../../../assets/images/facebook.png';
import email from '../../../assets/images/email.png';



class PartInfo extends Component {

    constructor(props){
        super(props);

        this.state = {
            partInfo:props.partInfo,
            editable: false
        }
        this.oldPartInfo = props.partInfo; 
        this.editField = this.editField.bind(this);
        this.handleEditButton = this.handleEditButton.bind(this);
        this.resetPartInfo = this.resetPartInfo.bind(this);
    }

    addCart(){
        this.props.addCart(this.state.partInfo);
        if(this.props.history){
            this.props.history.push(this.props.urlBack);
        }   
    }
    
    containsObject(obj, list) {        
        for (let i = 0; i < list.length; i++) {
            if (list[i].id === obj.id) {
                return true;
            }
        }    
        return false;
    }
    
    editField(event){
        event.preventDefault();
        const element = event.target;
        const elementId = element.id;
        const elementText = element.textContent
        const newPartInfo = {...this.state.partInfo};
        newPartInfo[elementId] = elementText;
        this.setState({
            partInfo: newPartInfo
        });
    }

    handleEditButton(element,editableFlag){
        const numChild = element.childNodes.length
        for(let i = 0; i < numChild; i++){
            let child = element.childNodes[i];
            if(child.tagName === 'SPAN' && child.id !==''){
                if(editableFlag){
                    child.contentEditable = true;
                    child.onblur=this.editField;
                    child.classList.add("editable");
                }else{
                    child.contentEditable = false;
                    child.onblur='';
                    child.classList.remove("editable");
                }
            }else{
                this.handleEditButton(child,editableFlag);
            }
        }
    }

    resetPartInfo(){
        this.setState({
            editable:false,
            partInfo: this.oldPartInfo
        });
        this.handleEditButton(document.getElementsByClassName('productDetailsContainer')[0],false);
    }

    savePartInfo(){
        //axios call to update the part  
        this.setState({
            editable:false
        });    
        this.handleEditButton(document.getElementsByClassName('productDetailsContainer')[0],false);
        console.log('partInfo:',this.state.partInfo);
    }

    componentDidUpdate(){
        if(this.state.partInfo !== this.props.partInfo){
            this.setState({
                partInfo:this.props.partInfo
            });
        }
    }

    render(){
        let details = '';     
        let share = '';  
        let multiUsebutton = '';        
        let editableUsebutton = '';
        let cancelButton = '';
        let messageEditable = '';

        if(this.props.isCart){
            multiUsebutton = <button className='button-link' onClick={()=>this.props.removePart(this.state.partInfo)}>Remove</button>;
        }else if(this.props.fromDashboard=='true'){
            if(this.state.editable){
                editableUsebutton = <button className='button-link editButton' onClick={this.savePartInfo.bind(this)}>Save</button>;
                cancelButton = <button className='button-link editButton' onClick={this.resetPartInfo}>Cancel</button>;
                messageEditable = <span className='editMessage'>Click in the elements on grey to edit them</span>
            }else{
                editableUsebutton = <button className='button-link editButton' onClick={()=>{
                    this.setState({editable: true});
                    this.handleEditButton(document.getElementsByClassName('productDetailsContainer')[0],true);}}>Edit</button>;
                cancelButton ='';
            }
        }else{
            if(this.containsObject(this.state.partInfo,this.props.cartParts)){
                multiUsebutton = <button className='disabled addButton'>Added</button>;            
            }else{
                multiUsebutton = <button className='button-link addButton' onClick={()=>{this.addCart()}}>Add to Cart</button>;
            }
        }

        if(this.props.isDetails){
            details = (
                <div>
                    <hr/>                
                    <p className="productDescription"><span id='description'>{this.state.partInfo.description}</span></p>
                    <p className="productCondition">Condition: {this.state.partInfo.condition}</p>
                    <p className="productLocation">Location: {this.state.partInfo.city + ', '+ this.state.partInfo.state}</p>               
                    <p>Seller: {this.state.partInfo.seller} {/*<Link className='button-link' to={"/contactSeller"}>Contact</Link>*/} {editableUsebutton}{cancelButton}</p>
                    {messageEditable}
                </div>           
            );
            
            share = (
                <div className='share'>
                    Share this <img src={email} /> <img src={fb} />
                </div>
            );
        }
      

        return (
            <div className={this.props.infoClass}>
                {share}
                <span id='brand'>{this.state.partInfo.brand}</span> <span id='partNumber' className="partNumber">{this.state.partInfo.partNumber} </span><span className="partNumber">P/N:</span>
                <h3 className="productTitle"><span id='title'>{this.state.partInfo.title}</span></h3>
                <span><b>{this.state.partInfo.category} - {this.state.partInfo.make} {this.state.partInfo.model} {this.state.partInfo.year} </b></span>
                
                <p className="productPrice"><span>$</span><span id='price'>{this.state.partInfo.price}</span> {multiUsebutton}</p>          
                {details}
            </div> 
        );
    }
}


export default PartInfo;