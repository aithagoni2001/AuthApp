import { Alert } from "antd"
import axios from "axios"

class Auth{

 

async signUp(inputData){

    try {
        await axios({
            url:"https://node-auth-jwt-w78c.onrender.com/auth/signup",
            method:"POST",
            data:inputData,
        })
        
        return  {success:true}
    } catch (error) {
       
        return {success:false}
    }
   
}

async loginUser(credentials) {
    try {
      const response = await axios({
        url: "https://node-auth-jwt-w78c.onrender.com/auth/login",
        method: "POST",
        data: credentials,
      });
      console.log(response.data);
      return { success: true };
    } catch (error) {
      alert("Login Failed");
      return { success: false };
    }
}
}

export default Auth;