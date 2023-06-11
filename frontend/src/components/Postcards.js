import { useState } from "react";
import React from "react";

export const  Postcards =(props) =>{
console.log(props.completed)
    return(
        <div className="product-card">
            <h1>------------------------------------</h1>
            <h2>Post by User {props.id}{props.name}</h2>
            <br/>
            <p>{props.title}{props.username}</p>
            <br/>
            <p>{props.body} {props.email} {props.completed}</p>
        </div>
    )
    
    }