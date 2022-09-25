import {
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Input,
} from "@chakra-ui/react";
import React from "react";
import { useFormik } from "formik";
import RegisterSchema from "../../validations/registerSchema";
import { register } from "../../services/authService";
import { toast } from "react-toastify";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuthContext } from "../../contexts/AuthContext";

function SignUp() {
  const [isLoading, setIsLoading] = useState(false);
  const { setIsLogged, setUser } = useAuthContext();

  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      passwordConfirm: "",
    },
    onSubmit: async (values, bag) => {
      setIsLoading(true);
      register({
        email: values.email,
        password: values.password,
        firstName: values.firstName,
        lastName: values.lastName,
      })
        .then((result) => {
          if (result.success) {
            toast.success(result.message);
            localStorage.setItem("userInfo", JSON.stringify(result.data));
            setUser(result.data);
            setIsLogged(true);
            navigate("/main");
            setIsLoading(false);
          } else {
            toast.error(result.message);
            setIsLoading(false);
          }
        })
        .catch((err) => {
          console.log(err);
          setIsLoading(false);
        });
    },
    validationSchema: RegisterSchema,
  });

  return (
    <div>
      <Flex alignItems={"center"} width="full" justifyContent={"center"}>
        <Box pt="10" width={"25%"}>
          <Box textAlign="center">
            <Heading>Sign Up</Heading>
          </Box>
          <Box my="5" textAlign="left">
            <form onSubmit={formik.handleSubmit}>
              <FormControl>
                <FormLabel>First Name</FormLabel>
                <Input
                  name="firstName"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.firstName}
                  isInvalid={
                    formik.errors.firstName && formik.touched.firstName
                  }
                />
              </FormControl>
              <FormControl mt="4">
                <FormLabel>Last Name</FormLabel>
                <Input
                  name="lastName"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.lastName}
                  isInvalid={formik.errors.lastName && formik.touched.lastName}
                />
              </FormControl>
              <FormControl mt="4">
                <FormLabel>E-mail</FormLabel>
                <Input
                  name="email"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.email}
                  isInvalid={formik.errors.email && formik.touched.email}
                />
              </FormControl>
              <FormControl mt="4">
                <FormLabel>Password</FormLabel>
                <Input
                  name="password"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.password}
                  type={"password"}
                  isInvalid={formik.errors.password && formik.touched.password}
                />
              </FormControl>
              <FormControl mt="4">
                <FormLabel>Password Confirm</FormLabel>
                <Input
                  name="passwordConfirm"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.passwordConfirm}
                  type={"password"}
                  isInvalid={
                    formik.errors.passwordConfirm &&
                    formik.touched.passwordConfirm
                  }
                />
              </FormControl>
              <Button mt="4" width={"full"} type="submit" isLoading={isLoading}>
                Sign Up
              </Button>
            </form>
          </Box>
        </Box>
      </Flex>
    </div>
  );
}

export default SignUp;
