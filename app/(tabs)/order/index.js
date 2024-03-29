import { ScrollView, View, Text, Pressable,Button } from "react-native";
import { Link } from "expo-router";
import { globalStyles } from "../../../styles/global";
import { AutoHeightImage } from "../../../components/AutoHeightImage";
import { COLORS, FONTS } from "../../../styles/constants";
import { LoginText } from "../../../components/LoginText";
import { useContext, useState, useEffect } from "react";
import { UserContext } from "../../../context/UserContext";
import { OrderContext } from "../../../context/OrderContext";

export default function ActorsPage() {

  const [books, setBooks] = useState(null);
  const { user } = useContext(UserContext);
  const { deleteFromOrder, order, changeOrderState } = useContext(OrderContext);
  const header_var = (<Text style={globalStyles.h1}>Order list</Text>)

      useEffect(() => {
  const fetchData = async () => {
    const options = {
      method: 'GET',
    }; 
    const response = await fetch('https://prj-backend-mini-library.onrender.com/books/', options);
    const jsonData = await response.json();
    setBooks(jsonData);
//    changeOrderState(false);
  }
  fetchData();
      }, [order]);

  if(user==null){

    return (
      <ScrollView style={globalStyles.container}>
          {header_var}
          <LoginText />
      </ScrollView>
    )
  }else{

    if(books==null || (order!=null && order.updated)){




    }
   console.log(1,order)
//    console.log(books)
/*
    console.log(books.filter(
      (book) => {
//        console.log(order.books,book.isbn)
        if(order.books.includes(book.isbn)){
          return 1;
        }
      })
    )
*/    
  if(books==null){
    <ScrollView style={globalStyles.container}>
      <Text></Text>
    </ScrollView>
  }else{

      console.log(1,books)
  //    console.log(2,order)

      return (
        <ScrollView style={globalStyles.container}>

          <View style={{ paddingBottom: 32 }}>
          {header_var}
            <View style={{ gap: 12 }}>
              {!order?'':books.filter(
              (book) => {
                if(order.books.includes(book._id)){
                  return 1;
                }
              }).map((book) => {
                return (
                  <View key={'order' + book._id} style={globalStyles.viewFlex}>
                    <Link style={globalStyles.linkOrdered80}
                      href={`books/${book._id}`}
                      asChild
                    >
                      <Text>
                        {book.title}{book.subtitle?' - '+book.subtitle:''}
                      </Text>
                    </Link>
                    <Pressable
                      onPress={() => {
                        deleteFromOrder(user.userid, book._id)
                      }}
                      color={COLORS.accent}
                    >
                      <Text style={globalStyles.button20}>Remove</Text>
                    </Pressable>
                  </View>
                );
              })}
            </View>
          </View>
        </ScrollView>
      );
    }
  }
}
