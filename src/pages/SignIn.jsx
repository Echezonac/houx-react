import { useState } from "react"
import { Link, useNavigate  } from "react-router-dom"
import {ReactComponent as ArrowRightIcon } from '../assets/svg/keyboardArrowRightIcon.svg'
import VisibilityIcon from '../assets/svg/visibilityIcon.svg'
import { to } from './../../node_modules/@firebase/app-compat/dist/esm/index.esm2017';

const SignIn = () => {

  const [showPassword, setShowPassword ] = useState(false)
  const [formData, setFormData] = useState({
    email:'',
    password:''
  })
  const {email, password} = formData
  const navigate = useNavigate()
  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.id]:e.target.value
    }))

  }

  return (
		<>
			<div className="pageContainer">
				<header>
					<p className="pageHeader">Welcome Back</p>
				</header>
				<main>
					<form>
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
						<div className="signInBar d-flex justify-content-between">
							<p className="signInText">Sign In</p>
							<button className="signInButton">
								<ArrowRightIcon fill="#ffffff" width="34px" height="34px" />
							</button>
						</div>
					</form>
					{/* Google OAuth */}
					<Link to="/signup" className="registerLink">
						Sign Up Instead
					</Link>
				</main>
			</div>
		</>
	)
}

export default SignIn