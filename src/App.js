import Add from './Components/Add';
import store from './Store';
import { Provider } from 'react-redux';
import Cards from './Components/Cards';
import {Route,Routes} from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Header from './Components/Header';
function App() {
  return <>
  <ToastContainer
position="top-right"
autoClose={2000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
/>

  <Header/>
    <Provider store={store}>
      <Routes>
         <Route path="/" element={<Add/>}/>
         <Route path="/Cards" element={<Cards/>}/>
      </Routes>

    </Provider>
    <ToastContainer />
    </>
  
  
}

export default App;
