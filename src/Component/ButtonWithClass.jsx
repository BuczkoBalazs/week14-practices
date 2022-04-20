import React, { Component } from 'react'

class ButtonWithClass extends Component {
    constructor() {
        super()
        this.state = {
            key1: "This is the default state."
        }
    }

    render() {
        return (
        <div>
            {this.state.key1}
            <button onClick={() => this.setState({key1: "This no default, mon!"})}>Lick me Class!</button>
        </div>
        )
    }
}

export default ButtonWithClass
