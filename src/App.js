import { Route, Routes } from "react-router-dom";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import Home from "./components/Home/Home";
import AllBlogPage from "./components/BlogPage/AllBlogPage";
import BlogDetailsPage from "./components/BlogPage/BlogDetailsPage";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import TopBar from "./components/Navbar/TopBar";
import BookingDetails from "./components/BookingDetails/BookingDetails";
import SignIn from "./components/SignIn/SignIn";
import SignUp from "./components/SignUp/SignUp";
import ForgotPassword from "./components/ForgotPassword/ForgotPassword";
import ConfirmPassword from "./components/ForgotPassword/ConfirmPassword";

function App() {
  return (
    <div className="mt-0 pt-0 font-sans">
      <TopBar />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blogs" element={<AllBlogPage />} />
        <Route path="/blog_details/:id" element={<BlogDetailsPage />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/booking-details" element={<BookingDetails />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/forgot" element={<ForgotPassword />} />
        <Route path="/forgot/:id" element={<ConfirmPassword />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
