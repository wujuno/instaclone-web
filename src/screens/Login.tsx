import {
  faFacebook,
  faFacebookF,
  faFacebookSquare,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Helmet } from "react-helmet-async";
import { useForm } from "react-hook-form";
import styled from "styled-components";
import AuthLayout from "../components/auth/AuthLayout";
import BottomBox from "../components/auth/BottomBox";
import Button from "../components/auth/Button";
import FormBox from "../components/auth/FormBox";
import FormError from "../components/auth/FormError";
import Input from "../components/auth/Input";
import Separator from "../components/auth/Separator";
import routes from "../routes";



const FacebookLogin = styled.div`
  color: #385285;
  span {
    margin-left: 10px;
    font-weight: 600;
  }
`;

type IForm = {
  username: string;
  password: string;
}

function Login() {
  const {register, handleSubmit , formState, setValue} = useForm<IForm>({
    mode:"onChange"
  });
  const onValid = (data:IForm) => {
    console.log(data);
    setValue("username","");
    setValue("password","");
  }
  return (
    <AuthLayout>
      <Helmet>
        <title>Login | instaclone</title>
      </Helmet>
      <FormBox>
        <div>
          <FontAwesomeIcon icon={faInstagram} size="3x" />
        </div>
        <form onSubmit={handleSubmit(onValid)}>
          <Input 
            type="text" 
            placeholder="Username"
            {...register("username", {
              required:"Username is required", 
              minLength:{
                value:2,
                message: "Username should be longer than 5 chars.",
              }, 
              maxLength:{
                value:15,
                message: "Username should be shorter than 15 chars.",
              }, 
            })} 
          />
          <FormError message={formState.errors?.username?.message} />
          <Input 
            type="password" 
            placeholder="Password"
            {...register("password", {
              required:"Password is required",
              minLength:{
                value:6,
                message: "Password should be longer than 6 chars.",
              }, 
              maxLength:{
                value:20,
                message: "Password should be shorter than 20 chars.",
              },
            })} 
          />
          <FormError message={formState.errors?.password?.message} />
          <Button type="submit" value="Log in" disabled={!formState.isValid} />
        </form>
        <Separator />
        <FacebookLogin>
          <FontAwesomeIcon icon={faFacebookSquare} />
          <span>Log in with Facebook</span>
        </FacebookLogin>
      </FormBox>
      <BottomBox
        cta="Don't have an account?"
        linkText="Sign up"
        link={routes.signUp}
      />
    </AuthLayout>
  );
}
export default Login;