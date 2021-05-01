import { useContext } from "react";
import { firebaseContext } from "./components/hooks/ProvideAuth";

export default function useAuth() {
  return useContext(firebaseContext);
}
