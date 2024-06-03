import "./App.css"
import Square from "./component/Square/Square"
import Profile from "./component/Profil/Profil"

export default function App() {

  return (
    <div className="App">
      <Square />
      <h1>Amazing scientists</h1>
      <Profile/>
      <Profile/>
      <Profile/>
    </div>
  )
}