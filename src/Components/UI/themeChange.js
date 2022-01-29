import { theme } from "./themes";

export const darkTheme = {
  body: theme.colors.darkBackground,
  content: theme.colors.darkContent,
  text: theme.colors.darkThemeText,
  filter: "invert(100%)"
}

export const lightTheme = {
  body: theme.colors.lightBackground,
  content: theme.colors.lightContent,
  text: theme.colors.lightThemeText,
  filter: ""
}
