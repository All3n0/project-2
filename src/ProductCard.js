import React, { useState,useParams, useEffect } from "react";

function ProductCard(){
    const [product,setproduct]=useState([]);
    const params=useParams()
    const productId=params.id
    const [isDeleted,setIsDeleted]=useState(false)
    const [isAdded,setIsAdded]=useState(false)

    useEffect(()=>{
        fetch(`https://api.escuelajs.co/api/v1/products/${productId}`)
        .then(r=>r.json())
        .then(data=>setproduct(data))
        .catch(error=>console.error(error));
    },[productId])
    
    function handleDelete(){
        fetch(`https://api.escuelajs.co/api/v1/products/${productId}`,{
            method:"DELETE",
        })
        .then((response)=>{
            if(!response.ok){
                throw new Error("Failed to Delete");;
            }
            setIsDeleted(true)
        })
        .catch((error)=>console.error(error))
    }
    if (isDeleted){
        window.location.href='/products'
    }
    function handleAdd(){
        fetch(`https://api.escuelajs.co/api/v1/products${productId}`)
    }
    return(
        <div id="product-container">
            <div id="product-image">
                <img src={product.images[1]} alt="image" />
            </div>
            <div id="product-details">
                <h2>{product.title}</h2>
                <p>PRICE:{product.price}</p>
            </div>
            <div id="description">
                <h3>DESCRIPTION</h3>
                <p>{product.description}</p>
            </div>
            <div id="buttons">
                <button onClick={handleDelete}>Delete</button>
                <button onClick={handleAdd}>Add</button>
            </div>
        </div>
    )
}

export default ProductCard;