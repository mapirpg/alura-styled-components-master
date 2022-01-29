import React from "react";
import { images } from "../../assets/images";
import { Icon } from "../UI";
import { theme } from "../UI/themes";

const light = <Icon src={images.themeOn} alt="Tema Claro" />
const dark = <Icon src={images.themeOff} alt="Tema Escuro" />

export default (({theme}) => (theme? dark : light))
