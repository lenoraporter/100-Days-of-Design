import React, { Component } from 'react';
import { Link } from 'react-router';
import { login, logout, isLoggedIn } from '../utils/AuthService';
import '../App.css';

class Nav extends Component {

  render() {
    return (
        <nav class="navbar navbar-expand-lg navbar-dark">
            <Link className="navbar-brand" to="/">DesignFlix</Link>

            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>


            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav mr-auto">
                    <li class="nav-item active">
                    <Link class="nav-link" to="/">All Videos</Link>
                    </li>
                    <li class="nav-item">
                    {
                    ( isLoggedIn() ) ? <Link class="nav-link" to="/upload">Upload Videos</Link> :  ''
                    }
                    </li>
                </ul>
                <ul class="nav navbar-nav navbar-right">
                    <li class="nav-item">
                    {
                    (isLoggedIn()) ? ( <button className="btn btn-danger log" onClick={() => logout()}>Log out </button> ) : ( <button className="btn btn-info log" onClick={() => login()}>Log In</button> )
                    }
                    </li>
                </ul>
            </div>
        </nav>

    );
  }
}
export default Nav;