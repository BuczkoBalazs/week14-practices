import React, { Component } from 'react'

class ButtonWithClass extends Component {
    constructor() {
        super()
        this.state = {
            key1: "This is the default state.",
            key2: 0
        }
    }

    render() {
        return (
        <div>
            {this.state.key1}
            <button onClick={() => this.setState({key1: "This is no default, mon!"})}>Lick me Class!</button>
            <button onClick={() => this.setState({key2: 1})}>{this.state.key2}</button>
        </div>
        )
    }
}

export default ButtonWithClass
