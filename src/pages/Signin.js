import { auth } from "../utils/firebase";
import { handleSignIn } from "../utils/firebaseUtils";

const Signin = () => {
  return (
    <div>
      <button onClick={handleSignIn}>
        Sign In with Google
      </button>
    </div>
  );
};

export default Signin;
