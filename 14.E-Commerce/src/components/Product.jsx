import React from 'react'
import '../css/product.css'
import { useNavigate } from 'react-router-dom'

function Product({ product }) {

    const { category, description, id, image, price, rating, title } = product
    const navigate = useNavigate();

    return (
        <div className='card'>
            <img src={image} alt='' className='image'/>
            <div>
                <p style={{textAlign:'center',height:'50px'}}>{title}</p>
                <h3 style={{textAlign:'center'}}>{price}</h3>
            </div>
            <div className='flex-row'>
                <button className='detail-button' onClick={()=>navigate("/product-details/"+id)}>Ürün detayına git</button>
            </div>
        </div>
    )
}

export default Product
