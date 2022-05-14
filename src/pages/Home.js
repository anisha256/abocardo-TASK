import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { v4 as uuid } from "uuid";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";

import { FiSend } from "react-icons/fi";
import { FiX } from "react-icons/fi";
import { FiTrash2 } from "react-icons/fi";
import { FcBusinesswoman } from "react-icons/fc";
import { Avatar } from "@mui/material";

// import { useDispatch, useSelector } from "react-redux";
// import { getPosts } from "../redux/action/postActions";
// import Post from "./posts/Post";

const Home = () => {

  // const posts = useSelector((state) => state);
  // console.log(posts);
  // const dispatch = useDispatch();


  const [show, setShow] = useState(false);
  const [posts, setPosts] = useState([]);
  const [comments, setComments] = useState([]);
  const [formData, setFormData] = useState({
    id: "",
    userId: "",
    title: "",
    body: "",
  });
  const handleChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };
  const handleData = async (e) => {
    e.preventDefault();
    console.log("clicked");
    formData.id = uuid();
    try {
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };
      await axios.post(
        "https://jsonplaceholder.typicode.com/posts",
        formData,
        config
      );
      toast.success("Post is Added Sucessfully", {
        position: "top-right",
        autoClose: 400,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      setPosts([...posts, formData]);

      setFormData({
        id: "",
        userId: "",
        title: "",
        body: "",
      });
    } catch (err) {
      console.log(err);
    }
  };
  const handleReset = (e) => {
    setFormData("");
  };
  const fetchPosts = async () => {
    const res = await axios.get("https://jsonplaceholder.typicode.com/posts");
    setPosts(res.data);
  };
  const deletePost = async (id) => {
    try {
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };
      await axios.delete(
        `https://jsonplaceholder.typicode.com/posts/${id}`,
        config
      );
      const newPosts = posts.filter((post) => post.id !== id);
      setPosts(newPosts);
      toast.success("deleted Sucessfully", {
        position: "top-right",
        autoClose: 400,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    } catch (err) {
      toast.error("ERROR");
    }
  };

  const handleCross = () => {
    setShow(false);
  };
  const handleComment = async (id) => {
    setShow(true);
    console.log("clicked");
    const res = await axios.get(
      `https://jsonplaceholder.typicode.com/posts/${id}/comments`
    );
    setComments(res.data);
    console.log("comments", comments);
  };
  //handle delete
  const handleDelete = () => {
    toast.success(" Deleted Sucessfully", {
      position: "top-right",
      autoClose: 400,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  return (
    <Listingdiv>
      {show && (
        <MainPopup>
          <Popup>
            <CloseButton onClick={handleCross}>
              <FiX fontSize={28} cursor="pointer" />
            </CloseButton>
            <h1>Comments</h1>

            {comments.map((comment) => {
              const { id, email, body } = comment;
              return (
                <CommentsDiv key={email}>
                  <h4>{email}:</h4>
                  <span>{body}</span>
                </CommentsDiv>
              );
            })}
          </Popup>
          ;
        </MainPopup>
      )}
      <NewPost>
        <Add>
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
                    placeholder="Enter userId"
                    name="userId"
                    value={formData.userId}
                    onChange={handleChange}
                  />
                </FormDiv>
                <FormDiv>
                  <label>Title:</label>
                  <FormInput
                    type="text"
                    placeholder="Enter title"
                    name="title"
                    value={formData.title}
                    onChange={handleChange}
                  />
                </FormDiv>
                <FormDiv>
                  <label>Body:</label>
                  <FormInput
                    type="text"
                    placeholder="Enter Body"
                    name="body"
                    value={formData.body}
                    onChange={handleChange}
                  />
                </FormDiv>

                <ButtonDiv>
                  <ButtonI type="submit">
                    <FiSend />
                  </ButtonI>
                  <ButtonC type="reset">
                    <FiX />
                  </ButtonC>
                </ButtonDiv>
              </Form>
            </FormWrapper>
          </SubContainer>
          <ToastContainer
            position="top-right"
            autoClose={400}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
          />
        </Add>
      </NewPost>
      {posts.reverse().map((post) => {
        const { userId, id, title, body } = post;
        return (
          <>
            <Container key={id}>
              <PostC>
                <Header>
                  <Avatar />
                  <Delete onClick={handleDelete}>
                    <FiTrash2 onClick={() => deletePost(id)} />
                  </Delete>
                </Header>
                <TitleP>{title}</TitleP>
                <Contents>{body}</Contents>
                <Comments>
                  <ViewComments onClick={() => handleComment(id)}>
                    View all Comments
                  </ViewComments>
                </Comments>
                <CommentBox>
                  <input type="text" placeholder="Add a comment" />
                  <button type="submit">Post</button>
                </CommentBox>
              </PostC>
            </Container>
          </>
        );
      })}
      <ToastContainer
        position="top-right"
        autoClose={400}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </Listingdiv>
  );
};

export default Home;
const Listingdiv = styled.div`
  margin: 50px 200px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media screen and (max-width: 998px) {
    margin: 50px 50px;
  }
`;
const NewPost = styled.div`
  display: flex;
  justify-content: flex-end;
  padding-bottom: 20px;
  a {
    text-decoration: none;
  }
`;
const Add = styled.div`
  border: 1px solid lightgray;
  background-color: white;
  cursor: pointer;
  padding: 15px;
  color: lightcoral;
`;

const SubContainer = styled.div`
  height: 200px;
  /* width: 100%; */
  @media screen and (max-width: 998px) {
    width: 400px;
  }
`;

const FormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;
const Form = styled.form`
  padding: 5px;
  max-width: 700px;
  width: 100%;
  height: auto;
  background-color: none;
  display: flex;
  flex-direction: column;
`;

const Title = styled.div`
  margin-right: 10px;
  padding: 3px;
  font-size: 15px;
  border-bottom: 1px solid lightgray;
`;
const ButtonDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  gap: 5px;
  font-size: 10px;
`;
const ButtonC = styled.button`
  background-color: white;
  border: none;
  color: lightcoral;
  border-radius: 5px;
  font-size: 25px;
  padding: 5px;
`;
const ButtonI = styled.button`
  background-color: white;
  border: none;
  color: lightcoral;
  border-radius: 5px;
  font-size: 20px;
  padding: 5px;
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
  height: 20px;
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
//POSTS
const Container = styled.div`
  width: 600px;
  height: 500px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  padding-bottom: 30px;
  @media screen and (max-width: 998px) {
    width: 500px;
    height: 400px;
  }
`;
const PostC = styled.div`
  border: 1px solid lightgray;
  display: grid;
  grid-template-rows: 80px 1fr 2fr 0.2fr 70px;
  font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
`;
const Header = styled.div`
  grid-row: 1/2;
  border-bottom: 1px solid lightgray;
  padding: 0px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const TitleP = styled.div`
  grid-row: 2/3;
  padding: 10px 20px;
  font-weight: bolder;
  text-align: justify;
`;
const Contents = styled.div`
  grid-row: 3/4;
  padding: 0px 20px;
  text-align: justify;
`;
const Comments = styled.div`
  grid-row: 4/5;
  border-top: 1px solid lightgray;
  padding: 10px 20px;
  a {
    text-decoration: none;
    color: grey;
    font-size: 15px;
  }
`;
const CommentBox = styled.div`
  grid-row: 5/6;
  display: flex;
  justify-content: space-between;

  input {
    margin: 20px;
    border: none;
    width: 80%;
    &:active {
      outline: none;
      border: none;
    }
    &:focus {
      outline: 0;
      border: none;
    }
  }
  button {
    color: blue;
    border: none;
    background-color: white;
    padding-right: 20px;
  }
`;
const Delete = styled.div`
  color: lightcoral;
  cursor: pointer;
`;
const MainPopup = styled.div`
  z-index: 300;
  width: 100%;
  position: absolute;
  justify-content: center;
  align-items: center;
  display: flex;
`;
const Popup = styled.div`
  z-index: 100;
  background-color: white;
  position: fixed;
  float: right;
  bottom: 20%;

  background: #fff;
  border-radius: 5px;
  justify-content: center;
  align-items: center;
  height: 60vh;
  border: 1px solid black;
  width: 40%;
  margin-top: 25%;
  /* background-color: rgba(230, 126, 126, 0.27); */
  background-color: lightcoral;
  border-radius: 8px;
  border: 1px solid rgba(0, 0, 0, 0.3);
  h1 {
    color: white;
    text-align: center;
  }
`;

const CommentsDiv = styled.div`
  text-align: justify;
  color: white;
  border-bottom: 1px solid white;
  padding: 10px;
  font-size: 12px;
  p {
  }
  span {
    color: black;
  }
`;
const CloseButton = styled.button`
  position: relative;
  float: right;
  background: none;
  border: none;
  color: white;
  top: 10px;
  right: 10px;
  padding: 10px;
`;
const ViewComments = styled.div`
  cursor: pointer;
  color: grey;
`;

