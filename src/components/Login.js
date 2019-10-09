import React from 'react'

class Login extends React.Component{
    constructor () {
        super();
        this.state = {
            isLoggedIn: true
        };
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick () {
        this.setState(prevState => prevState.isLoggedIn = !prevState.isLoggedIn)
    }

    render () {
        return (
            <div>
                {this.state.isLoggedIn ?
                <div>
                    <h1>User is logged in</h1>
                    <button onClick={() => this.handleClick()}>log out</button>
                </div> :
                <div>
                    <h1>User is logged out</h1>
                    <button onClick={() => this.handleClick()}>log in</button>
                </div>}
            </div>
        )

    }

}


export default Login