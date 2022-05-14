// import React, { useEffect, useState } from "react";
// import styled from "styled-components";
// import { useParams } from "react-router";
// import { useSelector, useDispatch } from "react-redux";

// import axios from "axios";
// import { getpostComments } from "../../redux/action/postActions";

// const Container = styled.div`
//   height: 100%;
//   margin: 60px;
//   font-family: sans-serif;
//   @media screen and (max-width: 1080px) {
//     margin: 45px;
//   }
// `;
// const SubContainer = styled.div`
//   height: 400px;
//   width: 100%;
//   border-left: 2px solid lightgrey;
//   @media screen and (max-width: 1080px) {
//   }
// `;
// const Title = styled.div`
//   margin-right: 10px;
//   padding: 5px;
//   font-size: 15px;
//   border-bottom: 1px solid lightgray;
// `;
// const PostComments = ({id}) => {
//   const [postID,setPostID] = useState('');
//   const postcomments = useSelector((state) => state.postComments.postcomments);
//   // const {postId,id ,body,email,name} = comment;
//   console.log("postcomments", postcomments);
//   const dispatch = useDispatch();

//   const fetchComments = async () => {
//     const res = await axios
//       .get(`https://jsonplaceholder.typicode.com/posts/1/comments`)
//       .catch((err) => {
//         console.log("ERR", err);
//       });
//     console.log(res.data);
//     dispatch(getpostComments(res.data));
//   };
 
//   const renderCommentList = postcomments.map((postcomment) => {
//     const { postId, id, title,name,email, body } = postcomment;
  
//      return (      

//      <Comments key={id}>
       
//           <h3>{email}</h3>
//           <span>{body}</span>
//           <h1>{postId}</h1>
       
//       </Comments>
//     );
//   });
//   console.log("renderCommentList",renderCommentList);

//   useEffect(() => {
//     fetchComments();
   
//   }, []);

//   return (
//     <Container>
//       <SubContainer>
//         <Title>
//           <span>Comments</span>
//         </Title>
    
//         {renderCommentList}
//       </SubContainer>
//     </Container>
//   );
// };

// export default PostComments;

// const Comments = styled.div`
//  text-align:justify;
//  padding-bottom: 20px;
//  font-size: 12px;;
//  h3{
//    color: pink;
//  }
// `;
