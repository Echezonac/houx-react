import { updateDoc } from "firebase/firestore"
import { useState, useEffect } from "react"
import { getAuth, updateProfile } from "firebase/auth"
import { useNavigate, Link } from "react-router-dom"
import { db } from "../firebase.config"

const Profile = () => {
	const auth = getAuth()
	const [formData, setFormData] = useState({
		name: auth.currentUser.displayName,
		email: auth.currentUser.email,
	})
	const [changeDetail, setChangeDetail] = useState(false)
	const { name, email } = formData
	const navigate = useNavigate()
	const onLogOut = () => {
		auth.signOut()
		navigate("/")
	}

	const onSubmit = () => {
		alert(123)
	}

  const onChange = (e) => {
		setFormData((prevState) => ({
			...prevState,
			[e.target.id]: e.target.value,
		}))
	}

	return (
		<div className="profile">
			<header className="profileHeader">
				<p className="profileHeader">My Profile</p>
				<button type="button" className="logOut" onClick={onLogOut}>
					LogOut
				</button>
			</header>
			<main>
				<div className="profileDetailsHeader">
					<p className="profileDetailsText">Personal Details</p>
					<p
						className="changePersonalDetails"
						onClick={() => {
							changeDetail && onSubmit()
							setChangeDetail((prevState) => !prevState)
						}}
					>
						{changeDetail ? "Done" : "Change"}
					</p>
				</div>
				<div className="profileCard">
					<form action="">
						<input
							type="text"
							id="name"
							className={!changeDetail ? "profileName" : "profileNameActive"}
							disabled={!changeDetail}
              value={name}
              onChange={onChange}
						/>
					</form>
				</div>
			</main>
		</div>
	)
}

export default Profile
