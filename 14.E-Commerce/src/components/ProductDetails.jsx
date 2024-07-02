import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom'
import { setSelectedProduct } from '../redux/slices/productSlice';
import { CiCirclePlus, CiCircleMinus } from 'react-icons/ci'
import { addToBasket } from '../redux/slices/basketSlice';


function ProductDetails() {
    const { id } = useParams();
    const { products, selectedProduct } = useSelector((store) => store.product)
    const dispatch = useDispatch();
    const [piece, setPiece] = useState(1)
    const { category, description, image, price, rating, title } = selectedProduct

    useEffect(() => {
        getProductById();
    }, [])

    const increment = () => {
        setPiece(piece + 1)
    }

    const decrement = () => {
        if(piece!==0)
            setPiece(piece - 1)
    }

    const addBasket = () => {
     const payload = {
        id,
        price,
        image,
        title,
        description,
        count:piece
     }

     dispatch(addToBasket(payload))
    }


    const getProductById = () => {
        products && products.map((product) => {
            if (product.id == id)
                dispatch(setSelectedProduct(product))
        })
    }

    return (
        <div style={{ margin: "30px", display: 'flex', flexDirection: 'row', justifyContent: 'center' }}>
            <div style={{ marginRight: '40px' }}>
                <img src={image} alt="" width={300} height={500} />
            </div>
            <div>
                <h1 style={{ fontFamily: 'arial' }}>{title}</h1>
                <p style={{ fontFamily: 'arial', fontSize: '20px' }}>{description}</p>
                <h1 style={{ fontFamily: 'arial', fontSize: '50px', fontWeight: 'bold', color: 'red' }}>{price*piece} $</h1>
                <div style={{ display: 'flex', flexDirection: 'row' }} >
                    <CiCircleMinus style={{ width: '50px', height: '50px' }} onClick={decrement} /><h4 style={{ margin: '10px', fontSize: '30px', }}>{piece}</h4>
                    <CiCirclePlus style={{ width: '50px', height: '50px' }} onClick={increment} />
                </div>
                <div>
                    <button 
                    onClick={addBasket}
                    style={{
                        marginTop: '25px',
                        border: 'none',
                        padding: '10px',
                        backgroundColor: 'orange',
                        borderRadius: '5px',
                        cursor: 'pointer'
                    }}>Sepete Ekle</button>
                </div>
            </div>

        </div>
    )
}

export default ProductDetails
