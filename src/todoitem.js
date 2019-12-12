import React, { Component } from 'react';

export default class Todoitem extends Component {
    constructor(){
        super();
        this.state = {
            isChecked: false
        }
    }
    handleClick = (e) =>{
        const par = e.target.parentElement;
        const parpar = par.parentElement;
        parpar.classList.add("d-none"); 
    }
    onClick = () =>{
        this.setState(()=>({
            isChecked: !this.state.isChecked
        }))
    }
    render() {
        let i = 1;
        return (
            <React.Fragment>
                <div className="row mb-3 border-bottom">
                    <div className="col-md-1">
                        <input type="checkbox" checked={this.state.isChecked} onChange={this.onClick}/>
                    </div>
                    <div className="col-md-9">
                        <span className={this.state.isChecked ? "striked text-muted font-italic" : "font-weight-normal text-monospace"}>{this.props.todo}</span>
                    </div>
                    <div className="col-md-2 mb-1">
                        <button className="btn btn-danger btn-sm text-right" onClick={this.handleClick} id={i++}>Delete</button>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}
