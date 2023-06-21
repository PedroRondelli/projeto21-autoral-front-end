import { BrowserRouter, Routes, Route } from "react-router-dom";
import GlobalStyle from "./assets/globalStyled";
import AuthPage from "./pages/AuthPage";
import EditionProfile from "./pages/ProfileEditionPage";
import Profile from "./pages/Profile";
import { ProfilePicProvider } from "./contexts/profilePicContext";
import CustomerPage from "./pages/CustomerPage";
import { CustomerProvider } from "./contexts/customerContext";
import SelectionPage from "./pages/SelectionPage";

function App() {
  return (
    <>
      <GlobalStyle />
      <BrowserRouter>
        <ProfilePicProvider>
          <CustomerProvider>
            <Routes>
              <Route path="/" element={<AuthPage />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/edition" element={<EditionProfile />} />
              <Route path="/customer" element={<CustomerPage />} />
              <Route path="/selection" element={<SelectionPage/>}/>
            </Routes>
          </CustomerProvider>
        </ProfilePicProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
