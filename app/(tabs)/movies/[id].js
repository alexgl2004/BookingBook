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
import { useContext } from "react";
import { UserContext } from "../../../context/UserContext";
import { OrderContext } from "../../../context/OrderContext";

export default function MovieDetailPage() {

  const { user } = useContext(UserContext);
  const { deleteFromOrder, addToOrder, order  } = useContext(OrderContext);
  console.log(order)
  const { id } = useLocalSearchParams();
//  const navigation = useNavigation();

  const book = books.find((book) => book.isbn === id);
  //console.log(books);

  const header_var = (<View>
    <Text style={globalStyles.h1}>{book.title}</Text>
    <Text style={globalStyles.h2}>{book.subtitle}</Text>
  </View>)
  if(user==null){
    return (
      <ScrollView style={globalStyles.container}>
          {header_var}
          <LoginText />
      </ScrollView>
    )
  }else{

    const isInOrder = (order==null?false:(order.books.indexOf(book.isbn)==-1?false:true));

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
                addToOrder(user.userid, book.isbn)
              }else{
                deleteFromOrder(user.userid, book.isbn)
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
