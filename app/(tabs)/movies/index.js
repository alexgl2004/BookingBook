import { ScrollView, View, Text, Pressable } from "react-native";
import { Link } from "expo-router";
import { globalStyles } from "../../../styles/global";
//import { books } from "../../../data/data";
import { Image } from "expo-image";
import { AutoHeightImage } from "../../../components/AutoHeightImage";
import { StyledButton } from "../../../components/StyledButton";
import { useContext, useState } from "react";
import { LoginText } from "../../../components/LoginText";
import { UserContext } from "../../../context/UserContext";
import { OrderContext } from "../../../context/OrderContext";


export default function MoviePage() {

  const [books, setBooks] = useState(null);
  const { user } = useContext(UserContext);
  const { order } = useContext(OrderContext);
  const header_var = (<Text style={globalStyles.h1}>Select a book</Text>)
  if(user==null){
    return (
      <ScrollView style={globalStyles.container}>
          {header_var}
          <LoginText />
      </ScrollView>
    )
  }else{
    if(books==null){
      const options = {
        method: 'GET',     
      }; 
      const response = fetch('https://prj-backend-mini-library.onrender.com/books/', options)
      .then(response => response.json())
      .then(data => { 
        //console.log(data)
  //      console.log(data.name,name,'&&',data.password,password)
        setBooks(data);
        //router.push('movies');
      })
      .catch(error => console.error(error));
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
                      flexDirection: "row",
                      alignItems: "center",
                      gap: 12,
                      maxWidth: "100%",
                    }}
                  >
                    <Text style={order && order.books.includes(book._id)?[globalStyles.link]:[globalStyles.linkOrdered]}>
                      {book.title}
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
