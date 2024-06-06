import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { useEffect, useState } from 'react'
import Home from './component/Home/home'
import Login from './component/Home/login'
import './App.css'

useEffect(() => {
  const user = JSON.parse(localStorage.getItem('user'))

  if(!user || !user.token){
    setLoggedIn(false)
    return
  }

  fetch('http://localhost:3080/verify',{
    method:'POST',
    headers:{
      'jwt-token':user.token,
    },
  })
  .then((r) => r.json())
  .then((r) => {
    setLoggedIn('success' === r.message)
    setEmail(user.email || '')
  })
}, [])
function App() {
  const [loggedIn, setLoggedIn] = useState(false)
  const [email, setEmail] = useState('')

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home email={email} loggedIn={loggedIn} setLoggedIn={setLoggedIn} />} />
          <Route path="/login" element={<Login setLoggedIn={setLoggedIn} setEmail={setEmail} />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App