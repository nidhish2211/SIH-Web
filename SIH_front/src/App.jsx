import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import VillagerLogin from './Login/VillagerLogin'
import Login from './Login'
import Dashboard from './pages/Dashboard'
import WaterQuality from './pages/WaterQuality'
import Alerts from './pages/Alerts'
import Analytics from './pages/Analytics'
import Community from './pages/Community'

const App = () => {
  return (
    <Router>
      <Routes>
        {/* <Route path='/' element={<Login />} /> */}
        <Route path='/' element={<Dashboard />} />
        {/* <Route path='/login/resident' element={<VillagerLogin />} /> */}
        <Route path='/WaterQuality' element={<WaterQuality />} />
        <Route path='/Alerts' element={<Alerts />} />
        <Route path='/Analytics' element={<Analytics />} />
        <Route path='/Community' element={<Community />} />
      </Routes>
    </Router>
  )
}

export default App