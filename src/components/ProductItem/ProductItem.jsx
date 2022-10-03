import React from 'react';
import './ProductItem.css';
import { connect } from 'react-redux';
import { addToCart } from '../../redux/Cart/cartAction';
import { Link } from 'react-router-dom';
import {addFavorite} from "../../redux/Favorite/favoriteAction"
import {ReactComponent as Star} from "../../assets/icons/star.svg";

function ProductItem(props) {
    const {name, price, currency, image, id , addFavorite} = props;
        console.log(props);
    return(
        <div className="product-item col-12 col-md-4 mb-3 d-flex flex-column align-items-center">
            <div  className = ' star-div  ' >
            <Star  onClick = {() => addFavorite(
                {
                    favorite : {
                        name,
                        price,
                        currency,
                        image,
                        id,
                    }
                }
            )} id = "star" />
            </div>
            <Link to={`/product/${id}`} className="d-flex flex-column align-items-center">
                <img src={image} alt="productPhoto" className="mb-2"/>
                <p className="mb-1 text-center">{ name }</p>
                <p className="text-center">{ price + currency }</p>
            </Link>
            <button
                className="btn btn-outline-dark"
                onClick={() => props.addToCart({
                    product: {
                        id,
                        name,
                        price,
                        currency,
                        image
                    }
                })}
            >
                Adaugă în coș
            </button>
        </div>
    );
}

function mapDispatchToProps(dispatch) {
    return {
        addToCart: (product) => dispatch(addToCart(product)),
        addFavorite : (favorite) => {
            dispatch(addFavorite(favorite));
        }
    };
}

export default connect(null, mapDispatchToProps)(ProductItem);