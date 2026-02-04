import React, { useContext, useState } from 'react'
import Login from './components/Auth/Login.jsx'
import  { useEffect } from 'react'
import EmployeeDashboard from './components/Dashboard/EmployeeDashboard.jsx'
import AdminDashboard from './components/Dashboard/AdminDashboard.jsx'
import { getLocalStorage, setLocalStorage } from './utils/localStorage.jsx'
import { AuthContext } from './context/AuthProvider.jsx'
const App = () => {
  const [user , setUser] = useState(null)
 const  handleLogin=(email,password)=>{
    if(email==="admin@gmail.com" && password ==="123"){
      setUser("admin")
    }
    else if(email==="user@gmail.com"&& password ==="123") {
       setUser("user")
      
    }
    else{
      console.log("invaild");
      
    }
  }

  const data = useContext(AuthContext);
  console.log(data);
  
  
  return (
    <>
    {!user?<Login handleLogin={handleLogin} />:'' }
    {user === "admin" ? <AdminDashboard/> :<EmployeeDashboard/>}
    </>
  )
}

export default App
