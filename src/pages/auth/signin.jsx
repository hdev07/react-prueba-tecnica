import { Link } from "react-router-dom";
import {
  Card,
  CardBody,
  CardFooter,
  Input,
  Button,
  Typography,
} from "@material-tailwind/react";
import { useAuth } from "@/hooks";

export function SignIn() {
  const { login } = useAuth();
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    login({
      email: data.get("email"),
      password: data.get("password")
    });
  };


  return (
    <>
      <Card className="mx-auto max-w-lg bg-white/60 rounded-2xl absolute top-2/4 left-2/4 w-full -translate-y-2/4 -translate-x-2/4">
        <Typography className="text-center text-2xl text-black sm:text-3xl p-6">
          Sign In
        </Typography>
        <form onSubmit={handleSubmit}>
          <CardBody className="flex flex-col gap-4">
            <Input onPaste={(e)=>{ 
              e.preventDefault()
              return false;
            }} onCopy={(e)=>{
              e.preventDefault()
              return false;
            }} type="email" label="Email" size="md" color="teal" />
            <Input onPaste={(e)=>{
              e.preventDefault()
              return false;
            }} onCopy={(e)=>{
              e.preventDefault()
              return false;
            }} type="password" label="Password" size="md" color="teal"/>
            <Button fullWidth color="teal" type="submit" className="mt-7">
              Sign In
            </Button>
          </CardBody>
        </form>
        <CardFooter className="pt-0">
          <Typography variant="small" className="mt-6 flex justify-center">
            Don't have an account?
            <Link to="/auth/signup">
              <Typography
                as="span"
                variant="small"
                color="teal"
                className="ml-1 font-bold"
              >
                Sign up
              </Typography>
            </Link>
          </Typography>
        </CardFooter>
      </Card>
    </>
  );
}


export default SignIn;
