import React, { useContext } from "react";
import { fetchData } from "../../main";
import '../../App.css'
import UserContext from "../../context/userContext.js";
import { useNavigate } from "react-router-dom";

const RegisterForm = () => {
  const navigate=useNavigate();

  const {user, updateUser} = useContext(UserContext);

  const {username, password, password2} = user;  

  const onChange = (e) => updateUser(e.target.name, e.target.value)

  // const [user, setUser] = useState({
  //   username:'',
  //   password:'',
  //   password2:'',
  // });

  // const {username, password, password2} = user;  

  // const onChange = (e) => setUser({...user,[e.target.name]:e.target.value});

  const handleSubmit = (e) => {
    e.preventDefault();

    fetchData("/user/register", 
      {
       username,
       password,
       password2
      }, 
      "POST")
    .then((data) => {
      if(!data.message) {
        navigate("/profile");
        console.log(data)
      }
    })  
    .catch((error) => {
      console.log(error)
    })

  }

  return (
    <div className="register-form-container">
      <h2>Registration</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="userId">User ID</label>
          <input
            type="text"
            id="username"
            name="username"
            className="form-control"
            placeholder="Enter User ID"
            onChange={onChange}
            value={username}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            className="form-control"
            placeholder="Enter Password"
            onChange={onChange}
            value={password}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="confirmPassword">Confirm Password</label>
          <input
            type="password"
            id="password2"
            name="password2"
            className="form-control"
            placeholder="Confirm Password"
            onChange={onChange}
            value={password2}
            required
          />
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    </div>
  );
};

export default RegisterForm;