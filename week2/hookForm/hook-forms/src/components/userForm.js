import React, { useState } from  'react';
    
const UserForm = (props) => {
    const [firstname, setFirstName] = useState("");
    const [lastname, setLasttName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmpassword, setConfirmPassword] = useState("");
    
    const createUser = (e) => {
        // we must prevent the default refresh of the browser to keep our state from being reset
        e.preventDefault();
        
        // shorthand ES6 syntax for building an object - see notes above
        const newUser = { firstname, lastname, email, password };
        console.log("Welcome", newUser);
    	setFirstName("");
        setLasttName("");
    	setEmail("");
    	setPassword("");
        setConfirmPassword("")
    };
    
    return(
        <div className='App'>
            <form onSubmit={ createUser }>
                <div>
                    <label htmlFor='firstname'>First Name: </label> 
                    <input type="text" value={firstname} onChange={ (e) => setFirstName(e.target.value) } />
                </div>
                <div>
                    <label htmlFor='lastname'>Last Name: </label> 
                    <input type="text" value={lastname} onChange={ (e) => setLasttName(e.target.value) } />
                </div>
                <div>
                    <label htmlFor='email'>Email Address: </label> 
                    <input type="text" value={email} onChange={ (e) => setEmail(e.target.value) } />
                </div>
                <div>
                    <label htmlFor='password'>Password: </label>
                    <input type="password" value={password} onChange={ (e) => setPassword(e.target.value) } />
                </div>
                <div>
                    <label htmlFor='confirmpassword'>Confirm Password: </label>
                    <input type="password" value={confirmpassword} onChange={ (e) => setConfirmPassword(e.target.value) } />
                </div>
                <div>
                    <h1>{firstname} {lastname}</h1>
                    <h3>{email}</h3>
                    <p>{password}</p>
                    <p>{confirmpassword}</p>
                </div>
            </form>

        </div>
    );
};
    
export default UserForm;
