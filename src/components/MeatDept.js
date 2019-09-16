import React, { Component } from 'react'
//in order for this component to know about redux, we need some glue,
//react-redux specifically, to connect the thing
import {connect} from 'react-redux';


class MeatDept extends Component {
    render() {
        return (
            <div>
                <h2>Meaty Man</h2>
            </div>
        )
    }
}

export default MeatDept
