import { ScrollView, View, Text, Pressable } from "react-native";
import { Link } from "expo-router";
import { globalStyles } from "../../../styles/global";
//import { books } from "../../../data/data";
import { Image } from "expo-image";
import { AutoHeightImage } from "../../../components/AutoHeightImage";
import { StyledButton } from "../../../components/StyledButton";
import { useContext, useState, useEffect } from "react";
import { LoginText } from "../../../components/LoginText";
import { UserContext } from "../../../context/UserContext";
import { OrderContext } from "../../../context/OrderContext";


export default function MoviePage() {

  const [books, setBooks] = useState(null);
  const { user } = useContext(UserContext);
  const { order, changeOrderState } = useContext(OrderContext);
  const header_var = (<Text style={globalStyles.h1}>Select a book</Text>)
  if(user==null){
    return (
      <ScrollView style={globalStyles.container}>
          {header_var}
          <LoginText />
      </ScrollView>
    )
  }else{
    
    if(books==null || (order!=null && order.updated)){

//      useEffect(() => {
        const fetchData = async () => {
          const options = {
            method: 'GET',
          }; 
          const response = await fetch('https://prj-backend-mini-library.onrender.com/books/', options);
          const jsonData = await response.json();
          setBooks(jsonData);
          changeOrderState(false);
        }
        fetchData();
//      }, [order]);

    }

    //console.log(books)
    //console.log(1)

    return (
      <ScrollView style={globalStyles.container}>
        <View style={{ paddingBottom: 32 }}>
          {header_var}
          <View style={{ gap: 12 }}>
            {books?books.map((book) => {
              return (
                <Link
                  key={book._id}
                  href={`movies/${book._id}`}
                  style={order && order.books.includes(book.id)?[globalStyles.linkOrdered]:[globalStyles.link]}
                  asChild
                >
                  <Pressable
                    style={{
                      alignItems: "left",
                      gap: 12,
                      maxWidth: "100%",
                      borderBottomWidth: 2,
                      borderColor: "#444"
                    }}
                  >
                    <Text style={order && order.books.includes(book._id)?[globalStyles.link]:[globalStyles.linkOrdered]}>
                      {book.title}
                    </Text>
                    <Text style={{
                        color: "#777",
                        paddingBottom: 3,
                      }}>
                        <Text>
                          ISBN: <Text style={{
                            color: "#aaa",
                            paddingBottom: 3,
                          }}>{book.isbn}</Text>
                        </Text>
                        <Text>
                          &nbsp;&nbsp;&nbsp;Year: <Text style={{
                            color: "#aaa",
                            paddingBottom: 3,
                          }}>{book.year}</Text>
                        </Text>
                        <Text>
                          &nbsp;&nbsp;&nbsp;In stock: <Text style={{
                            color: "#aaa",
                            paddingBottom: 3,
                          }}>{book.stock}</Text>
                        </Text>
                    </Text>
                  </Pressable>
                </Link>
              );
            }):''}
          </View>
        </View>
      </ScrollView>
    );
  }
}
