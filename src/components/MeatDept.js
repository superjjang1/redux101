import React, { Component } from 'react'
//in order for this component to know about redux, we need some glue,
//react-redux specifically, to connect the thing
import {connect} from 'react-redux';



class MeatDept extends Component {
    render() {
        // console.log(connect);
        console.log(this.props.meatData);
        const meats = this.props.meatData.map((meat, i)=>{
            return(
                <div key={i}>
                    <h1>
                        Type: {meat.food}
                    </h1>
                    <h1>
                        Quantity: {meat.quantity}
                    </h1>
                </div>
            )
        })

        return (
            <div>
                {meats}
            </div>
        )
    }
}

function mapStateToProps(state){
    //mapStateToProps takes 1 arg;"state"
    //that "state" var, IS the rootReducer(store)
    //mapStateToProps returns an object with:
    //the key/property is the local propname in THIS component
    //value will be the property in the rootReducer(store)
    return {
        meatData: state.meat
    }
}

// export default MeatDept
//we don't export the class when we need REDUX, we export connect(f)
//connect takes 2 args, (1) it takes a function that is going to map the state
//to mapStateToProps (2) a function that maps the dispatch to props. 
//(3) connect, is a function, that returns a function.
// you can rewrite it like this. const meatDeptWithRedux = connect(mapStateToProps)
export default connect(mapStateToProps)(MeatDept);