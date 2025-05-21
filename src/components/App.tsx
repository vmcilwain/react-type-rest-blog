import { BrowserRouter, Routes, Route } from "react-router-dom";
import "bulma/css/bulma.min.css";
import PostsPage from "../pages/PostsPage";
import PostPage from "../pages/PostPage";

const App: React.FC = () => (
  <div className="container is-fluid">
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PostsPage />} />
        <Route path="posts/:id" element={<PostPage />} />
      </Routes>
    </BrowserRouter>
  </div>
);

export default App;