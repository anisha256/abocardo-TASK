import React, { useState } from "react";
import styled from "styled-components";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { v4 as uuid } from "uuid";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TablePagination,
  TableRow,
  Paper,
} from "@mui/material";

const TableUI = () => {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };
  const [finalData, setFinalData] = useState([]);
  const [formData, setFormData] = useState({
    _id: "",
    layout: "",
    name: "",
    capacity: "",
    status: false,
    image: "",
  });

  const handleChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };
  const handleData = (e) => {
    e.preventDefault();
    finalData._id = uuid();
    setFinalData([...finalData, formData]);

    toast.success("successful", { autoClose: 3000 });
    setFormData({
      layout: "",
      name: "",
      capacity: "",
      status: false,
      image: "",
    });
  };
  const handleReset = (e) => {
    setFormData("");
  };
  console.log("formData", formData);
  return (
    <Container>
      <SubContainer>
        <Title>
          <span>Create Table</span>
        </Title>
        <FormWrapper>
          <Form onSubmit={handleData} onReset={handleReset}>
            <FormDiv>
              <label>Layout:</label>
              <select
                name="layout"
                value={formData.layout}
                onChange={handleChange}
              >
                <option value="" hidden>
                  Select Layout
                </option>
                <option value="layout 1">layout 1</option>
                <option value="layout 2">layout 2</option>
                <option value="layout 3">layout 3</option>
                <option value="other">other</option>
              </select>
            </FormDiv>
            <FormDiv>
              <label>Name:</label>
              <FormInput
                type="text"
                placeholder="Enter Name"
                name="name"
                value={formData.name}
                onChange={handleChange}
              />
            </FormDiv>
            <FormDiv>
              <label>Capacity:</label>
              <FormInput
                type="string"
                placeholder="Enter number of capacity"
                name="capacity"
                value={formData.capacity}
                onChange={handleChange}
              />
            </FormDiv>
            <FormDiv>
              <label>Status:</label>

              <CheckBox
                type="checkbox"
                id="status"
                name="status"
                className="inputField"
                checked={formData.status ? "checked" : ""}
                onChange={() =>
                  setFormData({ ...formData, status: !formData.status })
                }
              />
            </FormDiv>
            <FormDiv>
              <label>Image:</label>
              <ImageBox
                type="file"
                name="file"
                onChange={(e) =>
                  setFormData({ ...formData, image: e.target.files[0] })
                }
                placeholder="No file choosen"
              />
            </FormDiv>
            <ButtonDiv>
              <ButtonI type="submit">Create Table</ButtonI>
              <ButtonC type="reset">Cancel</ButtonC>
            </ButtonDiv>
          </Form>
        </FormWrapper>
      </SubContainer>

      <SubContainerT>
        <Paper sx={{ width: "100%", overflow: "hidden" }}>
          <TableContainer sx={{ maxHeight: 600 }}>
            <Table stickyHeader aria-label="sticky table">
              <TableHead>
                <TableRow>
                  <TableCell align="left" style={{ minWidth: 170 }}>
                    Layout
                  </TableCell>
                  <TableCell align="left" style={{ minWidth: 170 }}>
                    Name
                  </TableCell>
                  <TableCell align="left" style={{ minWidth: 170 }}>
                    Capacity
                  </TableCell>
                  <TableCell align="left" style={{ minWidth: 170 }}>
                    status
                  </TableCell>
                  <TableCell align="left" style={{ minWidth: 170 }}>
                    Image
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {finalData
                  .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                  .map((row) => {
                    return (
                      <TableRow
                        hover
                        role="checkbox"
                        tabIndex={-1}
                        key={row._id}
                      >
                        <TableCell align="left">{row.layout}</TableCell>
                        <TableCell align="left">{row.name}</TableCell>
                        <TableCell align="left">{row.capacity}</TableCell>
                        <TableCell align="left">
                          {row.status ? "True" : "False"}
                        </TableCell>
                        <TableCell align="left">
                          {row.image.name.slice(0, 6)}....
                          {row.image.name.slice(row.image.name.length - 6)}
                        </TableCell>
                      </TableRow>
                    );
                  })}
              </TableBody>
            </Table>
          </TableContainer>
          <TablePagination
            rowsPerPageOptions={[10, 25, 100]}
            component="div"
            count={finalData.length}
            rowsPerPage={rowsPerPage}
            page={page}
            onPageChange={handleChangePage}
            onRowsPerPageChange={handleChangeRowsPerPage}
          />
        </Paper>
      </SubContainerT>
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

export default TableUI;

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
  @media screen and (max-width: 1080px) {
  }
`;
const SubContainerT = styled.div`
  height: 400px;
  width: 100%;
  border-top: 1px solid lightgrey;
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
  cursor: pointer;
`;
const ButtonI = styled.button`
  background-color: rgb(8, 25, 59);
  border: none;
  width: 100px;
  height: 36px;
  color: white;
  border-radius: 5px;
  font-weight: bold;
  cursor: pointer;
`;
const FormDiv = styled.div`
  display: flex;
  column-gap: 20px;
  padding: 10px;
  align-items: center;

  select {
    height: 30px;
    border: 1px solid lightgray;
    background-color: white;
    border-radius: 3px;
    width: 600px;
  }
  label {
    width: 240px;
    display: inline-block;
    text-align: right;
  }
`;
const FormInput = styled.input`
  height: 30px;
  border: 1px solid lightgray;
  border-radius: 3px;
  width: 600px;
`;

const ImageBox = styled.input`
  height: 30px;
  border-radius: 3px;
  width: 600px;
  border: none;
`;
const CheckBox = styled.input`
  height: 12px;
  border-radius: 3px;
  width: 600px;
`;
