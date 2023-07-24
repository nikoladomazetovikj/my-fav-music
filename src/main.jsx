import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import {AppProvider} from "./context/AppContext.jsx";
import {ProfileProvider} from "./context/ProfileContext.jsx";


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <AppProvider>
      <ProfileProvider>
          <App />
      </ProfileProvider>
   </AppProvider>
  </React.StrictMode>,
)
