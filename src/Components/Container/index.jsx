import React from "react";
import styled from "styled-components";

import Title from "../Title";
import Account from "../Account";
import Extract from "../Extract"


const Container = styled.div`
  background-color: ${({theme}) => theme.body};
  min-height: 90vh;
  padding: 0px 15vw;
  color: ${({theme}) => theme.text};
`;

const Content = styled.section`
  display: flex; 
  flex-direction: row;
  justify-content: space-between;

  @media (max-width: 800px) {
    flex-direction: column;
  }
`;

export default () => {
  return (
    <Container>
      <Title>Olá Marcel!</Title>
      <Content>
        <Account />
        <Extract />
      </Content>
    </Container>
  )
};
