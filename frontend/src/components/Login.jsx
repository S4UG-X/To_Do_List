import { useEffect, useState, useContext } from "react";
import { AuthContext } from "../Context/AuthContext";

function Login() {
  const {isLoggedIn, setIsLoggedIn} =  useContext(AuthContext);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [tasks, setTasks] = useState(null);


  const handleLogin = async (e) => {
    e.preventDefault();

    const res = await fetch("http://localhost:8080/api/login", {
      method: "POST",
      credentials: "include",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username, password }),
    });

    if (res.ok) setIsLoggedIn(true)
  };

  useEffect(() => {
    if (isLoggedIn) {
      fetch("http://localhost:8080/api/tasks", { credentials: "include" })
        .then((res) => res.json())
        .then(setTasks);
    }
  }, [isLoggedIn]);

  return (
    <div>
      {!tasks ? (
        <form onSubmit={handleLogin}>
          <input 
            value={username} 
            onChange={(e) => setUsername(e.target.value)} 
            placeholder="Username" 
          />
          <input 
            type="password" 
            value={password} 
            onChange={(e) => setPassword(e.target.value)} 
            placeholder="Password" 
          />
          <button type="submit">Login</button>
        </form>
      ) : (
        <div>
          <h2>Your Tasks</h2>
          <ul>
            {tasks.map((t) => (
              <li key={t._id}>{t.title}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );

}
export default Login;
