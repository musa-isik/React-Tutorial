import React, { useState } from 'react'
import '../css/header.css'
import { CiShoppingBasket, CiLight } from 'react-icons/ci'
import { FaMoon } from 'react-icons/fa'
import { useNavigate } from 'react-router-dom'
import Badge from '@mui/material/Badge';
import { useDispatch, useSelector } from 'react-redux'
import { setDrawer } from '../redux/slices/basketSlice'


function Header() {
    const dispatch = useDispatch();

    const [theme, setTheme] = useState(false)
    const navigate = useNavigate();
    const { products } = useSelector((store) => store.basket)


    const changeTheme = () => {
        const root = document.getElementById("root")

        setTheme(!theme)

        if (theme) {
            root.style.backgroundColor = "black"
            root.style.color = "#fff"
        } else {
            root.style.backgroundColor = "#fff"
            root.style.color = "black"
        }
    }

    return (
        <div style={{ display: 'flex', alignItems: "center", justifyContent: 'space-between' }}>
            <div className='flex-row'>
                <img className='logo' src="./src/images/logo.png" alt="" onClick={() => navigate("/")} />
                <p className='logo-text'>IŞIK A.Ş</p>
            </div>

            <div className='flex-row'>
                <input className='search-input' placeholder='Ara' type="text" />
                <div >
                    {
                        theme ? <FaMoon className='icon' onClick={changeTheme} /> : <CiLight className='icon' onClick={changeTheme} />
                    }
                    <Badge badgeContent={products.length} color="error" onClick={() => dispatch(setDrawer())} >
                        <CiShoppingBasket style={{ marginRight: '5px' }} className='icon' />
                    </Badge>
                </div>
            </div>
        </div>
    )
}

export default Header
