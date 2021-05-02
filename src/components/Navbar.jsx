import React, { useContext, useEffect, useState } from "react";
import firebase from "firebase/app";
import "firebase/auth";
import "./Navbar.css";
import MenuIcon from "@material-ui/icons/Menu";
import { firebaseContext } from "../components/hooks/ProvideAuth";
import useAuth from "../useAuth";
import { Link, useHistory } from "react-router-dom";

function Navbar() {
  const [showItems, setShowItems] = useState(false);
  let history = useHistory();
  const user = useAuth();
  // console.log(user);
  const handleSignOut = () => {
    firebase
      .auth()
      .signOut()
      .then(() => {
        history.push("/signIn");
      })
      .catch((error) => {
        console.error(error.message);
      });
  };
  return (
    <nav>
      <div className="header">
        <h1>Make Notes</h1>
      </div>
      <div className="menu">
        <i
          className="fas fa-bars"
          onClick={() => {
            setShowItems(!showItems);
          }}
        ></i>
      </div>
      <ul className={showItems ? "show" : ""}>
        {user ? (
          <React.Fragment>
            <li>
              <Link to="/home">Home</Link>
            </li>
            <li className="mr-6">
              <button
                className="inline-block text-sm px-4 py-2 leading-none border rounded  border-black hover:border-transparent hover:text-teal-500 hover:bg-white mt-4 lg:mt-0"
                onClick={handleSignOut}
              >
                Sign out
              </button>
            </li>
          </React.Fragment>
        ) : (
          <React.Fragment>
            <li>
              <Link to="/signIn">Sign In</Link>
            </li>
            <li>
              <Link to="/signUp">Sign Up</Link>
            </li>
          </React.Fragment>
        )}
      </ul>
    </nav>
  );
}

export default Navbar;
