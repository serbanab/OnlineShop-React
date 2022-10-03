
import React from "react";
import FavoriteItem from "../FavoriteItem/FavoriteItem";
import {connect} from "react-redux";
import NoProducts from "../NoProducts/NoProducts"
    
function FavoriteList({favorites}){
    return (
        <>
        { favorites.length !== 0 && <div className="container " >
            <div className="row" >
                {favorites && favorites.map((item) => { // sa verific destructurare directa 
                    console.log(item);
                    return <FavoriteItem name = {item.name} id = {item.id} currency = {item.currency} 
                    image = {item.image} price = {item.price} />
                })}
            </div>
        </div>}

              {favorites.length === 0 && <NoProducts text = "Nu ai produse la favorite!"  />}

        </>       
    )
}

const mapStateToProps = (state) => {

    return{
        favorites : state.favorites.favorites,
    }
}

export default connect(mapStateToProps , null)(FavoriteList);