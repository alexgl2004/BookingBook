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
import { useContext, useState } from "react";
import { UserContext } from "../../../context/UserContext";
import { OrderContext } from "../../../context/OrderContext";

export default function MovieDetailPage() {

  const [book, setBook] = useState(null);
  const { user } = useContext(UserContext);
  const { deleteFromOrder, addToOrder, order  } = useContext(OrderContext);
  console.log(order)
  const { id } = useLocalSearchParams();
//  const navigation = useNavigation();

if(book==null){
  const options = {
    method: 'GET',
  }; 
  const response = fetch('https://prj-backend-mini-library.onrender.com/book/'+id, options)
  .then(response => response.json())
  .then(data => { 
    console.log(data)
    setBook(data);
  })
  .catch(error => console.error(error));
} 
//console.log(books)
  //console.log(books);
  const header_var = (<View>{book?(<>
    <Text style={globalStyles.h1}>{book.title}</Text>
    <Text style={globalStyles.h2}>{book.subtitle}</Text></>):(<></>)}
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
          <Text style={globalStyles.p}>Author: {book.author}</Text>
          <Text style={globalStyles.p}>Year: {book.year}</Text>
          <Text style={globalStyles.p}>ISBN: {book.isbn}</Text>
          <Button
            onPress={() => {
              if(!isInOrder){
                addToOrder(user.userid, book.id)
              }else{
                deleteFromOrder(user.userid, book.id)
              }
//              console.log(order)
            }}
            color={COLORS.accent}
            title={isInOrder?"Remove from Order":"Add to Order"}
          />
        </View>
      </ScrollView>
    );
  }
}
