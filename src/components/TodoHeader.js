import React, { Component } from 'react'

export default class TodoHeader extends Component {
    render() {
        if(this.props.remaining === 0){    
            return (
                <header>
                    <h1>Hello Iliass</h1>
                    <h3 id="remaining">You have no more tasks to do</h3>
                </header>
            )
        }
        else{    
            return (
                <header>
                    <h1>Hello Iliass</h1>
                    <h3 id="remaining">You have {this.props.remaining} tasks left</h3>
                </header>
            )
        }
    }
}
