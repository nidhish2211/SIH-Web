import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import VillagerLogin from './Login/VillagerLogin'
import Login from './Login'
import Dashboard from './Adminpages/Dashboard'
import WaterQuality from './Adminpages/WaterQuality'
import Alerts from './Adminpages/Alerts'
import Analytics from './Adminpages/Analytics'
import Community from './Adminpages/Community'

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