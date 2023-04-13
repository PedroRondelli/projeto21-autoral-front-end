import { BrowserRouter, Routes, Route } from "react-router-dom";
import GlobalStyle from "./assets/globalStyled";
import AuthPage from "./pages/AuthPage";
import EditionProfile from "./pages/ProfileEditionPage";
import Profile from "./pages/Profile";
import { ProfilePicProvider } from "./contexts/profilePicContext";
function App() {
  return (
    <>
      <GlobalStyle />
      <BrowserRouter>
      <ProfilePicProvider>
        <Routes>
          <Route path="/" element={<AuthPage />} />
          
            <Route path="/profile" element={<Profile />} />
            <Route path="/edition" element={<EditionProfile />} />
          
        </Routes>
        </ProfilePicProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
