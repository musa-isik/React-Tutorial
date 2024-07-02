import React from 'react'



//function Product( {productName,price} )

function Product(props) {
    //console.log(props) // app.jsx de geçirdiğimiz parametreleri props diyerek alıyoruz
    const {productName,price} = props // propsun içerisinde productName ve price var her seferinde props.productName demek yerine propsu distract ettik
    return (
        <div>
            <div>ÜRÜN BİLGİLERİ</div>
            <hr />
            <div>
                <div>İSİM: {productName}</div>
                <div>FİYAT: {price}</div>
            </div>
                       
        </div>
    )
}

export default Product
