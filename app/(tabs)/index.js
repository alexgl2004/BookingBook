import { Text, View, ScrollView, Button, Pressable } from "react-native";
import { Link, router } from "expo-router";
import { globalStyles } from "../../styles/global";
import { COLORS } from "../../styles/constants";
import { Typography } from "../../components/Typography";
import { LoginText } from "../../components/LoginText";
import { StyledButton } from "../../components/StyledButton";
import { useContext } from "react";
import { UserContext } from "../../context/UserContext";

export default function HomePage() {

  const { user } = useContext(UserContext);
 // console.log("user", user);
  const header_var = (<Typography variant="heading">Book Order</Typography>);

  if(user==null){
    return (
      <ScrollView style={globalStyles.container}>
          {header_var}
          <LoginText />
      </ScrollView>
    )
  }else{
//    console.log("user", user);
    return (
      <ScrollView style={globalStyles.container}>
        {header_var}

            <Typography style={{ color: "#aaa", fontSize: 27, marginBottom: 40 }}>
              {/* {user ? user.name : "Not logged in"} */}
              Welcome, {user.name}
            </Typography>
           
            <Link asChild style={globalStyles.link} href="books">
                
                <Pressable style={globalStyles.buttonNotOrder} 
                  onPress={() => {
                      //router.push('books')
      //              console.log(order)
                  }}
                >
                  <Text style={globalStyles.buttonNotOrderText}>Show list of books</Text>
              </Pressable>
            </Link>
      </ScrollView>
    );
  }
}
/*
            <Link asChild style={globalStyles.link} href="actors">
                <Button color={COLORS.accent} title="Select Author" />
            </Link>
*/            
