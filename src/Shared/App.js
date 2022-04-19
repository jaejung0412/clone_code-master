import React from "react";
import { Route, Routes } from "react-router-dom";

//pages
import Signup from "../pages/signup";
import Login from "../pages/login";
import Main from "../pages/main";
import ProfilePage from "../pages/profilePage";
import Post from "../components/Post";
import ProfileEdit from "../pages/profileEdit";
import Sample from "../pages/sample";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/*" element={<Main />} />
        <Route path="/signup/*" element={<Signup />} />
        <Route path="/login/*" element={<Login />} />
        <Route path="/profile/:user/*" element={<ProfilePage />} />
        <Route path="/edit/:user/*" element={<ProfileEdit />} />
        <Route path="/sampleedit" element={<ProfileEdit />} />
      </Routes>
    </div>
  );
}

export default App;
