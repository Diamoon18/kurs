import React, { useContext, useState } from 'react';
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { AuthContext } from '../contex/contexAuth';

const Login = () => {
  const [inputs, setInputs] = useState({
    nickname: "",
    password: "",
  });

  const [err, setError] = useState(null);

  const navigate = useNavigate();
  const { login } = useContext(AuthContext);

  const handleChange = (e) => {
    setInputs((prev) => ({...prev, [e.target.name]: e.target.value}));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      //await axios.post("/api/auth/login", inputs);
      await login(inputs);
      navigate("/");
    }catch(err){
      setError(err.response.data);
    }
  };

  return (
    <div className="auth">
      <h1>Zaloguj się do Kurs.</h1>
      <form>
        <input required type="text" placeholder="username.." name="nickname" onChange={handleChange}/>
        <input required type="password" placeholder="hasło.." name="password" onChange={handleChange}/>
        <button onClick={handleSubmit}>Zaloguj się</button>
        {err && <p>{err}</p>}
        <span>Nie jesteś jeszcze członkiem? <Link to="/register">Zarejestruj się</Link></span>
      </form>
    </div>
  )
}

export default Login