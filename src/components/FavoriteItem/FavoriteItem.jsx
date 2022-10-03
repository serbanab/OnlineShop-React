import React from "react";
import {ReactComponent as Close} from "../../assets/icons/delete.svg";
import "./FavoriteItem.css";
import {connect} from "react-redux";
import {removeFavorite} from "../../redux/Favorite/favoriteAction";

function FavoriteItem({name , id , price , currency , image , removeFavorite}){
    return (
        
        <>
            <div className="col-6 favorite-item  d-flex flex-column text-center" >
                <Close onClick = {() => removeFavorite(id)} className = "align-self-end"   />
                <img src = {image} className = "img-fluid align-self-center"  height = "200" width = '200' alt=""/>    
                <h6   className="" >{name}</h6>
                <h6 className = ""  >{price}{currency}</h6>
             </div>   
        </>
    ) 
}


    const matchDispatchToProps = (dispatch) => {

        return{

            removeFavorite : (payload) => {
                dispatch(removeFavorite(payload))
            }

        }

    }

export default connect(null , matchDispatchToProps)(FavoriteItem);



