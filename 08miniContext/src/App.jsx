
import './App.css'
import Login from './components/Login'
import UserContextProvider from './context/UserContextProvider'
import Profile from './components/Profile'
function App() {
  

  return (
    <UserContextProvider>
     <h1>REact with Chai and share is impoetant</h1>
     <Login/>
     <Profile/>
    </UserContextProvider>
  )
}

export default App
