import React from "react";
import { signInWithPopup, signOut, onAuthStateChanged } from "firebase/auth";
import { UserLogged } from "../../../infra/entities/UserLogged";

// @ts-ignore
import { auth, providerGoogle } from "../../../infra/firebase/index.ts";
import { FcGoogle } from "react-icons/fc";

interface AuthUserProps {
  user: UserLogged | any;
  setUser: (user: UserLogged | any) => void;
}

export const AuthUser = ({ user, setUser }: AuthUserProps) => {
  const signIn = async () => {
    try {
      const result = await signInWithPopup(auth, providerGoogle);
      setUser(result.user);
      console.log(result.user);
    } catch (error) {
      console.log(error);
    }
  };

  const signOutUser = async () => {
    try {
      await signOut(auth);
      setUser({});
    } catch (error) {
      console.log(error);
    }
  };

  onAuthStateChanged(auth, (user) => {
    setUser(user);
  });

  return (
    <div>
      {!user && (
        <button onClick={signIn} className="flex gap-2 p-2">
          Login with <FcGoogle className="text-white cursor-pointer text-2xl" />
        </button>
      )}
      {user && (
        <button
          className="w-full flex items-center justify-end gap-1"
          onClick={signOutUser}
        >
          lof out
        </button>
      )}
    </div>
  );
};
