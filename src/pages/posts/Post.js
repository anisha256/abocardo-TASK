import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { FiTrash2 } from "react-icons/fi";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Container = styled.div`
  width: 500px;
  height: 400px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  padding-bottom: 30px;
  /* border: 1px solid pink; */
  @media screen and (max-width: 998px) {
    width: 300px;
    height: 400px;
  }
`;
const PostC = styled.div`
  border: 1px solid lightgray;
  display: grid;
  grid-template-rows: 80px 1fr 2fr 2fr 70px;
  font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
`;
const Header = styled.div`
  grid-row: 1/2;
  border-bottom: 1px solid lightgray;
  padding: 20px 20px;
  display: flex;
  justify-content: space-between;
`;
const Title = styled.div`
  grid-row: 2/3;
  padding: 0px 20px;
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
  a{
    text-decoration: none;
    color: grey;
    font-size: 15px;
  }
`;
const CommentBox = styled.div`
  grid-row: 5/6;
  border-top: 1px solid lightgray;
  display: flex;
  justify-content: space-between;

  input {
    margin: 20px;
    border: none;
    width: 80%;
  }
  button {
    color: blue;
    border: none;
    background-color: white;
  }
`;
const Delete = styled.div`
  color: pink;
  cursor: pointer;

`;

const Post = () => {
  const posts = useSelector((state) => state.allPosts.posts);
  const handleDelete=()=>{
    toast.success(" Deleted Sucessfully", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  }
  const renderlist = posts.reverse().map((post) => {
    const { userId, id, title, body } = post;
    return (
      <Container  key={id}>
        <PostC>
          <Header>
            <span>userId:{userId}</span>
            <Delete onClick={handleDelete} >
              <FiTrash2 />
            </Delete>
          </Header>
          <Title>{title}</Title>
          <Contents>{body}</Contents>

          <Comments>
            <Link to={`/post/${id}/comments`}>
              View all Comments
            </Link>
          </Comments>

          <CommentBox>
            <input type="text" placeholder="Add a comment" />
            <button type="submit">Post</button>
          </CommentBox>
        </PostC>
    
      </Container>

    );
  });
  return <>{renderlist}
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
      /></>;
};

export default Post;
