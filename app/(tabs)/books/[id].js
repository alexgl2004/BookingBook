import { ScrollView, View, Text, Pressable, Button } from "react-native";
import { globalStyles } from "../../../styles/global";
import { useLocalSearchParams } from "expo-router";
import { books } from "../../../data/data";
import { actors } from "../../../data/actors";
import { AutoHeightImage } from "../../../components/AutoHeightImage";
import { COLORS, FONTS } from "../../../styles/constants";
import { Link } from "expo-router";
import { LoginText } from "../../../components/LoginText";
//import { useNavigation } from "expo-router";
import { useContext, useState, useEffect } from "react";
import { UserContext } from "../../../context/UserContext";
import { OrderContext } from "../../../context/OrderContext";

export default function MovieDetailPage() {

  const [book, setBook] = useState(null);
  const { user } = useContext(UserContext);
  const { deleteFromOrder, addToOrder, order  } = useContext(OrderContext);
 // console.log(order)
  const { id } = useLocalSearchParams();
//  const navigation = useNavigation();
useEffect(() => {
  const options = {
    method: 'GET',
  }; 
  fetch('https://prj-backend-mini-library.onrender.com/book/'+id, options)
  .then(response => response.json())
  .then(data => { 
 //   console.log(1,data)
    setBook(data);
  })
  .catch(error => console.error(error));
}, [order]);

if(book==null){

} 
//console.log(books)
  //console.log(books);
  const header_var = (<View>{book?(<>
    <Text style={globalStyles.h1}>{book.title}</Text></>):(<></>)}
  </View>)

  if(user==null){
    return (
      <ScrollView style={globalStyles.container}>
          {header_var}
          <LoginText />
      </ScrollView>
    )
  }else if(!book){
    <ScrollView style={globalStyles.container}>
      LOADING
    </ScrollView>
  }else{

    const isInOrder = (order==null?false:(order.books.indexOf(book.id)==-1?false:true));
    console.log(book)
    return (
      <ScrollView style={[globalStyles.container]}>
        <View style={{ paddingBottom: 32 }}>
          {header_var}
          <Text style={globalStyles.p}>{book.subtitle}</Text>
          <View style={{
            borderTopWidth: 2,
            borderTopColor: "#444",
            marginBottom:15,
            paddingTop:20
          }}>
            
            <Text style={globalStyles.p2}>Author: {book.author}</Text>
            <Text style={globalStyles.p2}>Year: {book.year}</Text>
            <Text style={globalStyles.p2}>ISBN: {book.isbn}</Text>
          </View>
          <View style={{
            borderTopWidth: 2,
            borderTopColor: "#444",
            marginBottom:15,
            paddingTop:5,
            alignSelf: "right",
          }}>
          <Text style={{
            
            color: '#ccc',
            width: '100%',

          }}>In store: {book.stock}</Text>
          </View>
          <Pressable style={isInOrder?globalStyles.buttonOrdered:globalStyles.buttonNotOrder}
            onPress={() => {
              if(!isInOrder){
                if(book.stock>=1){
                  book.stock -=1
                  setBook(book);
                  addToOrder(user.userid, book.id)
                }else{
                  alert('No Book in Store')
                }
              }else{
                book.stock +=1
                setBook(book);
                deleteFromOrder(user.userid, book.id)
              }
//              console.log(order)
            }}
            color={COLORS.accent}
            
          >
            <Text style={isInOrder?globalStyles.buttonOrderedText:globalStyles.buttonNotOrderText}>{isInOrder?"Remove from Order":"Add to Order"}</Text>
          </Pressable>
        </View>
      </ScrollView>
    );
  }
}
