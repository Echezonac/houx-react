import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { ReactComponent as ArrowRightIcon } from "../assets/svg/keyboardArrowRightIcon.svg"
import VisibilityIcon from "../assets/svg/visibilityIcon.svg"
import {getAuth, createUserWithEmailAndPassword, updateProfile} from 'firebase/auth'
// import {db} from '../firebase.config'


const SignUp = () => {
	const [showPassword, setShowPassword] = useState(false)
	const [formData, setFormData] = useState({
    name:'',
		email: "",
		password: "",
	})
	const { email, name, password } = formData
	const navigate = useNavigate()
	const onChange = (e) => {
		setFormData((prevState) => ({
			...prevState,
			[e.target.id]: e.target.value,
		}))
	}
	 const onSubmit = async (e) => {
		e.preventDefault()
		try {
			const auth =getAuth()
			const userCredential = await createUserWithEmailAndPassword(auth, email, password)
			const user = userCredential.user
			updateProfile(auth.currentUser, {
				displayName:name,
			})
			navigate('/explore')
			
		} catch (error) {
			console.log(error)
		}
	 }

	return (
		<>
			<div className="pageContainer">
				<header>
					<p className="pageHeader">Create Account</p>
				</header>
				<main>
					<form onSubmit={onSubmit}>
						<input
							type="text"
							className="nameInput"
							placeholder="Name"
							id="name"
							value={name}
							onChange={onChange}
						/>
						<input
							type="email"
							className="emailInput"
							placeholder="Email"
							id="email"
							value={email}
							onChange={onChange}
						/>
						<div className="passwordInputDiv">
							<input
								type={showPassword ? "text" : "password"}
								className="passwordInput"
								placeholder="Password"
								id="password"
								value={password}
								onChange={onChange}
							/>
							<img
								src={VisibilityIcon}
								alt="showpassword"
								className="showpassword"
								onClick={() => setShowPassword((prevState) => !prevState)}
							/>
						</div>
						<Link to="/forget" className="forgotPasswordLink">
							Forget Password
						</Link>
						<div className="signUpBar d-flex justify-content-between">
							<p className="signUpText">Sign Up</p>
							<button className="signUpButton">
								<ArrowRightIcon fill="#ffffff" width="34px" height="34px" />
							</button>
						</div>
					</form>
					{/* Google OAuth */}
					<Link to="/signin" className="registerLink">
						Sign In Instead``
					</Link>
				</main>
			</div>
		</>
	)
}

export default SignUp
