import React from 'react';
import {Link} from 'react-router-dom';
import SigninLink from './SigninLink';
import SignoutLink from './SignoutLink';
import {connect} from 'react-redux';



const Navbar =(props)=>{
    const {auth,profile} = props;
    const links =auth.uid ? <SigninLink profile={profile}/> : <SignoutLink />;
    return (
        <nav className="nav-wrapper grey darken-3">
            <div className="container">
                <Link to='/' className="brand-logo">Blog</Link>
                
                {links}
        
           </div>
        </nav>       
    )
}

const mapStatetoProps =(state)=>{
    return {
        auth:state.firebase.auth,
        profile:state.firebase.profile
    }
}

export default connect(mapStatetoProps)(Navbar)