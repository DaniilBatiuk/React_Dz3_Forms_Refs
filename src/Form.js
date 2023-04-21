import React, { useState } from 'react'
export default function Form() {
    const [login, setLogin] = useState("");
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");
    const [tags, setTags] = useState("");
    const handleSubmit = event => {
        event.preventDefault();
        if(login.length === 0 || password.length === 0 || email.length === 0 || tags.length === 0){
            alert("All fields must be full");
        }
        else if (login.length < 6) {
            alert("Login length must be more then 6 characters");
            setLogin("");
        }
        else if (password.length < 6) {
            alert("Password length must be more then 6 characters");
            setPassword("");
        }
        else if (!(/[A-Z]/.test(password))){
            alert("Password must contain an uppercase character");
            setPassword("");
        }
        else {
            alert(`Login : ${login}\nPassword : ${password}\nEmail : ${email}\nTags : ${tags}`);
        }
    }
    const handleLoginChange = event => {
        setLogin(event.target.value);
    }
    const handlePasswordChange = event => {
        setPassword(event.target.value);
    }
    const handleEmailChange = event => {
        setEmail(event.target.value);
    }
    const handleTagsChange = event => {
        setTags(event.target.value);
    }
    return <form onSubmit={handleSubmit}>
        <div className='mb-3'>
            <label htmlFor='login'>Login</label><br />
            <input type='text' name='login' value={login} onChange={handleLoginChange}></input>
        </div>
        <div className='mb-3'>
            <label htmlFor='password'>Password</label><br />
            <input type="password" name='password' value={password} onChange={handlePasswordChange}></input>
        </div>
        <div className='mb-3'>
            <label htmlFor='email'>Email</label><br />
            <input type="email" name='email' value={email} onChange={handleEmailChange}></input>
        </div>
        <div className='mb-3'>
            <label htmlFor='tags'>Tags</label><br />
            <input type="text" name='tags' value={tags} onChange={handleTagsChange}></input>
        </div>
        <input type='submit' value="Add" className='btn btn-secondary'></input>
    </form>
}