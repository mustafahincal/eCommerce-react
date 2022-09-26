import { Flex, Spinner } from "@chakra-ui/react";
import { createContext, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { fetchLogin, fetchRegister } from "../services/authService";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isAdmin, setIsAdmin] = useState(false);
  const [isLogged, setIsLogged] = useState(false);
  const [user, setUser] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    if (localStorage.getItem("userInfo")) {
      setUser(JSON.parse(localStorage.getItem("userInfo")));
      setIsLogged(true);
      setIsLoading(false);
    } else {
      setIsLoading(false);
    }
  }, []);

  const register = (values) => {
    fetchRegister(values)
      .then((result) => {
        if (result.success) {
          toast.success(result.message);
          localStorage.setItem("userInfo", JSON.stringify(result.data));
          setUser(result.data);
          setIsLogged(true);
          navigate("/main");
        } else {
          toast.error(result.message);
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
    navigate("/");
  };

  const login = (values) => {
    fetchLogin(values)
      .then((result) => {
        if (result.success) {
          toast.success(result.message);
          localStorage.setItem("userInfo", JSON.stringify(result.data));
          setUser(result.data);
          setIsLogged(true);
          navigate("/main");
        } else {
          toast.error(result.message);
        }
      })
      .catch((err) => {
        console.log(err);
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
