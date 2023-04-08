import { BrowserRouter, Routes, Route } from "react-router-dom";
import GlobalStyle from "./assets/globalStyled";
import AuthPage from "./pages/AuthPage";
import EditionProfile from "./pages/ProfileEditionPage";
import Profile from "./pages/Profile";
function App() {
  return(
    <>
    <GlobalStyle/>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<AuthPage/>} />
      <Route path="/profile" element={<Profile/>} />
      <Route path="/edition" element={<EditionProfile/>} />
    </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
