import React, { Component } from 'react'
import {connect} from 'react-redux';

class Dairy extends Component {
    render() {
        console.log(connect);
        console.log(this.props.dairyData)
        const Dairys = this.props.dairyData.map((dairy)=>{
            return(
                <div>
                    <h1>
                        Type: {dairy.food}
                    </h1>
                    <h1>
                        Quantity: {dairy.quantity}
                    </h1>
                </div>
            )
        })
        return (
            <div>
                {Dairys}
            </div>
        )
    }
}
function mapStateToProps(state){
    return {
        dairyData: state.dairy
    }
}

export default connect(mapStateToProps)(Dairy);
