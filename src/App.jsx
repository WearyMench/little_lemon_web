import "./styles/App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Main from "./pages/MainPage";
import BookingPage from "./pages/BookingPage";
import NotFoundPage from "./pages/NotFoundPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/about" element={<Main />} />
          <Route path="/menu" element={<Main />} />
          <Route path="/reservations" element={<Main />} />
          <Route path="/order" element={<Main />} />
          <Route path="/login" element={<Main />} />
          <Route path="/register" element={<Main />} />
          <Route path="/contact" element={<Main />} />
          <Route path="/booking" element={<BookingPage />} />
          <Route path="/*" element={<NotFoundPage />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
