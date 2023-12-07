import {React, useState} from 'react'
import { Button, Form, FormGroup, Input, Label } from 'reactstrap'
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');


  const submitHandler = (e) =>
  {
    e.preventDefault();
    alert(`Login Successfully User ${email} Password is: ${password}`)
  }
  return (
    <div className='w-full h-full justify-center flex flex-col items-center py-10'>
      <h1>Welcome to Chat AI Bot</h1>
      <div className='w-[98%] mx-2 sm:mx-0 sm:w-[500px] bg-white rounded-lg text-black mt-3 px-4 py-6'>

          <Form onSubmit={(e) => submitHandler(e)}>

          {/* Email */}
          <FormGroup className='flex flex-col '>
              <label  className='px-1 py-1 font-semibold '>Email</label>
              <input className='px-3 py-2 border rounded-lg ms-5 focus:outline-none'
               type="email"
               placeholder='Enter Email'
               required
               value={email}
               onChange={(e) => setEmail(e.target.value)}
              />
          </FormGroup>

          {/* Password */}
          <FormGroup className="flex flex-col">
               <Label for="password" className="px-1 py-1 font-semibold ">
                   Password 
               </Label>
               <div className="d-flex align-items-center">
                   <Input
                       type={showPassword ? "text" : "password"}
                       name="password"
                       id="password"
                       placeholder="Enter Password"
                       className="px-3 py-10 border rounded-lg ms-5 focus:outline-none"
                       required
                       value={password}
                       onChange={(e) => setPassword(e.target.value)}
                       />
                  
               </div>
               <span className="mx-2 cursor-pointer relative bottom-7 left-[93%]" onClick={() => setShowPassword(!showPassword)}>
                       {showPassword ? <FaEyeSlash /> : <FaEye />}
                   </span>
            </FormGroup>

            {/* Button */}
            <Button type="submit" className="py-3 border-0 text-white btn w-100 sign-up-button mt-10" color="info">
                 Login
             </Button>

          </Form>
      </div>
    </div>
  )
}
