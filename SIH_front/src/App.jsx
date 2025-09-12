import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import VillagerLogin from './Login/VillagerLogin'
import Login from './Login'
import Dashboard from './pages/Dashboard'

const App = () => {
  return (
    <Router>
      <Routes>
        {/* <Route path='/' element={<Login />} /> */}
        <Route path='/' element={<Dashboard />} />
        {/* <Route path='/login/resident' element={<VillagerLogin />} /> */}
      </Routes>
    </Router>
  )
}

export default App