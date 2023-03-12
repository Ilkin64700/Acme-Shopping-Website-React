import { createContext, useState } from "react";

export const BasketContext = createContext()


const BasketProvider = ({children}) =>{
    const [commerceCartItems, setcommerceCartItems] = useState([]);
    
    return (
        <BasketContext.Provider value={{commerceCartItems, setcommerceCartItems}}>
            {children}
        </BasketContext.Provider>
    )

}

export default BasketProvider