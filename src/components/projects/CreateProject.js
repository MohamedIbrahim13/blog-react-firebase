import React, { Component } from 'react';
import {connect} from 'react-redux';
import projectAction from '../../actions/projectAction';
import {Redirect} from 'react-router-dom';

class CreateProject extends Component {
    state = { title:'',content:''};
    handleSubmit=(e)=>{
        e.preventDefault();
        this.props.createProject(this.state);
        this.props.history.push('/');
    }
    handleChange=(e)=>{
        this.setState({[e.target.id]:e.target.value});
    }
    
    render() {
        const {auth}=this.props;
        if(!auth.uid) return <Redirect to='/signin'/>
        return (
            <div className="container">
                <form className="white" onSubmit={this.handleSubmit}>
                    <h5 className="grey-text text-darken-3">Create a New Project</h5>
                    <div className="input-field">
                        <input type="text" id='title' onChange={this.handleChange} />
                        <label htmlFor="title">Project Title</label>
                    </div>
                    <div className="input-field">
                        <textarea id="content" className="materialize-textarea" onChange={this.handleChange}></textarea>
                        <label htmlFor="content">Project Content</label>
                    </div>
                    <div className="input-field">
                        <button className="btn pink lighten-1">Create</button>
                    </div>
                </form>
            </div>
        )
    }
}
const mapStatetoProps =(state)=>{
    return {
        
        auth:state.firebase.auth
    }
}
const mapDispatchtoProps =(dispatch)=>{
    return {createProject:(project)=>dispatch(projectAction(project))}
}

export default connect(mapStatetoProps,mapDispatchtoProps)(CreateProject)