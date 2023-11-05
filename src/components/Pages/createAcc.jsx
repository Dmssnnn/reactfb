import React from 'react'
import FbText from './FbText'
import Input from './atoms/input'
import Button from './atoms/buttonClick'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom';

const CreateAcc = () => {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleAllRegData = () => {
    if (name.length < 6 || name === "") {
      alert("Name length must be at least 6 characters.");
    } else if (surname.length < 5 || surname === "") {
      alert("Surname length must be at least 5 characters.");
    } else if (email === "") {
      alert("Email field cannot be empty.");
    } else if (password.length < 6 || password === "") {
      alert("Password length must be at least 6 characters.");
    } else if (password !== confirmPassword) {
      alert("Passwords do not match.");
    } else {
      
      localStorage.setItem("name", name);
      localStorage.setItem("surname", surname);
      localStorage.setItem("email", email);
      localStorage.setItem("password", password);
      localStorage.setItem("confirmPassword", confirmPassword);
  
      alert("You created an account successfully. Your information is in local storage.");
      navigate("/");
    }
  };

  return (
    <div className='RegContainer'>
        <div className='leftSide'><FbText /></div>
        <div className='RightSideReg'>
        <Input type="text"  Value={name} onChange={(e) => {setName(e.target.value)}}  placeHolder="სახელი" width="80%" height={100} />
        <Input type="text"  Value = {surname} onChange={(e) => {setSurname(e.target.value)}}  placeHolder="გვარი" width="80%" height={100} />
        <Input type="email" Value = {email}  onChange={(e) => {setEmail(e.target.value)}}  placeHolder="ელფოსტა ან ტელეფონის ნომერი" width="80%" height={100} />
        <Input  type="password" Value = {password} onChange={(e) => {setPassword(e.target.value)}}  placeHolder="პაროლი" width="80%" height={100} />
      <Input  type="password" value = {confirmPassword} onChange={(e) => {setConfirmPassword(e.target.value)}}  placeHolder="გაიმეორეთ პაროლი" width="80%" height={100} />
        <Button  onClick={handleAllRegData} Value="შესვლა" width="100%" height={300} backgroundColor="blue"  /> 
        <Link to="/" style={{width : "100%"}}><Button   Value="დარეგისტრირებული ვარ" width="100%" height={50} backgroundColor="green" /></Link>
        
        </div>
    </div>
  )
}

export default CreateAcc