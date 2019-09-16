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

        return (
            
                <div>
                    <h1> Welcome to Publix</h1><hr />
                    <h3>Meat Department</h3>
                    <MeatDept /><hr/>
                    <h3>Dairy Department</h3>
                    <Dairy /><hr />
                    <h3>Frozen Foods</h3>
                    <FrozenDept />
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
