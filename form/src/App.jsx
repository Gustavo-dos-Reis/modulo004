
import './App.css'
import MyForm from './components/MyForm'

function App() {
 return(
  <div className='App'>
    <h2>Form:</h2>
    <MyForm
      user = {{
        name: "Josias", 
        email:"josias@gmail.com", 
        bio: "Sou um engenheiro", 
        role: "admin",
      }}
    />
  </div>
 )
}

export default App
