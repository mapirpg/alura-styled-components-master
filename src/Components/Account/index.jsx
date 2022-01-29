import React, { useState } from "react";
import styled from "styled-components";

import { images } from "../../assets/images"
import { Icon, Box, Balance, Details, Button, ThemeIcon } from "../UI";

const IconMargin = styled(Icon)`
  margin-top: 2px;
`

const Account = () => {
  const [toggleState, untoggle] = useState(true);

  const toggleHandler = () => {
    untoggle((toggleState) => !toggleState);
  };

  return (
    <Box>
      <h2>Conta</h2>
      <div style={{ fontSize: "26px", padding: "20px 0" }}>
        Saldo disponível{" "}
        <span>
          <ThemeIcon src={images.cash} alt="Ícone Saldo" />
        </span>
        {toggleState ? (
          <Balance>
            <Details>R$</Details> 0,00{" "}
          </Balance>
        ) : null}
      </div>

      <Button onClick={toggleHandler}>
        <IconMargin
          src={toggleState ? images.private : images.eye}
          alt="Privacidade do Saldo"
        />
      </Button>
    </Box>
  );
};

export default Account;
