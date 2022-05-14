import React from "react";
import styled from "styled-components";

function Tasks() {
  return (
    <Container>
      <SubContainer>
        <Title>
          <span>TASK COMPLETED</span>
        </Title>
        <span>Table ui </span>
        <span> Table Format </span>
        <span>GET /posts</span>
        <span>GET /posts/id/comments</span>
        <span>POST	/posts</span>
        <span>DELETE	/posts/id</span>
        <FormWrapper></FormWrapper>
      </SubContainer>
    </Container>
  );
}

export default Tasks;
const Container = styled.div`
  height: 100%;
  margin: 60px;
  font-family: sans-serif;
  display: flex;
  flex-direction: column;
  gap: 30px;
  @media screen and (max-width: 1080px) {
    margin: 45px;
  }
`;

const SubContainer = styled.div`
  height: 400px;
  width: 100%;
  border-left: 2px solid lightgrey;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding:20px;
   span{
       font-size: 20px;
       
   }
`;
const FormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;
const Title = styled.div`
  margin-right: 10px;
  /* padding: 5px; */
  font-size: 40px;
  border-bottom: 1px solid lightgray;
`;
