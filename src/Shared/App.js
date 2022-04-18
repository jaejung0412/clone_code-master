import React from "react";
import { Route, Routes } from "react-router-dom";

//pages
import Signup from "../pages/signup";
import Login from "../pages/login";
import Main from "../pages/main";
import ProfilePage from "../pages/profilePage";
import Post from "../components/Post";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/*" element={<Main />} />
        <Route path="/signup/*" element={<Signup />} />
        <Route path="/login/*" element={<Login />} />
        <Route path="/profile/:user/*" element={<ProfilePage />} />
        <Route path="/samplepost" element={<Post />} />
      </Routes>
    </div>
  );
}

export default App;
