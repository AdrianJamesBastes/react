import { useState } from 'react'
import globeLogo from './assets/Globe_Logo.jpg'
import './App.css'

function App() {
  // Placeholder for file names if you want to show what was selected later
  const [monitorFile1, setMonitorFile1] = useState(null);
  const [monitorFile2, setMonitorFile2] = useState(null);
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
                <span className="file-msg">
                  {monitorFile1 ? monitorFile1.name : "Drag & drop or click"}
                </span>
                <input
                  title=''
                  className="file-input"
                  type="file"
                  accept=".csv,text/csv"
                  onChange={(e) => {
                    const file = e.target.files[0];

                    if (file && file.type !== "text/csv") {
                      alert("Please upload a valid CSV file.");
                      return;
                    }

                    setMonitorFile1(file);
                  }}
                />
              </div>
            </div>

            <div className="upload-group">
              <label className="input-label">UDM CSV</label>
              <div className="file-drop-area">
                <span className="file-msg">
                  {monitorFile2 ? monitorFile2.name : "Drag & drop or click"}
                </span>
                <input
                  className="file-input"
                  title=''
                  type="file"
                  accept=".csv,text/csv"
                  onChange={(e) => {
                    const file = e.target.files[0];

                    if (file && file.type !== "text/csv") {
                      alert("Please upload a valid CSV file.");
                      return;
                    }

                    setMonitorFile2(file);
                  }}
                />
              </div>
            </div>

            <div className="action-area">
              <button className="btn primary-filled full-width" 
                onClick={() => {
                  if (!isCSVFile(monitorFile1) || !isCSVFile(monitorFile2)) {
                    alert("There is seems an invalid  input. Please try again!!");
                    return;
                  }
                  alert("Files are valid, proceed with scan");
                }}
              >Scan Files</button>
            </div>
          </div>
        </aside>

        {/* Output Section */}
        <section className="content-area">
          <div className="output-card">
            <div className="output-header">
              <h3>Output:</h3>
              <input className='search-bar' type='text' placeholder='Search'/>
            </div>
            <div className="output-box">
              <p className="placeholder-text">Scan results will appear here...</p>
            </div>
          </div>
        </section>

      </main>
    </div>
  )

  function isCSVFile(file) {
    return file && (file.type === "text/csv" || file.name.endsWith(".csv"));
  }
}

export default App