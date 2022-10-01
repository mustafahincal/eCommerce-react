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
import Profile from "./pages/Profile/Profile";
import ProtectedRoute from "./pages/ProtectedRoute";
import Cart from "./pages/Cart/Cart";
import Error404 from "./pages/Error404/Error404";
import CartPurchased from "./pages/CartPurchased/CartPurchased";

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
              <Route path="/profile" element={<ProtectedRoute />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/cartpurchased" element={<CartPurchased />} />
              <Route path="*" element={<Error404 />} />
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
