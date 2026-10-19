import { useRef, useState } from "react";

export default function LoginForm() {
  const usernameRef = useRef(null);
  const passwordRef = useRef(null);

  const [user, setUser] = useState(null);

  function handleSubmit(event) {
    event.preventDefault();

    setUser({
      username: usernameRef.current.value,
      password: passwordRef.current.value,
    });
  }

  return (
    <div className="mx-auto max-w-md rounded-xl bg-white p-6 shadow-lg">
      <h1 className="mb-6 text-2xl font-bold">Login Form</h1>

      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          ref={usernameRef}
          className="w-full rounded border p-3"
          type="text"
          placeholder="Username"
          required
        />

        <input
          ref={passwordRef}
          className="w-full rounded border p-3"
          type="password"
          placeholder="Password"
          required
        />

        <button
          className="w-full rounded bg-blue-600 p-3 text-white"
          type="submit"
        >
          Login
        </button>
      </form>

      {user && (
        <div className="mt-5 rounded bg-green-50 p-4">
          <h2 className="mb-2 font-bold">Submitted Information</h2>
          <p>Username: {user.username}</p>
          <p>Password: {user.password}</p>
        </div>
      )}
    </div>
  );
}