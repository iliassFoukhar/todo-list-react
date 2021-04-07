import React, { Component } from 'react'

export default class Todo extends Component {
    state = {
        text: this.props.text,
        updating:false
    };

    inputStyle = {
        width:'100%', 
        display:'block'
    };

    
    todoStyle = () => {
        const {completed} = this.props;
        const {updating} = this.state;
        let compStyle = {
            textDecoration: "line-through",
            width:"100%",
            display:"block"
        }
        let uncoStyle = {
            textDecoration: "none",
            width:"100%",
            display:"block"
        }
        let style = completed ? compStyle : uncoStyle;  
        if(updating === true){
            style.display = "none";
            this.inputStyle = {
                display:"block",
                width:"100%"
            };
            
        }
        else{
            style.display = "block";
            this.inputStyle = {
                display:"none",
                width:"100%"
            };
        }
        
        return style;
    };
    
    changeText = (e) => {
        this.setState({text:e.target.value});
    };
    
    updateManager = (id) => {
        const {updating , text} = this.state;
        this.setState({updating: !updating}, ()=>{
            if(this.state.updating === true){
                this.props.update.bind(this, id, text);
            }
        });
    }
    render() {
        const { id} = this.props;
        this.todoStyle = this.todoStyle.bind(this);
        
        return (
            <li key={id} >
                <span 
                    className="todoText"
                    style={this.todoStyle()} 
                    onClick={this.props.clicked.bind(this, id)} 
                    >{this.state.text}
                </span> 
                <input 
                    type="text" 
                    value={this.state.text}
                    onChange={this.changeText}
                    style={this.inputStyle}/>
                <button 
                    className="modifyBtn"
                    onClick={this.updateManager.bind(this, id)}>
                        <i className="fa fa-pen"></i></button> 
                <button 
                    className="deleteBtn"
                    onClick={this.props.delete.bind(this, id)}><i className="fa fa-trash"></i></button>
            </li>
        );
    }
}