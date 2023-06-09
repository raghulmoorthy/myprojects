import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import List from "./pages/list/List";
import Single from "./pages/single/Single";
import New from "./pages/new/New";
import{ BrowserRouter,Routes,Route,}from "react-router-dom";
import { productInputs, userInputs,} from "./formSorce";
import "./style/dark.scss";
import { useContext } from "react";
import {DarkModeContext} from "./context/darkModeContext";
import { Orders } from "./pages/orders/Orders";
import { Delivery } from "./pages/delivery/Delivery";
import { Stats } from "./pages/stats/Stats";
import { Notification } from "./pages/notification/Notification";
import { SystemHealth } from "./pages/systemhealth/System Health";
import { Logs } from "./pages/logs/Logs";
import { Setting } from "./pages/setting/Setting";
import { Products } from "./pages/products/Products";





function App () {
  

 const {darkMode} = useContext (DarkModeContext)
  return (
    <div className={darkMode ? "app dark" : "app"}>


    <BrowserRouter>
      <Routes>


        <Route path="/"/>      
          <Route index element={<Home />} />
          <Route path="login" element={<Login />} />
          <Route path="users">
            <Route index element={<List />} />
            <Route path=":userId" element={<Single />} />
            <Route
              path="new"
              element={<New inputs={userInputs} title="Add New User" />}
            />
          </Route>
        
         
          <Route path="products">
          <Route index element={<Products />} />
          <Route path="products" element={<Products/>}/>
          </Route>

    
          <Route path="orders" element={<Orders/>}/>


     <Route path="delivery" element={<Delivery/>}/>
    
          <Route path="stats" element={<Stats/>}/>
  
  
          <Route path="notification" element={<Notification/>}/>
  
          <Route path="system health" element={<SystemHealth/>}/>
  
          <Route path="logs" element={<Logs/>}/>
  
          <Route path="setting" element={<Setting/>}/>
  

          




      </Routes>
    </BrowserRouter>
  </div>
);
}


export default App;