import Navbar from "./component/navbar/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";

import PostComments from "./pages/posts/PostComments";
import TableUI from "./pages/TableUI";
import Tasks from "./pages/Tasks";
function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/taskcompleted" element={<Tasks />} />
          <Route exact path="/post/:postId/comments" element={<PostComments />} />
          <Route exact path="/tableui" element={<TableUI />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
