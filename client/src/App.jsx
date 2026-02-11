import { useState } from 'react'
import globeLogo from './assets/Globe_Logo.jpg'
import './App.css'

function App() {
  // Placeholder for file names if you want to show what was selected later
  const [monitorFile, setMonitorFile] = useState(null);
  const [udmFile, setUdmFile] = useState(null);

  return (
    <div className="app-container">
      {/* Upper Panel - Now a Header */}
      <header className="top-bar">
        <div className="logo-section">
          <img className="globe-logo" src={globeLogo} alt="Globe Logo" />
        </div>
        <button className="btn primary-outline">Export File</button>
      </header>

      {/* Main Content Area */}
      <main className="main-layout">
        
        {/* Sidebar / Upload Section */}
        <aside className="sidebar">
          <div className="upload-container">
            <h3>Data Input</h3>
            
            <div className="upload-group">
              <label className="input-label">Monitoring CSV</label>
              <div className="file-drop-area">
                <span className="file-msg">Drag & drop or click</span>
                <input type="file" className="file-input" onChange={(e) => setMonitorFile(e.target.files[0])} />
              </div>
            </div>

            <div className="upload-group">
              <label className="input-label">UDM CSV</label>
              <div className="file-drop-area">
                <span className="file-msg">Drag & drop or click</span>
                <input type="file" className="file-input" onChange={(e) => setUdmFile(e.target.files[0])} />
              </div>
            </div>

            <div className="action-area">
              <button className="btn primary-filled full-width">Scan Files</button>
            </div>
          </div>
        </aside>

        {/* Output Section */}
        <section className="content-area">
          <div className="output-card">
            <div className="output-header">
              <h3>Output:</h3>
            </div>
            <div className="output-box">
              <p className="placeholder-text">Scan results will appear here...</p>
            </div>
          </div>
        </section>

      </main>
    </div>
  )
}

export default App