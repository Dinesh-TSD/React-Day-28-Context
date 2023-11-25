import { createContext, useEffect, useState } from "react";

let UserContext = createContext();

export const UserProvider = ({ children }) => {

    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);
    const [total, setTotal] = useState(0);


    useEffect(() => {
        // Side Effects
        fetch("https://65571300bd4bcef8b611ff00.mockapi.io/product/cart")
          .then((data) => data.json())
          .then((res) => {
    
            setProducts(res);
          });
      }, []);


      const handleAddtoCart = (product) => {
        const existingItem = cart.find((item) => item.id === product.id);
    
        if (existingItem) {
    
          const updatedCart = cart.map((item) =>
            item.id === existingItem.id ? { ...item, quantity: item.quantity + 1 } : item
          );
          setCart(updatedCart);
    
        } else {
          setCart([...cart, { ...product, quantity: 1 }]);
        }
    
        setTotal(total + product.price);
      };
    
    
      const handleRemoveItem = (item) => {
        const newCart = cart.filter((cartItem) => cartItem.id !== item.id);
        setTotal(total - item.price * item.quantity);
        setCart(newCart);
      };
    
      const handleIncreaseQuantity = (price) => {
        setTotal(total + price);
      };
    
      const handleDecreaseQuantity = (price) => {
        setTotal(total - price);
      };
      const isInCart = (pro) => cart.some(item => item.id === pro.id)

    return (
        <UserContext.Provider 
        value={{ 
            products, 
            cart,
            total,
            isInCart,
            handleAddtoCart,
            handleRemoveItem,
            handleIncreaseQuantity,
            handleDecreaseQuantity }}
        >

            {children}
        </UserContext.Provider>
    )
}

export default UserContext