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
import { useAuthContext } from "../../contexts/AuthContext";

function SignIn() {
  const { login } = useAuthContext();

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit: async (values, bag) => {
      login(values);
    },
  });

  return (
    <div>
      <Flex alignItems={"center"} width="full" justifyContent={"center"}>
        <Box pt="10" width={"25%"}>
          <Box textAlign="center">
            <Heading>Sign In</Heading>
          </Box>
          <Box my="5" textAlign="left">
            <form onSubmit={formik.handleSubmit}>
              <FormControl>
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
                  type={"password"}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.password}
                  isInvalid={formik.errors.password && formik.touched.password}
                />
              </FormControl>
              <Button mt="4" width={"full"} type="submit">
                Sign In
              </Button>
            </form>
          </Box>
        </Box>
      </Flex>
    </div>
  );
}

export default SignIn;
