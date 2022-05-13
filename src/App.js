import Navbar from "./component/navbar/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Generate from "./pages/Generate";
import PostDetail from "./pages/posts/PostComments";
import AddPost from "./pages/posts/AddPost";
import User from "./pages/User";
import PostComments from "./pages/posts/PostComments";
// import TableData from "./pages/TableData"
function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/user" element={<User />} />
          <Route exact path="/post/add" element={<AddPost />} />
          <Route exact path="/post/:postId" element={<PostDetail />} />
          <Route exact path="/post/:postId/comments" element={<PostComments />} />
          {/* <Route exact path="/tabledata" element={<TableData />} /> */}

          <Route exact path="/generate" element={<Generate />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
