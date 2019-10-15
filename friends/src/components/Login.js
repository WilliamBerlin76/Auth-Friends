import React from 'react';

import { axiosWithAuth } from '../utils/axiosWithAuth';

class Login extends React.Component {
    state = {
        credentials: {
            username: '',
            password: ''
        }
    };

    handleChange = e => {
        this.setState({
            credentials: {
                ...this.state.credentials,
                [e.target.name]: e.target.value
            }
        });
    };

    submit = e => {
        e.preventDefault();
        axiosWithAuth()
            .post('/api/login', this.state.credentials)
            .then(res => {
                console.log(res)
                localStorage.setItem('token', res.data.payload);
                
            })
            .catch(err => console.log(err.response))
    }
    render(){
        return(
            <>
                <form onSubmit={this.submit}>
                    <input
                        placeholder="Username"
                        type='text'
                        name='username'
                        value={this.state.credentials.username} 
                        onChange={this.handleChange}   
                    />
                    <input
                        placeholder="Password"
                        type='text'
                        name='password'
                        value={this.state.credentials.password}
                        onChange={this.handleChange}  
                    />
                    <button>Log in</button>
                </form>
            </>
        )

    }

};

export default Login;