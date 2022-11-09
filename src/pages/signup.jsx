import { Link } from "react-router-dom";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Input,
  Checkbox,
  Button,
  Typography,
} from "@material-tailwind/react";

export function SignUp() {
  return (
    <>
      <div className="">
        <Card className="mx-auto max-w-lg bg-white/60 rounded-2xl absolute top-2/4 left-2/4 w-full -translate-y-2/4 -translate-x-2/4">
          <Typography className="text-center text-2xl text-black sm:text-3xl p-6">
            Sign Up
          </Typography>
          <CardBody className="flex flex-col gap-4">
            <Input type="email" label="Email" size="md" color="teal"/>
            <Input type="password" label="Password" size="md" color="teal"/>
            <Input type="password" label="Confirm Password" size="md" color="teal"/>
          </CardBody>
          <CardFooter className="pt-0">
            <Button fullWidth color="teal" >
              Sign Up
            </Button>
            <Typography variant="small" className="mt-6 flex justify-center">
              Already have an account?
              <Link to="/signin">
                <Typography
                  as="span"
                  variant="small"
                  color="teal"
                  className="ml-1 font-bold"
                >
                  Sign in
                </Typography>
              </Link>
            </Typography>
          </CardFooter>
        </Card>
      </div>
    </>
  );
}

export default SignUp;
