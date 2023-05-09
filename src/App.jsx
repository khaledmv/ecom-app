
import './App.css'
import { Footer, Header } from "./components"
import { AllRoutes } from "./routes/AllRoutes"

function App() {

  return (
   <div className="App dark:bg-slate-700">
      <Header/>
      <AllRoutes/>    
      <Footer/>
   </div>
  )
}

export default App
