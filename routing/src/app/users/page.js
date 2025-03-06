"use client";

import { useRouter } from "next/navigation";

export default function UsersPage() {
  const router = useRouter();

  const redirectUser = () => {
    router.push("/");
  };

  return (
    <>
      <h1>I am USERS</h1>
      <button onClick={redirectUser}>Go home</button>
    </>
  );
}
