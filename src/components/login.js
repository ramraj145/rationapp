import React from 'react';
import { NavLink } from 'react-router-dom';


const login = () => {
    return ( 
        <>
         <h3>Log In</h3>
            <form>
            <div className="form-group">
                    <label>Username</label>
                    <input type="uname" className="form-control" placeholder="Enter username" />
                </div>

                <div className="form-group">
                    <label>Password</label>
                    <input type="pass" className="form-control" placeholder="Enter password" />
                </div>

                <div className="form-group">
                    <div className="custom-control custom-checkbox">
                        <input type="checkbox" className="custom-control-input" id="customCheck1" />
                        <label className="custom-control-label" htmlFor="customCheck1">Remember me</label>
                    </div>
                </div>

                <button type="submit" className="btn btn-primary btn-block">Submit</button>
                <button type="signup" className="btn btn-primary btn-block" href="register">Register</button>
                <p className="forgot-password text-right">
                    Forgot <a href="#">password?</a>
                </p>
            </form>
        </>
     );
}
 
export default login;