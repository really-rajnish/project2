import { useState } from 'react'
import './App.css'

function App() {
  return (
    <div className="page">
      <div className="id-card">
        <div className="header">
          <h3>KL UNIVERSITY</h3>
        </div>

        <div className="details">
          <p className="name">Rajnish Ranjan</p>
          <p className="course">B.Tech CSE</p>
          <p className="year">First Year</p>
          <p className="id">ID: 2500032608</p>
        </div>

        <div className="footer">
          <p>Valid Till: 2029</p>
        </div>
      </div>
    </div>
  );
}

export default App;