import React, { useContext } from 'react'
import './Home.css'
import Product from '../Product/Product'
import Search from '../Navbar/Search'
import UserContext from '../context/userContext'

const Home = () => {

  const data=useContext(UserContext)
  return (
    <>
      <Search />
      
      <div className="container-fluid bg">
        <div className="row">
          {data.products.map((product, index) => (
            <Product
              key={index}
              product={product}
              isInCart={() => data.isInCart(product)}
            />
          ))}
        </div> 
      </div>

     
    </>
  )
}

export default Home