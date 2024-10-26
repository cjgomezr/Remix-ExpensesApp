import authStyles from "/app/styles/auth/auth.css?url";
import AuthForm from "./AuthForm";

export default function Auth() {
  return <AuthForm />
}

export function links() {
  return [{ rel: "stylesheet", href: authStyles }];
}
