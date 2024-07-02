import React from 'react'
import './App.css'

function Login() {
    return (
        <div class="login-container">
        <div class="login-box">
            <div class="avatar"></div>
            <h2>My Account</h2>
            <form>
                <div class="input-group">
                    <label for="login">Login</label>
                    <input type="text" id="login" name="login"/>
                </div>
                <div class="input-group">
                    <label for="password">Password</label>
                    <input type="password" id="password" name="password"/>
                    <a href="#" class="forgot-password">Forgot password?</a>
                </div>
                <button type="submit" class="btn">Sign in</button>
            </form>
        </div>
    </div>
    )
}

export default Login
