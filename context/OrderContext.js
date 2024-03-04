import { createContext, useState } from "react";
//import { user_books } from "../data/data";

export const OrderContext = createContext();

export function OrderProvider({ children }) {
  // user: null if not logged in
  // { name: string, lastLogin: Date }
  const [order, setOrder] = useState(null);

  function addToOrder(userId, isbn) {
    console.log('2',order)
    if(order==null){
      setOrder({
        suerId: userId,
        books: [
          isbn
        ],
      });
    }else{
      if(order.books.indexOf(isbn)==-1){
        setOrder({
          suerId: userId,
          books: [
            ... order.books,
            isbn
          ],
        });
      }
    }
    
  }

  function deleteFromOrder(userId, isbn) {
    if(order==null){
    }else{
      setOrder({
        suerId: userId,
        books: order.books.filter(
          (book) => {
            if(book!=isbn){
              return null;
            }
          }
        ),
      });
    }
  }

  return (
    <OrderContext.Provider
      value={{
        order,
        addToOrder,
        deleteFromOrder,
      }}
    >
      {children}
    </OrderContext.Provider>
  );
}
