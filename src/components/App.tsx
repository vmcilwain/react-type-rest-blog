import { BrowserRouter, Routes, Route } from "react-router-dom";
import PostsPage from "../pages/PostsPage";
import PostPage from "../pages/PostPage";

const App: React.FC = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<PostsPage />} />
      <Route path="posts/:id" element={<PostPage />} />
    </Routes>
  </BrowserRouter>
);

export default App;