import Home from "./pages/Home";
import MainHeader from "./components/MainHeader/MainHeader";

function App(){
  return (
  <div className='App'>
    <MainHeader />
    <main>
      <Home/>
    </main>

  </div> 
  )
  
}
export default App;