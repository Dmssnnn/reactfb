import React, { useState } from 'react';
import Input from './atoms/input';
import Button from './atoms/buttonClick';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';


const LogInForm = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const handleAddData = () => {
    const storedEmail = localStorage.getItem("email");
    const storedPassword = localStorage.getItem("password");

    
    if(email === "" || password === "") {
      alert("Fill The Gaps")
    }else if(email === storedEmail && password === storedPassword ){
      alert("success")
      navigate("/FacebookPost")
    }else {
      alert("not success")
    }

  }
  return (
    <div className='loginDiv'>
      <div className='RightSide'>
        <Input type="email" value={email}  onChange={(e)=> {setEmail(e.target.value)}} placeHolder="ელფოსტა ან ტელეფონის ნომერი" width="80%" height={50} />
        <Input  type="password" value={password} onChange={(e) => {setPassword(e.target.value)}} placeHolder="პაროლი" width="80%" height={50} />
        <Button onClick={handleAddData} Value="შესვლა" width="80%" height={50} backgroundColor="blue" /> 
        <Link className='createAccLink' to={"/CreateAcc"}> <Button  Value="ახალი ანგარიშის შექმნა" width="60%" height={50} backgroundColor="rgb(38, 158, 64)" /> </Link>
      </div>
    </div>
  );
}

export default LogInForm;
