import { createContext, useState } from "react";
//import { user_books } from "../data/data";

export const OrderContext = createContext();

export function OrderProvider({ children }) {
  // user: null if not logged in
  // { name: string, lastLogin: Date }
  const [order, setOrder] = useState(null);

  function setOrderGET(userId, orderGET) {
//    console.log('++++++',orderGET)
    let temp_array=[];
    orderGET.forEach((elem) => {
      if(temp_array.indexOf(elem)==-1)
        temp_array.push(elem)
    })

    setOrder({
      suerId: userId,
      books: temp_array/*orderGET.map((elem) => {
        return elem.book
      })*/,
    });
  }

  function addToOrder(userId, id) {
    console.log(userId,id)
    if(order==null){
      setOrder({
        suerId: userId,
        books: [
          id
        ],
      });

    }else{
      if(order.books.indexOf(id)==-1){
        setOrder({
          suerId: userId,
          books: [
            ... order.books,
            id
          ],
        });
      }
    }
    fetch('https://prj-backend-mini-library.onrender.com/users/'+userId+'/rent', {
      method: 'POST',
      headers: {
        "Content-Type": "application/json",
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: JSON.stringify({'bookId':id})
    })
    .then(response => response.json())
    .then(data => { 
      console.log(data)
    })
  }

  function deleteFromOrder(userId, id) {
    if(order==null){
    }else{
      setOrder({
        suerId: userId,
        books: order.books.filter(
          (book) => {
//            console.log(book,isbn)
            if(book!=id){
              return 1;
            }
          }
        ),
      });
      fetch('https://prj-backend-mini-library.onrender.com/users/'+userId+'/delete', {
        method: 'POST',
        headers: {
          "Content-Type": "application/json",
          // 'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: JSON.stringify({'bookId':id})
      })
      .then(response => response.json())
      .then(data => { 
        console.log(data)
      })
    }
  }

  return (
    <OrderContext.Provider
      value={{
        order,
        addToOrder,
        deleteFromOrder,
        setOrderGET,
      }}
    >
      {children}
    </OrderContext.Provider>
  );
}
