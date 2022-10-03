import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../assets/images/Logo.jpg';
import { ReactComponent as ShoppingCart } from '../../assets/icons/shopping-cart.svg';
import './Header.css';
import { connect } from 'react-redux';
import { logoutUser } from '../../redux/User/userAction';

function Header(props) {

    const {history} = props;

    return(
        <header className="border-bottom mb-3" id="scroll"  >
            <div className="container-fluid container-min-max-width d-flex justify-content-between align-items-center">
                <div className='d-flex align-items-center' >
                <Link to="/" className="my-3">
                    <img src={Logo} alt="Sirluggia Shop" className="logo"/>
                </Link>
                { history && history.location.pathname === "/terms&&conditions" &&  <ul className = ' d-flex flex-row list-group  ' >
                        <li className = 'list-group-item border-0' >
                            <a className='nav-link'   href="#Definitii">Definitii</a>
                        </li>
                        <li className = 'list-group-item border-0 ' >
                            <a className='nav-link'  href="#DISPOZIȚII GENERALE">DISPOZIȚII GENERALE</a>
                        </li>
                        <li className = 'list-group-item border-0 ' >
                            <a className='nav-link'   href="#POLITICA DE VÂNZARE ONLINE">POLITICA DE VÂNZARE ONLINE</a>
                        </li>
                    </ul>}
                </div>
                <div>
                    { props.user
                        ? <p>Salut, {props.user.displayName}!</p>
                        : null
                    }
                    <div className="d-flex justify-content-end">
                        { props.user
                            ? <p className="logout h5" onClick={() => props.signOut()}>Delogare</p>
                            : <Link to="/login" className="h5 mb-0 ">Logare</Link>
                        }

                        <div className="d-flex align-items-center">
                            <Link to="/cart" className="d-flex">
                                <ShoppingCart className="ml-2"/>
                                <p className="ml-1 mb-0">{ props.numberOfProducts }</p>
                            </Link>
                            <Link to = "/favorites" >
                            <svg   id='star' xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">
                            <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                            </svg>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
}

function mapStateToProps(state) {
    return {
        numberOfProducts: state.cart.products.length,
        user: state.user.data
    }
}
function mapDispatchToProps(dispatch) {
    return {
        signOut: () => dispatch(logoutUser())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);