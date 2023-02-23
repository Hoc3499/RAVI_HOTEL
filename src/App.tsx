import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import NewBooking from './pages/booking/newBooking';
import SearchRoom from './pages/booking/searchRoom';
import ShareLayout from './pages/dashboard/ShareLayout';
import Recep from './pages/recep';
import { ConfigProvider } from 'antd';


function App() {
  return (
    <ConfigProvider
      theme={{
        token: {
          fontFamily: 'Lexend',
        },
      }}
    >
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <ShareLayout />
            }
          >
            <Route index element={<NewBooking />} />
            <Route path="/new-booking" element={<NewBooking />} />
            <Route path="/search-room" element={<SearchRoom />} />
            <Route path="recep" element={<Recep />} />
          </Route>

        </Routes>
      </BrowserRouter>
    </ConfigProvider>
  );
}

export default App;
