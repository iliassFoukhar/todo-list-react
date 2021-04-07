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
            <li key={id} >
            <span 
                className="todoText"
                style={this.todoStyle()} 
                onClick={this.props.clicked.bind(this, id)} >{text}</span> 
            <button 
                className="modifyBtn"><i className="fa fa-pen"></i></button> 
            <button 
                className="deleteBtn"
                onClick={this.props.delete.bind(this, id)}><i className="fa fa-trash"></i></button></li>
        );
    }
}