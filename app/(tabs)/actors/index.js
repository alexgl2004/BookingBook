import { ScrollView, View, Text, Pressable } from "react-native";
import { Link } from "expo-router";
import { globalStyles } from "../../../styles/global";
import { actors } from "../../../data/actors";
import { AutoHeightImage } from "../../../components/AutoHeightImage";
import { useContext } from "react";
import { UserContext } from "../../../context/UserContext";
import { LoginText } from "../../../components/LoginText";

export default function ActorsPage() {
  const { user } = useContext(UserContext);
  const header_var = (<Text style={globalStyles.h1}>Select a author</Text>)
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
          {actors.map((actor) => {
            return (
              <Link
                key={actor.id}
                href={`actors/${actor.id}`}
                style={globalStyles.link}
                asChild
              >
                <Pressable
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                    maxWidth: "100%",
                    gap: 12,
                  }}
                >
                  <AutoHeightImage
                    source={actor.image}
                    style={{ width: 120 }}
                    contentFit="contain"
                  />
                  <Text style={[globalStyles.h2, { flex: 1 }]}>
                    {actor.name}
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
