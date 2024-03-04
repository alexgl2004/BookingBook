import { ScrollView, View, Text, Pressable } from "react-native";
import { Link } from "expo-router";
import { globalStyles } from "../../../styles/global";
import { movies } from "../../../data/movies";
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
            {movies.map((movie) => {
              return (
                <Link
                  key={movie.id}
                  href={`movies/${movie.id}`}
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
                    <AutoHeightImage
                      source={movie.thumbnail}
                      style={{ width: 120 }}
                      contentFit="contain"
                    />
                    <Text style={[globalStyles.h2, { flex: 1 }]}>
                      {movie.title}
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
