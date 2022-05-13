import React, { useState } from "react";
import styled from "styled-components";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import { addPost } from "../../redux/action/postActions";

const AddPost = () => {
  const [formData, setFormData] = useState({
    userId: "",
    title: "",
    body: "",
  });

  const { userId, title, body } = formData;

  const handleChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };
  const handleData = async (e) => {
    e.preventDefault();
    console.log("clicked");
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    const { data } = await axios.post(
      "https://jsonplaceholder.typicode.com/posts",
      data,
      config
    );
    console.log("data:", data);

    toast.success("Post is Added Sucessfully", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };
  const handleReset = (e) => {
    setFormData("");
  };
  return (
    <Container>
      <SubContainer>
        <Title>
          <span>Create Post</span>
        </Title>
        <FormWrapper>
          <Form onSubmit={handleData} onReset={handleReset}>
            <FormDiv>
              <label>UserId:</label>
              <FormInput
                type="text"
                placeholder="Enter Name"
                name="userId"
                value={userId}
                onChange={handleChange}
              />
            </FormDiv>
            <FormDiv>
              <label>Title:</label>
              <FormInput
                type="text"
                placeholder="Enter number of capacity"
                name="title"
                value={title}
                onChange={handleChange}
              />
            </FormDiv>
            <FormDiv>
              <label>Body:</label>
              <FormInput
                type="text"
                placeholder="Enter Body"
                name="body"
                value={body}
                onChange={handleChange}
              />
            </FormDiv>

            <ButtonDiv>
              <ButtonI type="submit">Post</ButtonI>
              <ButtonC type="reset">Cancel</ButtonC>
            </ButtonDiv>
          </Form>
        </FormWrapper>
      </SubContainer>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </Container>
  );
};

export default AddPost;

const Container = styled.div`
  height: 100%;
  margin: 60px;
  font-family: sans-serif;
  @media screen and (max-width: 1080px) {
    margin: 45px;
  }
`;
const SubContainer = styled.div`
  height: 400px;
  width: 100%;
`;

const FormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;
const Form = styled.form`
  padding: 40px;
  max-width: 700px;
  width: 100%;
  height: auto;
  background-color: none;
  display: flex;
  flex-direction: column;
`;

const Title = styled.div`
  margin-right: 10px;
  padding: 5px;
  font-size: 15px;
  border-bottom: 1px solid lightgray;
`;
const ButtonDiv = styled.div`
  height: 40px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 5px;
  font-size: 13px;
  padding-top: 30px;
`;
const ButtonC = styled.button`
  border: none;
  background-color: red;
  width: 80px;
  height: 36px;
  color: white;
  border-radius: 5px;
  text-align: center;
  font-weight: bold;
`;
const ButtonI = styled.button`
  background-color: rgb(8, 25, 59);
  border: none;
  width: 100px;
  height: 36px;
  color: white;
  border-radius: 5px;
  font-weight: bold;
`;
const FormDiv = styled.div`
  display: flex;
  column-gap: 20px;
  padding: 10px;
  align-items: center;

  label {
    width: 240px;
    display: inline-block;
    text-align: right;
  }
`;
const FormInput = styled.input`
  height: 30px;
  border: none;
  width: 600px;
  border-bottom: 1px solid grey;
  &:active {
    outline: none;
    border: none;
    background-color: white;
  }
  &:focus {
    outline: 0;
    border: none;
  }
`;
