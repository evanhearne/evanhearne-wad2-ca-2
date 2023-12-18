import React, { useState } from 'react';
import axios from 'axios';

const PageTemplate = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleUsernameChange = (event) => {
        setUsername(event.target.value);
    };

    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        // Add your login logic here
        axios.post('http://localhost:8080/api/users?action=register', {
            "username": username,
            "password": password
        })
            .then((response) => {
                window.location.href = '/login';
            }, (error) => {
                console.log(error);
            });
    };

    return (
        <div>
            <h1>Register Page</h1>
            <form onSubmit={handleSubmit}>
                <label>
                    Username:
                    <input type="text" value={username} onChange={handleUsernameChange} />
                </label>
                <br />
                <label>
                    Password:
                    <input type="password" value={password} onChange={handlePasswordChange} />
                </label>
                <br />
                <button type="submit">Register</button>
            </form>
        </div>
    );
}

export default PageTemplate;