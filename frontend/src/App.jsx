import Login from "./components/Login";
import LoginPopup from "./components/LoginPopup";
import { AuthProvider } from "./Context/AuthContext";
import HomePage from "./page/HomePage";

import Dash from "./components/DashBoard/Dash";

function App() {
  return (
<AuthProvider>  

    
      {/* <Login /> */}
      {/* <LoginPopup/> */}
      {/* <HomePage/> */}
    <Dash/>
    
</AuthProvider>
  );
}

export default App;
