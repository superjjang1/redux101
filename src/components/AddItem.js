import React, {Component} from 'react';
import addItemAction from '../actions/AddItemAction';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';


class AddItem extends Component {
    state={
        food:"",
        quantity: 0
    }
    submitItem = (e)=>{
        e.preventDefault();
    }
    changeFood = (e)=>{
        this.setState({food:e.target.value})
    }
    changeQuantity = (e)=>{
        this.setState({quantity: Number(e.target.value)})
    }
    render() { 
        return (

            <div> 
                <form onSubmit={this.submitItem}>
                    <input onChange={this.changeFood} type ="text" placeholder="Food Name" />
                    <input onChange={this.changeQuantity} type ="number" min="0" placeholder="0" />
                    <input type="submit" value="submit"/>
                </form>
            </div>
        )
    }
}
function mapDispatchToProps(dispatch){
    return bindActionCreators({
        addItemAction: addItemAction
    },dispatch)   
}

 
export default connection(null,mapDispatchToProps)(AddItem);