import React from 'react';


const register = () => {
    return ( 
        <>
        
            <form action="">
            <h3>Register</h3>
            <div className="form-group">
                <label htmlFor="first-name">First Name</label>
                <input type="text" className="form-control"/>
            </div>
            <div  className="form-group">
            <label htmlFor="last-name">Last Name</label>
                <input type="text" className="form-control"/>
            </div>
                <div>
                    <label htmlFor="mobileno">Mobile No</label>
                    <input type="text" className="form-control"/>
                </div>
                <div>
                    <label htmlFor="email-id">E-mail</label>
                    <input type="text" className="form-control"/>
                </div>
                <div>
                    <label htmlFor="dob">DOB</label>
                    <input type="date"/>
                </div>
                <div>
                    <label htmlFor="gender">Gender</label>
                    
                    <input type="radio" id="male" name="gender" value="male"/>
                    <label htmlFor="male">Male</label>
                    <input type="radio" id="female" name="gender" value="female"/>
                    <label htmlFor="female">Female</label>
                    <input type="radio" id="other" name="gender" value="other"/>
                    <label htmlFor="other">Other</label>   
                </div>
              
                <div>
                    <label htmlFor="repassword">Enter Password</label>
                    <input type="password" className="form-control"/>
                </div>
                <div>
                    <label htmlFor="repassword">Re-Enter Password</label>
                    <input type="password" className="form-control"/>
                </div>
                <button type="submit" className="btn btn-dark btn-lg btn-block">Register</button>
                <p className="forgot-password text-right">
                    Already registered <a href="#">log in?</a>
                </p>
                
            </form>
        </>
     );
}
 
export default register;