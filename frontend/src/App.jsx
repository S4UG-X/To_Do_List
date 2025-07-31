import Login from "./components/Login";
import { AuthProvider } from "./Context/AuthContext";

function App() {
  return (
<AuthProvider>  

    
      <Login />
    
</AuthProvider>
  );
}

export default App;
