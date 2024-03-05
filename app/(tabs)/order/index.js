import { ScrollView, View, Text, Pressable,Button } from "react-native";
import { Link } from "expo-router";
import { globalStyles } from "../../../styles/global";
import { AutoHeightImage } from "../../../components/AutoHeightImage";
import { COLORS, FONTS } from "../../../styles/constants";
import { LoginText } from "../../../components/LoginText";
import { useContext } from "react";
import { UserContext } from "../../../context/UserContext";
import { OrderContext } from "../../../context/OrderContext";

import { books } from "../../../data/data";

export default function ActorsPage() {
  const { user } = useContext(UserContext);
  const { deleteFromOrder, order } = useContext(OrderContext);
  const header_var = (<Text style={globalStyles.h1}>Order list</Text>)
  if(user==null){
    return (
      <ScrollView style={globalStyles.container}>
          {header_var}
          <LoginText />
      </ScrollView>
    )
  }else{
//    console.log(1,order)
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
    return (
      <ScrollView style={globalStyles.container}>
        <View style={{ paddingBottom: 32 }}>
        {header_var}
          <View style={{ gap: 12 }}>
            {!order?'':books.filter(
            (book) => {
              if(order.books.includes(book.isbn)){
                return 1;
              }
            }).map((book) => {
              return (
                <>
                  <View key={book.isbn} style={globalStyles.viewFlex}>
                    <Link style={globalStyles.linkOrdered80}
                      key={book.isbn}
                      href={`movies/${book.isbn}`}
                      asChild
                    >
                      <Text>
                        {book.title} - {book.subtitle}
                      </Text>
                    </Link>
                    <Pressable
                      onPress={() => {
                        deleteFromOrder(user.userid, book.isbn)
                      }}
                      color={COLORS.accent}
                    >
                      <Text style={globalStyles.button20}>Remove</Text>
                    </Pressable>
                  </View>
                </>
              );
            })}
          </View>
        </View>
      </ScrollView>
    );
  }
}
