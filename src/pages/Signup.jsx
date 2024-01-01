import React, { useState } from 'react'

const Signup = () => {

  let [username, setusername] = useState("")
  let [email, setemail] = useState("")
  let [password, setpassword] = useState()
    
  

  

  const handlesubmit = (e) => {
    e.preventDefault();

    let user = {
      username: username,
      email: email,
      password: password
    };
    console.log(user);
  }
  return (
    <div>
      <form onSubmit={handlesubmit}>
        <input type="text" placeholder='username' onChange={(e) => setusername(e.target.value)}/>
        <br />
        <input type="text" placeholder='email' onChange={(e) => setemail(e.target.value)} />
        <br />
        <input type="text" placeholder='password' onChange={(e) => setpassword(e.target.value)} />
        <br />
        <input type="submit" value={"signup"} />
      </form>
    </div>
  )
}

export default Signup