import React from 'react';

import { axiosWithAuth } from '../utils/axiosWithAuth';

class Login extends React.Component {
    state = {
        credentials: {
            username: '',
            password: ''
        }
    };

    render(){
        return(
            <>
                <form>
                    <input
                        type='text'
                        name='username'
                        value={this.state.credentials.username}    
                    />
                    <input
                        type='text'
                        name='password'
                        value={this.state.credentials.password}
                    />
                    <button>Log in</button>
                </form>
            </>
        )

    }

};

export default Login;