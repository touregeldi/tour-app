import { BrowserRouter } from 'react-router-dom';
import style from './App.module.scss';
import Navbar from './components/Navbar/Navbar.jsx';
import AppRouter from './routers/AppRouter';
import { Provider } from 'react-redux';
import configureStore from './redux/store/configureStore'
import { tourData } from './data/tourData';
import { addTour } from './redux/actions/tours';

const store = configureStore();
store.subscribe(() => {
  console.log(store.getState())
})
tourData.forEach(tour => store.dispatch(addTour(tour)))

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <div className={style.container}>
          <Navbar/>
          <AppRouter/>
        </div>
      </BrowserRouter>
    </Provider>

    
  );
}

export default App;
