import React from "react";
import styled from "styled-components";
import { useFormik } from "formik";
import * as Yup from "yup";

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
  border-left: 2px solid lightgrey;
  @media screen and (max-width: 1080px) {
  }
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
const InputElement = styled.div`
  /* border: 1px solid black; */
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding:20px;

  label {
    color: black;
    font-size: 15px;
    
  }
  input {
    margin-left: 20px;
    width: 350px;
    border: 1px solid lightgray;
    border-radius: 3px;
  }
`;

const Error = styled.h1`
  color: red;
  font-size: 15px;

  display: flex;
  flex-direction: row;
  /* right:0; */
  /* width: 100%; */
  position: relative;
  top:40px;
  right:261px;
  justify-content: center;
  align-items: center;
  /* right: 50px; */
 
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

  /* gap: 10rem; */
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

const Generate = () => {
  const initialValues = {
    Layout: "",
    Name: "",
    Capacity: "",
    Status: "",
  };
  const validationSchema = Yup.object({
    Layout: Yup.string().required("required"),
    Name: Yup.string().required("required"),
    Capacity: Yup.string().max(42).required("required"),
  });

  const formik = useFormik({
    initialValues: initialValues,
    validationSchema: validationSchema,
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });
  return (
    <Container>
      <SubContainer>
        <Title>
          <span>Create Table</span>
        </Title>
        <FormWrapper>
          <Form onSubmit={formik.handleSubmit}>
            <InputElement>
              <label htmlFor="Layout">Layout:</label>
              <input
                type="string"
                id="Layout"
                Layout="Layout"
                placeholder="Select Layout"
                {...formik.getFieldProps("Layout")}
              />
              {formik.errors.Layout && formik.touched.Layout ? (
                <Error>{formik.errors.Layout}</Error>
              ) : null}
            </InputElement>
            <InputElement>
              <label htmlFor="Name">Name:</label>
              <input
                type="string"
                id="Name"
                Layout="Name"
                {...formik.getFieldProps("Name")}
              />
              {formik.errors.Name && formik.touched.Name ? (
                <Error>{formik.errors.Name}</Error>
              ) : null}
            </InputElement>
            <InputElement>
              <label htmlFor="Layout">Capacity:</label>
              <input
                type="string"
                id="Capacity"
                Layout="Capacity"
                {...formik.getFieldProps("Capacity")}
              />
              {formik.errors.Capacity && formik.touched.Capacity ? (
                <Error>{formik.errors.Capacity}</Error>
              ) : null}
            </InputElement>
            <ButtonDiv>
              <ButtonI type="submit">Create Table</ButtonI>
              <ButtonC>Cancel</ButtonC>
            </ButtonDiv>
          </Form>
        </FormWrapper>
      </SubContainer>
    </Container>
  );
};

export default Generate;
