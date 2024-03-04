import { ScrollView, View, Text, Pressable } from "react-native";
import { Link } from "expo-router";
import { globalStyles } from "../../../styles/global";
import { AutoHeightImage } from "../../../components/AutoHeightImage";
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
    console.log(1,order)
    return (
      <ScrollView style={globalStyles.container}>
        <View style={{ paddingBottom: 32 }}>
        {header_var}
          <View style={{ gap: 12 }}>
            {!order?'':books.filter(
            (book) => {
              if(order.books.indexOf(book.isbn)==-1){
                return null;
              }
            }).map((book) => {
              return (
                <Link
                  key={book.id}
                  href={`movies/${book.id}`}
                  style={globalStyles.link}
                  asChild
                >
                  <Text style={[globalStyles.h2, { flex: 1 }]}>
                    {book.title} - {book.subtitle}
                  </Text>
                </Link>
              );
            })}
          </View>
        </View>
      </ScrollView>
    );
  }
}
