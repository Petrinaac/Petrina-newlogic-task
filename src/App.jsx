import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Order from '../src/Pages/Order'
import Invoice from '../src/Pages/Invoice'
import User from '../src/Pages/User'
import './index.css'

function App() {
  return (
    <div className='App'>
      <div className='wrapper'>
      <Router>
        <div className='wrapper'>
          <Routes>
            <Route path="/" element={<Order />}></Route>
            <Route path="/invoice" element={<Invoice />}></Route>
            <Route path="/user" element={<User />}></Route>
          </Routes>
        </div>
      </Router>
    </div>
    </div>
  )
}

export default App
