import { useNavigate, useLocation } from "react-router-dom"
import {ReactComponent as ExploreIcon} from '../../assets/svg/exploreIcon.svg'
import { ReactComponent as OfferIcon } from "../../assets/svg/localOfferIcon.svg"
import { ReactComponent as ProfileIcon } from "../../assets/svg/personIcon.svg"

const Navabr = () => {

  const navigate = useNavigate()
  const location = useLocation()
  const pathMatchRoute = (route) => {
    if(route === location.pathname){
        return true
    }
  }

  return (
		<footer className="navbar">
			<nav className="navbarNav">
				<ul className="navbarListItems">
					<li className="navbarListItem">
						<ExploreIcon
							onClick={() => navigate("/")}
							fill={pathMatchRoute("/") ? "#5F8D4E" : "#2c2c2c"}
							width={36}
							height={36}
						/>
					</li>
					<li className="navbarListItem">
						<OfferIcon
							onClick={() => navigate("/offers")}
							fill={pathMatchRoute("/offers") ? "#5F8D4E" : "#2c2c2c"}
							width={36}
							height={36}
						/>
					</li>
					<li className="navbarListItem">
						<ProfileIcon
							onClick={() => navigate("/profile")}
							fill={pathMatchRoute("/profile") ? "#5F8D4E" : "#2c2c2c"}
							width={36}
							height={36}
						/>
					</li>
				</ul>
			</nav>
		</footer>
	)
}

export default Navabr