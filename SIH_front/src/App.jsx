import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import VillagerLogin from './Login/VillagerLogin'
import Login from './Login'
import Dashboard from './pages/Dashboard'
import WaterQuality from './pages/WaterQuality'

const App = () => {
  return (
    <Router>
      <Routes>
        {/* <Route path='/' element={<Login />} /> */}
        <Route path='/' element={<Dashboard />} />
        {/* <Route path='/login/resident' element={<VillagerLogin />} /> */}
        <Route path='/WaterQuality' element={<WaterQuality />} />
      </Routes>
    </Router>
  )
}

export default App