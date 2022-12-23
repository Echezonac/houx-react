import './index.css';
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Explore from './pages/Explore';
import Offers from './pages/Offers';
import Profile from './pages/Profile';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import ForgetPAssword from './pages/ForgetPAssword';
import NoPage from './pages/NoPage';
import Navabr from './components/Navbar/Navabr';

function App() {
  return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<SignIn />} />
				<Route path="/explore" element={<Explore />} />
				<Route path="/offers" element={<Offers />} />
				<Route path="/profile" element={<Profile />} />
				<Route path="/signin" element={<SignIn />} />
				<Route path="/signup" element={<SignUp />} />
				<Route path="/forget" element={<ForgetPAssword />} />
				<Route path="*" element={<NoPage />} />
			</Routes>
			<Navabr />
		</BrowserRouter>
	)
}

export default App;
