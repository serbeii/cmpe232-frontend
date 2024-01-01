import {  useState } from "react";
import axios from "axios";
function Register() {
  
    const [employeename, setEmployeename] = useState("");
    const [email, setEmail] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    async function save(event) {
        event.preventDefault();
        try {
          await axios.post("http://localhost:8085/home/register", {
          username: username,
          password: password,
          });
          alert("Employee Registation Successfully");
        } catch (err) {
          alert(err);
        }
      }
  
    return (
    <div>
    <div className="container mt-4" >
    <div className="card">
            <h1>Student Registation</h1>
    
    <form>
        <div className="form-group">
          <label>username</label>
          <input type="text"  class="form-control" id="username" placeholder="Enter Name"
          
          value={username}
          onChange={(event) => {
            setUsername(event.target.value);
          }}
          />
        </div>
        <div className="form-group">
            <label>password</label>
            <input type="password"  class="form-control" id="password" placeholder="Enter password"
            
            value={password}
            onChange={(event) => {
              setPassword(event.target.value);
            }}
            
            />
          </div>
        <button type="submit" class="btn btn-primary mt-4" onClick={save} >Save</button>
       
      </form>
    </div>
    </div>
     </div>
    );
  }
  
  export default Register;
