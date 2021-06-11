import React from 'react'
import {connect} from 'react-redux'
import * as actionTypes from './actions'

class CounterClass extends React.Component {
    render() {
        return (
        <>
        <h3>counter-class:</h3>
        <p>Counter: <b>{this.props.counter}</b></p>
        <button onClick={() => this.props.onIncrement()}>+</button>
        <button onClick={() => this.props.onDecrement()}>-</button>
        </>)
    }
}

const mapStateToProps = (state) => {
    return {
        counter: state.counter
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onIncrement: () => dispatch({type: actionTypes.INCREMENT}),
        onDecrement: () => dispatch({type: actionTypes.DECREMENT})
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CounterClass)