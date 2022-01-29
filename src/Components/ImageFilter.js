import React from "react"
import { images } from "../assets/images"
import { ThemeIcon } from "./UI"

export default (type) => {
  const Images = {
    Restaurante: <ThemeIcon src={images.food} alt="Restaurante" />,
    Utilidadas: <ThemeIcon src={images.utilities} alt="Utilidades" />,
    Saude: <ThemeIcon src={images.health} alt="Saúde" />,
    Transporte: <ThemeIcon src={images.transport} alt="Transporte" />,
    default: <ThemeIcon src={images.others} alt="Outros" />,
  }

  return(
    Images[type] || Images.default
  )
};
