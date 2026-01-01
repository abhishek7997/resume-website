import Home from "./components/Home"
import SideBar from "./components/SideBar"

function App() {
  return (
    <div className="flex flex-row min-h-screen">
      <SideBar />
      <Home />
    </div>
  )
}

export default App
