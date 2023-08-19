import React from "react";
// @ts-ignore
import { AuthUser } from "../../presentation/components/auth/index.tsx";
import { UserLogged } from "../../infra/entities/UserLogged";
import { useState } from "react";

export const Welcome = ({ setIsLoggedIn }: any) => {
  const handleNextPage = () => {
    setIsLoggedIn(true);
  };
  const [user, setUser] = useState<UserLogged>({} as UserLogged);

  return (
    <div
      className="h-screen flex flex-col items-center justify-center"
      style={{
        backgroundImage: "url('background_welcome.jpeg')",
        backgroundSize: "cover",
        boxShadow: "#b4dbf1 0px -100px 600px 50px inset",
      }}
    >
      <h1 className="font-extrabold text-transparent text-center mb-2 font-sans text-5xl bg-clip-text bg-gradient-to-r from-teal-300 to-cyan-600">
        Welcome to Finance
      </h1>
      <img src="finance.png" alt="finance_image" />
      <button
        onClick={handleNextPage}
        className="bg-gradient-to-r from-teal-300 to-cyan-600 text-white font-bold py-2 px-4 rounded"
      >
        Go to main
      </button>
      <AuthUser user={user} setUser={setUser} />
    </div>
  );
};
