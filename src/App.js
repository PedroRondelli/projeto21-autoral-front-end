import { BrowserRouter, Routes, Route } from "react-router-dom";
import GlobalStyle from "./assets/globalStyled";
import AuthPage from "./pages/AuthPage";
function App() {
  return(
    <>
    <GlobalStyle/>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<AuthPage/>} />
    </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
