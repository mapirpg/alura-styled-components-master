import React, {useState} from "react";
import { ThemeProvider } from "styled-components"

import Header from "./Components/Header";
import Container from "./Components/Container";
import { GlobalStyle } from "./Components/GlobalStyle";
import { darkTheme, lightTheme } from "./Components/UI/themeChange"
import { BtnTheme } from "./Components/UI";
import SwitchTheme from "./Components/SwitchTheme";

function App() {
  const [theme, setTheme] = useState(true)
  const toogleTheme = () => {
    setTheme((theme) => !theme)
  }

  return (
    <>
      <ThemeProvider theme={theme? lightTheme : darkTheme}>
        <GlobalStyle />
        <BtnTheme onClick={toogleTheme}>
          <SwitchTheme theme={theme} />
        </BtnTheme>
        <Header />
        <Container />
      </ThemeProvider>
    </>
  );
}

export default App;
