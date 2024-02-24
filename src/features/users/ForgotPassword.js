import React, { useState } from "react";
import { auth } from "../../config/firebase";
import { sendPasswordResetEmail } from "firebase/auth";

const ForgotPassword = () => {
	const [resetPassword, setResetPassword] = useState("");
	const handleResetPassword = async (e) => {
		e.preventDefault();
		try {
			console.log(resetPassword);
			await sendPasswordResetEmail(auth, resetPassword);
		} catch (error) {
			console.log(error);
		}
	};

	return (
		<>
			<div className="container">
				<form className="form-forgot-password">
					<h4 className="section-heading text-center mb-4">Reset Password</h4>
					<div className="form-group">
						<input
							type="email"
							name="resetPassword"
							value={resetPassword}
							className="form-control"
							placeholder="Email..."
							onChange={(e) => setResetPassword(e.target.value)}
						/>
					</div>
					<div className="form-group text-center my-3">
						<button
							type="button"
							className="btn-comm"
							onClick={handleResetPassword}
						>
							Update
						</button>
					</div>
				</form>
			</div>
		</>
	);
};

export default ForgotPassword;
