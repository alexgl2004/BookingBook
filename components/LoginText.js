import { View, Button, Text } from "react-native";
import { router } from "expo-router";
import { Typography } from "./Typography";
import { COLORS } from "../styles/constants";

export function LoginText() {
    return (<>
            <Typography>
              You must login before ordering book
            </Typography>
            <View style={{ paddingRight: 12 }}>
              <Button
                onPress={() => {
                  router.push("login");
                }}
                color={COLORS.accent}
                title="Login"
              />
            </View>
          </>
 
    )
}