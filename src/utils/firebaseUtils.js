import { auth, firestore } from "./firebase";

const userDataRef = firestore().collection("USERS");

export const handleSignIn = async (email, pass) => {
  await auth()
    .signInWithEmailAndPassword(email + "@email.com", pass)
    .then((userCredential) => {
      console.log("Signed in successfully", userCredential);
    })
    .catch((error) => {
      var errorCode = error.code;
      var errorMessage = error.message;
      return [errorCode, errorMessage];
    });
};

export function handleSignOut() {
  return auth().signOut();
}

export function getUser() {
  const user = auth().currentUser;
  const uid = user ? user.uid : null;
  if (uid) {
    return uid;
  }
}

// const todosRef = userDataRef.doc(user).collection("TODO");

export async function addTodo(todo, user) {
  const SERVER_TIMESTAMP = firestore.FieldValue.serverTimestamp();
  await userDataRef
    .doc(user)
    .collection("TODOS")
    .doc(todo.id)
    .set({
      ...todo,
      createdAt: SERVER_TIMESTAMP,
    });
}

export async function deleteTodo(todo, user) {
  await userDataRef
    .doc(user)
    .collection("TODOS")
    .doc(todo.id)
    .delete();
}

export async function handleUpdateStart(todo, user) {
  await userDataRef
    .doc(user)
    .collection("TODOS")
    .doc(todo.id)
    .update({
      startStatus: !todo.startStatus,
    });
}

export async function handleUpdateFinish(todo, user) {
  await userDataRef
    .doc(user)
    .collection("TODOS")
    .doc(todo.id)
    .update({
      finishStatus: !todo.finishStatus,
    });
}
