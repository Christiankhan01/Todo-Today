import React from 'react'; 
import {Link} from 'react-router-dom'; 

const Hero = () => {
    return (
        <div className="jumbotron mt-5">
            <h1>Welcome to your Digital Todo List</h1>
            <p>Register, Sign-in and create your Todo List</p>
            <Link to ="/login" className="btn btn-primary ">Login</Link>
            <Link to ="/register" className="btn btn-primary ml-3">Register</Link>
            </div>
    )
}

export default Hero; 
