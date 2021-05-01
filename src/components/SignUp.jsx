import react, { useState } from "react";
import firebase from "firebase/app";
import "firebase/auth";
import { db } from "../firebase-config";

export default function SignUp() {
  const [userName, setUserName] = useState(null);
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const [error, setError] = useState(null);

  function nameChangeHandler(event) {
    setUserName(event.target.value);
  }

  function changeHadler(event) {
    const value = event.target.value;
    const type = event.currentTarget.name;
    // console.log(type);
    if (type === "email") {
      setEmail(value);
    } else if (type === "password") {
      setPassword(value);
    }
  }

  const SignUpWithEmail = (event) => {
    event.preventDefault();
    // console.log(userName, email, password);
    if (userName && email && password) {
      if (userName.length > 0 && password.length > 0 && email.length > 0) {
        firebase
          .auth()
          .createUserWithEmailAndPassword(email, password)
          .then((userCredential) => {
            userCredential.user
              .updateProfile({
                displayName: userName,
              })
              .then(() => {
                const useruid = userCredential.user.uid;
                // console.log(useruid);
                const createdAt = firebase.firestore.FieldValue.serverTimestamp();
                db.collection("accounts").doc(useruid).set({
                  name: userCredential.user.displayName,
                  userNotes: [],
                  createdAt: createdAt,
                });
                setError(null);
                // console.log("user signedup with uid: ", useruid);
              });
          })
          .catch((error) => {
            console.log(error);
            setError(error.message);
          });
      } else {
        setError("one or more field is/are missing.");
      }
    } else {
      setError("A field is missing.");
    }
  };

  return (
    <div className="w-full max-w-xs my-4 mx-auto">
      <form
        action=""
        className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
      >
        <div className="mb-4">
          <label
            htmlFor="name"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            UserName
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="text"
            placeholder="Username"
            onChange={nameChangeHandler}
            required
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="email"
          >
            Email
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="email"
            name="email"
            onChange={changeHadler}
            id="email"
            placeholder="abc@email.com"
            required
          />
        </div>
        <div className="mb-6">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="password"
          >
            Password
          </label>
          <input
            className="shadow appearance-none border  rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
            type="password"
            name="password"
            onChange={changeHadler}
            id="password"
            placeholder="password"
            required
          />
          <p className="text-red-500 text-xs italic">
            {error && <span>{error}</span>}
          </p>
        </div>
        <div className="flex items-center justify-between">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
            onClick={SignUpWithEmail}
          >
            Sign Up
          </button>
        </div>
      </form>
      {/* <button>Sign up using google</button> */}
    </div>
  );
}
