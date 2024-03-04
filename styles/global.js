import { StyleSheet } from "react-native";
import { COLORS, FONTS } from "./constants";

export const globalStyles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
    paddingVertical: 16,
    backgroundColor: COLORS.dark,
  },
  p: {
    fontSize: 18,
    color: COLORS.light,
    marginBottom: 8,
    fontFamily: FONTS.sansSerif,
  },
  h1: {
    fontSize: 42,
    color: COLORS.accent,
    marginBottom: 12,
    fontFamily: FONTS.sansSerifBold,
  },
  h2: {
    fontSize: 20,
    color: COLORS.light,
    marginBottom: 8,
    fontFamily: FONTS.sansSerif,
  },
  link: {
    fontSize: 18,
    color: COLORS.accent,
    fontFamily: FONTS.sansSerif,
  },
  input: {
    backgroundColor: COLORS.light,
    color: COLORS.dark,
    padding: 12,
    borderRadius: 6,
    fontFamily: FONTS.sansSerif,
    fontSize: 18,
  },
});
