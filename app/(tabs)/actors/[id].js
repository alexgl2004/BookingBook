import { Text, ScrollView, View } from "react-native";
import { globalStyles } from "../../../styles/global";
import { useLocalSearchParams } from "expo-router";
import { actors } from "../../../data/actors";
import { AutoHeightImage } from "../../../components/AutoHeightImage";
import { useContext } from "react";
import { UserContext } from "../../../context/UserContext";
import { LoginText } from "../../../components/LoginText";

export default function ActorDetailPage() {
  const { id } = useLocalSearchParams();
  const { user } = useContext(UserContext);
  const actor = actors.find((actor) => actor.id === Number(id));

  const header_var = (<Text style={globalStyles.h1}>{actor.name}</Text>)
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
        <AutoHeightImage
          source={actor.image}
          style={{
            width: "100%",
          }}
        />
      </View>
    </ScrollView>
  );
  }
}
