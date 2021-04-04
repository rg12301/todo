import TodoApp from "./pages/TodoApp";
import SignIn from "./pages/Signin";
import { auth } from "./utils/firebase";
import { useState, useEffect } from "react";
// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
//   Redirect,
// } from "react-router-dom";

function App() {
  const [user, setUser] = useState(null);
  useEffect(() => {
    const unsubscribe = auth().onAuthStateChanged(
      (_user) => {
        setUser(_user);
      }
    );
    return unsubscribe;
  });
  return (
    // <Router>
    //   <Switch>
    //     <Route path="/">
    //       <SignIn />
    //     </Route>
    //     <Route path="/todo-app">
    //       {user ? <TodoApp /> : <Redirect to="/" />}
    //     </Route>
    //   </Switch>
    // </Router>
    user ? <TodoApp /> : <SignIn />
  );
}

export default App;
