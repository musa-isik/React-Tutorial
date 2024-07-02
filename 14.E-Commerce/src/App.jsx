import { useState } from 'react'
import './App.css'
import PageContainer from './container/PageContainer'
import Header from './components/Header'
import RouterConfig from './config/RouterConfig'
import Loading from './components/Loading'
import { Drawer } from '@mui/material'
import { useDispatch, useSelector } from 'react-redux'
import { setDrawer } from './redux/slices/basketSlice'



function App() {

  const { products, drawer } = useSelector((store) => store.basket);
  const dispatch = useDispatch();

  return (
    <div>
      <PageContainer>
        <Loading />
        <Header />
        <RouterConfig />
        <Drawer open={drawer} anchor='right' onClose={()=>dispatch(setDrawer())}>
          
          {
            products && products.map((product) => {
              return (
                <div key={product.id} className='flex-row' style={{ padding: '20px' }}>
                  <img style={{ marginRight: '5px' }} src={product.image} width={50} height={50} />
                  <p style={{ marginRight: '5px', width: '320px' }}  >{product.title}({product.count})</p>
                  <p style={{ marginRight: '5px', width: '50px' }}>{product.price}</p>
                  <button
                    style={{
                      padding: '5px',
                      borderRadius: '5px',
                      backgroundColor: 'red',
                      border: 'none',
                      width: '50px'
                    }} >Sil</button>
                </div>

              )
            })
          }

        </Drawer>
      </PageContainer>
    </div>
  )
}

export default App
