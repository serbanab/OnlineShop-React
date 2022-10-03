import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../assets/images/Logo.jpg';
import { ReactComponent as Google } from '../../assets/icons/google.svg';
import './Login.css'
import { connect } from 'react-redux';
import { loginUser } from '../../redux/User/userAction';
import {ReactComponent as FaceBook} from "../../assets/icons/FaceBook.svg"

class Login extends React.Component {

    componentDidUpdate(prevProps) {
        if (this.props.user !== prevProps.user) {
            this.props.history.push('/');
        }
    }

    render() {
        return(
            <div className="login-page">
                <Link to='/'>
                    <img src={Logo} alt="logo" className="mb-5 img-fluid"/>
                </Link>

                <h1 className="h2">Login</h1>
                <p>Alege providerul cu care vrei să vrei să te loghezi:</p>
                <button
                    className="btn btn-outline-dark d-flex align-items-center"
                    onClick={() => this.props.signInWithProvider("google")}
                     
                >
                    <Google className="w-50 mr-3"/>
                    <span className="text-nowrap">Loghează-te cu Google</span>
                </button>
                <button className='btn btn-outline-dark text-nowrap mt-3' 
                 onClick={() => this.props.signInWithProvider("facebook")}   >
                    <FaceBook id='facebook'  />
                    Loghează-te cu FaceBook
                    </button>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        user: state.user.data
    }
}

function mapDispatchToProps(dispatch) {
    return {
        signInWithProvider: (provider) => dispatch(loginUser(provider))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);