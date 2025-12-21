import { BrowserRouter, Route, Routes } from "react-router"
import Layout from "./layouts/Layout"
import Home from "./pages/Home"
import DoctorsProfile from "./pages/DoctorsProfile"
import MyBookings from "./pages/MyBookings"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Home />}></Route>
          <Route path="doctors-profile/:id" element={<DoctorsProfile />}></Route>
          <Route path="my-bookings" element={<MyBookings />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
