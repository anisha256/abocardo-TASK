import React, { useEffect } from "react";
import styled from "styled-components";

import { useDispatch, useSelector } from "react-redux";

import Post from "./posts/Post";

import axios from "axios";

import { getPosts } from "../redux/action/postActions";

import { Link } from "react-router-dom";
// import DeleteIcon from '@mui/icons-material/Delete';

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
const Home = () => {
  const posts = useSelector((state) => state);
  console.log(posts);
  const dispatch = useDispatch();

  const fetchPosts = async () => {
    const res = await axios
      .get(`https://jsonplaceholder.typicode.com/posts`)
      .catch((err) => {
        console.log("ERR", err);
      });
    console.log(res.data);
    dispatch(getPosts(res.data));
  };
  const handleAddPost = () => {
    // console.log("clicked");
    // const config = {
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    // };
    // const { data } = await axios.post(
    //   "https://jsonplaceholder.typicode.com/posts",
    //   data,
    //   config,
    // );
    // console.log("data:", data);
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  return (
    <Listingdiv>
      <NewPost>
        <Link to="/post/add">
          <Add>
            <span>+ADD NEW POST</span>
          </Add>
        </Link>
      </NewPost>
      <Post />
    </Listingdiv>
  );
};

export default Home;
