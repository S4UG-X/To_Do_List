import Login from "./components/Login";
import LoginPopup from "./components/LoginPopup";
import { AuthProvider } from "./Context/AuthContext";
import HomePage from "./page/HomePage";

function App() {
  return (
<AuthProvider>  

    
      {/* <Login /> */}
      {/* <LoginPopup/> */}
      <HomePage/>
    
</AuthProvider>
  );
}

export default App;
