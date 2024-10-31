"use client"
import { signIn } from "next-auth/react";
import { useState } from "react";
import { useRouter } from "next/navigation";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

    const router=useRouter();

  const handleCredentialsSignIn = async (e: React.FormEvent) => {
    e.preventDefault();
    const result = await signIn("credentials", {
      redirect: false,
      email,
      password,
    });

    if (!result?.ok) {
      setError("Invalid email or password");
    } else {
      // Optionally, redirect to dashboard after successful sign-in
        router.push("/dashboard");
    }
  };

  return (
    <div>
      <form onSubmit={handleCredentialsSignIn}>
        <input
          type="text"
          name="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Sign in with Credentials</button>
        {error && <p>{error}</p>}
      </form>

      <button onClick={() => signIn("google")}>
        Sign in with Google
      </button>
    </div>
  );
};

export default Login;
