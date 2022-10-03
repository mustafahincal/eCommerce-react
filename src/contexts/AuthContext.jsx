import { Flex, Spinner } from "@chakra-ui/react";
import { createContext, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { fetchLogin, fetchRegister } from "../services/authService";
import jwt_decode from "jwt-decode";
import { fetchUserById } from "../services/userService";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isAdmin, setIsAdmin] = useState(false);
  const [isLogged, setIsLogged] = useState(false);
  const [user, setUser] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    if (localStorage.getItem("token")) {
      setUser(JSON.parse(localStorage.getItem("userInfo")));
      setIsLogged(true);
      setIsLoading(false);
    }
    if (localStorage.getItem("admin")) {
      setIsAdmin(true);
    } else {
      setIsLoading(false);
    }
  }, []);

  const register = (values) => {
    setIsLoading(true);
    fetchRegister(values)
      .then((result) => {
        if (result.success) {
          toast.success(result.message);
          localStorage.setItem("token", result.data);
          jwtDecode(result.data);
          setIsLogged(true);
          navigate("/main");
        } else {
          toast.error(result.message);
          setIsLoading(false);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const logout = () => {
    setIsLogged(false);
    setUser({});
    setIsAdmin(false);
    localStorage.removeItem("userInfo");
    localStorage.removeItem("userId");
    localStorage.removeItem("token");
    localStorage.removeItem("admin");
    navigate("/");
  };

  const login = (values) => {
    setIsLoading(true);
    fetchLogin(values)
      .then((result) => {
        if (result.success) {
          toast.success(result.message);
          localStorage.setItem("token", result.data);
          jwtDecode(result.data);
          setIsLogged(true);
          navigate("/main");
        } else {
          toast.error(result.message);
          setIsLoading(false);
        }
      })
      .catch((err) => {
        console.log(err);
        setIsLoading(false);
      });
  };

  const jwtDecode = async (token) => {
    const decoded = jwt_decode(token);
    localStorage.setItem("userId", decoded.sub);
    fetchUserById(decoded.sub)
      .then((result) => {
        if (result.data.role === "admin") {
          setIsAdmin(true);
          localStorage.setItem("admin", JSON.stringify(true));
        }
        setUser(result.data);
        localStorage.setItem("userInfo", JSON.stringify(result.data));
        setIsLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setIsLoading(false);
      });
  };

  const values = {
    isAdmin,
    setIsAdmin,
    isLogged,
    setIsLogged,
    user,
    setUser,
    logout,
    login,
    register,
  };

  if (isLoading) {
    return (
      <Flex justifyContent={"center"} alignItems="center" height={"100vh"}>
        <Spinner
          thickness="4px"
          speed="0.65s"
          emptyColor="gray.200"
          size="xl"
          color="red"
        />
      </Flex>
    );
  }

  return <AuthContext.Provider value={values}>{children}</AuthContext.Provider>;
};

export const useAuthContext = () => useContext(AuthContext);
