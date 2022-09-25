import Yup from "./validation";

const RegisterSchema = Yup.object().shape({
  email: Yup.string().required().email(),
  password: Yup.string().required().min(5),
  passwordConfirm: Yup.string()
    .oneOf([Yup.ref("password")], "Parolalar uyuşmuyor")
    .required(),
});

export default RegisterSchema;
