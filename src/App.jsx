import "./App.css";
import "./reset.css";
import Navbar from "./components/Navbar/Navbar";
import { Routes, Route } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";

import { extendTheme } from "@chakra-ui/react";
import Main from "./components/Main/Main";
import Home from "./pages/Home/Home";
import SignIn from "./pages/Auth/SignIn";
import SignUp from "./pages/Auth/SignUp";
import { ToastContainer } from "react-toastify";
import ProductDetail from "./pages/ProductDetail/ProductDetail";

const theme = extendTheme({
  fonts: {
    body: `"Quicksand", sans-serif`,
  },
});

function App() {
  return (
    <>
      <ChakraProvider theme={theme}>
        <div>
          <div>
            <Navbar />
          </div>
          <div id="content" className="container">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/main/*" element={<Main />} />
              <Route path="/signin" element={<SignIn />} />
              <Route path="/signup" element={<SignUp />} />
              <Route path="/products/:productId" element={<ProductDetail />} />
            </Routes>
          </div>
        </div>
      </ChakraProvider>
      <ToastContainer
        position="bottom-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </>
  );
}

export default App;
