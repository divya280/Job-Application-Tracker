import React from "react";
import { login } from "../api/authApi";
import AuthForm from "../components/AuthForm";

const Login = () => <AuthForm type="login" />;
export default Login;
