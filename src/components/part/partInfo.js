import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import fb from '../../assets/images/facebook.png';
import email from '../../assets/images/email.png';
import axios from 'axios';

class PartInfo extends Component {

    constructor(props){
        super(props);

        this.userId = localStorage.getItem('user');
        this.state = {
            partInfo:props.partInfo,
            editable: false,
            updated: false
        }
        this.oldPartInfo = props.partInfo; 
        this.editField = this.editField.bind(this);
        this.handleEditButton = this.handleEditButton.bind(this);
        this.resetPartInfo = this.resetPartInfo.bind(this);
    }

    addCart(){
        this.props.addCart(this.state.partInfo,false);
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
        const url = "http://localhost:8000/teampartpig/src/assets/php/editPartDetails.php";

        axios({
            url: url,
            method: 'post',
            data: this.state.partInfo, 
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            }
        }).then(resp=>{     
            this.oldPartInfo = this.state.partInfo;                  
            this.setState({
                editable:false,
                updated: true
            });     
            this.handleEditButton(document.getElementsByClassName('productDetailsContainer')[0],false);
            
        }).catch(err => {
            console.log("There was an error:");
            this.props.history.push('/error');                

        });
        
    }

    confirmPart(){       
        const params = {
            status: 'available',
            id: this.state.partInfo.id
        };
        const urlStatus = 'http://localhost:8000/teampartpig/src/assets/php/updatePartStatus.php';
        axios.get(urlStatus, { params }).then(resp => {
            if (resp.data.success) {
                this.props.history.push('/dashboard');
            }
        }).catch(err => {
            console.log('error is: ', err);
        });
    }

    cancelPart(){        
        const params = {
            status: 'deleted',
            id: this.state.partInfo.id
        };
        const urlStatus = 'http://localhost:8000/teampartpig/src/assets/php/updatePartStatus.php';
        axios.get(urlStatus, { params }).then(resp => {
            if (resp.data.success) {
                this.props.history.push('/sellpart');
            }
        }).catch(err => {
            console.log('error is: ', err);
        });
    }

    componentDidMount(){
        if(this.props.fromDashboard=='true'){
            this.handleEditButton(document.getElementsByClassName('productDetailsContainer')[0],true);
            this.setState({
                editable:true           
            });
        }
    }

    componentDidUpdate(){
        if(this.state.partInfo !== this.props.partInfo && !this.state.editable && !this.state.updated){
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
        let confirmButton = '';
        let deletePartButton = '';

        if(this.props.isCart){
            multiUsebutton = <button className='button-link' onClick={()=>this.props.removePart(this.state.partInfo)}>Remove</button>;
        }else if(this.props.fromDashboard=='true'|| this.props.newPart=='true'){
            if(this.props.newPart=='true'){
                confirmButton = <button className='button-link editButton' onClick={this.confirmPart.bind(this)}>Confirm</button>;
                deletePartButton = <button className='button-link editButton' onClick={this.cancelPart.bind(this)}>Cancel</button>;
            }
            if(this.state.editable){
                editableUsebutton = <button className='button-link editButton' onClick={this.savePartInfo.bind(this)}>Save</button>;
                cancelButton = <button className='button-link editButton' onClick={this.resetPartInfo}>Cancel</button>;
                messageEditable = <span className='editMessage'>Click in the elements on blue to edit them</span>
                confirmButton='';
                deletePartButton = '';
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
                if(this.userId !== this.state.partInfo.seller_id){
                    multiUsebutton = <button className='button-link addButton' onClick={()=>{this.addCart()}}>Add to Cart</button>;
                }                
            }
        }

        if(this.props.isDetails){
            details = (
                <div>
                    <hr/>                
                    <p className="productDescription"><span id='description'>{this.state.partInfo.description}</span></p>
                    <p className="productCondition">Condition: {this.state.partInfo.part_condition}</p>
                    <p className="productLocation">Location: {this.state.partInfo.city + ', '+ this.state.partInfo.state}</p>               
                    <p>Seller: {this.state.partInfo.seller} {confirmButton}{editableUsebutton}{cancelButton}{deletePartButton}</p>
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
                {/* {share} */}
                <span id='brand'>{this.state.partInfo.brand}</span> <span id='part_number' className="partNumber">{this.state.partInfo.part_number} </span><span className="partNumber">P/N:</span>
                <h3 className="productTitle"><span id='part_name'>{this.state.partInfo.part_name}</span></h3>
                <span><b>{this.state.partInfo.category} - {this.state.partInfo.make} {this.state.partInfo.model} {this.state.partInfo.year} </b></span>
                
                <p className="productPrice"><span>$</span><span id='price_usd'>{this.state.partInfo.price_usd}</span> {multiUsebutton}</p>          
                {details}
            </div> 
        );
    }
}


export default PartInfo;
