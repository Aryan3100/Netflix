import logo from './bg.jpg';
import './App.css';
import Login from './component/Login';
import Header from './component/Header';
import Main from './component/Main';
import Banner from './component/Banner';
 
import { Route, Routes } from 'react-router-dom';
import Cards from './component/Cards';
import List from './component/List';

function App() {
  return (
   <>
    <Routes>
    <Route path='/' element={<Home/>}></Route>
     <Route path='/login' element={<Log/>}></Route>
     <Route path='*' element={<div>page not found</div>}></Route>
     <Route path='/main' element={<Mai/>}></Route>
    </Routes>
   </>
   
  );
}
 function Home(){
      return <div className='back' >
      <Header></Header>
      <Banner></Banner>
      </div>
    }
    function Log(){
      return <div className='back'>
        <Login/>
      </div>
    }
    function Mai(){
     return <div className='name' >
    
      <Main></Main>
      
   
      </div>
    }
export default App;



