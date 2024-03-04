import { ScrollView, View, Text, Pressable } from "react-native";
import { Link } from "expo-router";
import { globalStyles } from "../../../styles/global";
import { books } from "../../../data/data";
import { Image } from "expo-image";
import { AutoHeightImage } from "../../../components/AutoHeightImage";
import { StyledButton } from "../../../components/StyledButton";
import { useContext } from "react";
import { UserContext } from "../../../context/UserContext";
import { LoginText } from "../../../components/LoginText";

export default function MoviePage() {
  const { user } = useContext(UserContext);
  const header_var = (<Text style={globalStyles.h1}>Select a book</Text>)
  if(user==null){
    return (
      <ScrollView style={globalStyles.container}>
          {header_var}
          <LoginText />
      </ScrollView>
    )
  }else{
    return (
      <ScrollView style={globalStyles.container}>
        <View style={{ paddingBottom: 32 }}>
          {header_var}
          <View style={{ gap: 12 }}>
            {books.map((book) => {
              return (
                <Link
                  key={book.isbn}
                  href={`movies/${book.isbn}`}
                  style={[globalStyles.link]}
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
                    <Text style={[globalStyles.h2, { flex: 1 }]}>
                      {book.title}
                    </Text>
                  </Pressable>
                </Link>
              );
            })}
          </View>
        </View>
      </ScrollView>
    );
  }
}
