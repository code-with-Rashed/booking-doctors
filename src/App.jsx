import { BrowserRouter, Route, Routes } from "react-router"
import Layout from "./layouts/Layout"
import Home from "./pages/Home"
import DoctorsProfile from "./pages/DoctorsProfile"
import MyBookings from "./pages/MyBookings"
import NotFound from "./pages/NotFound"
import BASE_URL from "./utilities/baseUrl"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={BASE_URL} element={<Layout />}>
          <Route path={BASE_URL} element={<Home />}></Route>
          <Route path={BASE_URL + "/doctors-profile/:id"} element={<DoctorsProfile />}></Route>
          <Route path={BASE_URL + "/my-bookings"} element={<MyBookings />}></Route>
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
