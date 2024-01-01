import {  useState } from "react";
import { useNavigate } from 'react-router-dom';
import axios from "axios";
function Login() {
   
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();
    async function login(event) {
        event.preventDefault();
        try {
          await axios.post("http://localhost:8085/api/v1/employee/login", {
            username: username,
            password: password,
            }).then((res) => 
            {
             console.log(res.data);
             
             if (res.data.message == "Username not exits") 
             {
               alert("Username not exits");
             } 
             else if(res.data.message == "Login Success")
             { 
                
                navigate('/home');
             } 
              else 
             { 
                alert("Incorrect Username and Password not match");
             }
          }, fail => {
           console.error(fail); // Error!
  });
        }
 
         catch (err) {
          alert(err);
        }
      
      }
    return (
       <div>
            <div className="container">
            <div className="row">
                <h2>Login</h2>
             <hr/>
             </div>
             <div className="row">
             <div className="col-sm-6">
 
            <form>
        <div className="form-group">
          <label>Username</label>
          <input type="username"  class="form-control" id="username" placeholder="Enter Name"
          
          value={username}
          onChange={(event) => {
            setUsername(event.target.value);
          }}
          
          />
        </div>
        <div className="form-group">
            <label>password</label>
            <input type="password"  class="form-control" id="password" placeholder="Enter Fee"
            
            value={password}
            onChange={(event) => {
              setPassword(event.target.value);
            }}
            
            />
          </div>
                  <button type="submit" class="btn btn-primary" onClick={login} >Login</button>
              </form>
            </div>
            </div>
            </div>
     </div>
    );
  }
  
  export default Login;
