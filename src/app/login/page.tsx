import { handleLogin, handleSignup } from "../../actions/login";
import SignInButton from "../components/buttons/sign-in";
import SignUpButton from "../components/buttons/sign-up";

export default async function LoginPage() {
  return (
    <>
      <form>
        <label htmlFor="email">
          Enter your email
          <input type="email" name="email" id="email" />
        </label>
        <label htmlFor="pw">
          Enter your password
          <input type="password" name="pw" id="pw" />
        </label>
        <SignUpButton formAction={handleSignup} />
        <SignInButton formAction={handleLogin} />
      </form>
    </>
  );
}
