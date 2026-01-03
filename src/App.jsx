
import MainHeader from './components/Header/MainHeader';
import Home from "./Pages/Home";
import MainFooter from './components/mainFooter/Mainfooter';




function App(){
  return(
    <div className='App'>
      <MainHeader/>
      <main>
        <Home/>
        
      </main>
      <MainFooter/>

    </div>
  )
}

export default App;
