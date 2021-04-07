import React, { Component } from 'react'

export default class Todo extends Component {
    todoStyle = ()=> {
        const {completed} = this.props;
        let compStyle = {
            textDecoration: "line-through",
            
        }
        let uncoStyle = {
            textDecoration: "none",
            
        }
        return completed ? compStyle : uncoStyle;
        
    }
 
    
    render() {
        const { text, id} = this.props;
        this.todoStyle = this.todoStyle.bind(this);
        
        return (
            <li key={id} 
                style={this.todoStyle()} 
                onClick={this.props.clicked.bind(this, id)} 
            >{text}</li>
        );
    }
}
// Todo.propTypes = {
//     clicked: React.PropTypes.func
//   };
