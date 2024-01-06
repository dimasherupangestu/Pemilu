import React, { useState } from "react";
import { Navigate, Outlet, Route, Routes } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import DetailPage from "./pages/DetailPage";
import Login from "./pages/Login";
import Register from "./pages/Register";
import VotePage from "./pages/Vote";
import ModalVotePage from "./pages/ModalVote";
import AdminPage from "./pages/Admin";
import ListPaslonPage from "./pages/ListPaslon";
import ListPartaiPage from "./pages/ListPartai";
import AddPartaiPage from "./pages/AddPartai";
import AddPaslonPage from "./pages/AddPaslon";
import CardAdmin from "./layout/CardAdmin";

const App: React.FC = () => {
  const [isUserLoggedIn] = useState(true);
  const [userBiasa] = useState(false);
  function checkLogin(isUserLoggedIn: boolean, userBiasa: boolean) {
    if (isUserLoggedIn) {
      return <Outlet />;
    }
    if (userBiasa) {
      return <Navigate to="/login" />;
    }
  }
  return (
    <Routes>
      <Route path="/" element={checkLogin(isUserLoggedIn, userBiasa)}>
        <Route
          path="/admin"
          element={<AdminPage isUserLoggedIn={isUserLoggedIn} />}
        />
        <Route
          path="/listPaslon"
          element={<ListPaslonPage isUserLoggedIn={isUserLoggedIn} />}
        />
        <Route
          path="/listPartai"
          element={<ListPartaiPage isUserLoggedIn={isUserLoggedIn} />}
        />
        <Route path="/tes" element={<CardAdmin />} />
        <Route
          path="/addPartai"
          element={
            <AddPartaiPage isUserLoggedIn={isUserLoggedIn} admin={false} />
          }
        />
        <Route
          path="/addPaslon"
          element={
            <AddPaslonPage isUserLoggedIn={isUserLoggedIn} admin={false} />
          }
        />
        <Route
          path="/modalVote"
          element={<ModalVotePage isUserLoggedIn={isUserLoggedIn} />}
        />
        <Route
          path="/home"
          element={<LandingPage isUserLoggedIn={isUserLoggedIn} />}
        />
        <Route path="/detailPage" element={<DetailPage />} />
        <Route
          path="/vote"
          element={<VotePage isUserLoggedIn={isUserLoggedIn} />}
        />
      </Route>
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
    </Routes>
  );
};

export default App;
