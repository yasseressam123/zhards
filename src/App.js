import './App.css';
import SideMenu from './components/side-menu/side-menu';
import MainApp from './components/main-app/main-app';
import 'bootstrap/dist/css/bootstrap.min.css';
import MobileHeader from './components/mobile-header/mobile-header';



function App() {
  return (
    <div>
      <div className='d-lg-none'>
        <MobileHeader/>
      </div>
      <div className='app'>
        <div className='app-side-menu'>
          <SideMenu/>
        </div>
        <div className='app-main'>
          <MainApp/>
        </div>
      </div>
    </div>
  );
}

export default App;
