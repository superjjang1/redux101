import React, { Component } from 'react'
import {connect} from 'react-redux';
import MeatDept from './MeatDept';
import Dairy from './Dairy';
import FrozenDept from './FrozenDept';

class Main extends Component {
    render() {
        // console.log(connect);
        // const frozens = this.props.frozenData.map((item, i)=> <h1 key ={item.food + i}>{item.quantity} {item.food}</h1>)
        // const dairys = this.props.dairyData.map((item, i)=> <h1 key ={item.food + i}>{item.quantity} {item.food}</h1>)
        // const meats = this.props.meatData.map((item, i)=> <h1 key ={item.food + i}>{item.quantity} {item.food}</h1>)
        const storeInventoryArray = [
            ...this.props.frozenData,
            ...this.props.meatData,
            ...this.props.dairyData
        ];
        let storeProducts = storeInventoryArray.map((product,i)=>{
            return(
                <h3>Type: {product.food} Quantity:{product.quantity}</h3>
            )
        })
        return (
            
                <div key>
                    <h1> Welcome to Publix</h1><hr />
                    {storeProducts}
                </div>
        
        )
    }
}
function mapStateToProps(state){
    return{
        meatData: state.meat,
        frozenData: state.frozen,
        dairyData: state.dairy
    }
}

export default connect(mapStateToProps, null)(Main);
