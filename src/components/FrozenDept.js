import React, { Component } from 'react'
import {connect} from 'react-redux';

export class FrozenDept extends Component {
    render() {
        // console.log(connect);
        console.log(this.props.frozenData);
        const frozens = this.props.frozenData.map((frozen, i)=>{
            return(
                <div key={i}>
                    <h1> 
                    Type: {frozen.food}
                        
                    </h1>
                    <h1>
                    Quantity: {frozen.quantity}

                    </h1>

                </div>
            )
        })
        console.log(frozens)
        return (
            <div>
                {frozens}
            </div>
        )
    }
}
function mapStateToProps(state){
    return{
        frozenData:state.frozen
    }
}

export default connect(mapStateToProps)(FrozenDept);
