import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';

function Signup(props) {
	const [ fullName, setFullName ] = useState('');
	const [ email, setEmail ] = useState('');
	const [ password, setPassword ] = useState('');
	const [ gender, setGender ] = useState('');
	const [ phone, setPhone ] = useState('');
	const [ msg, setMsg ] = useState('');
	const [ color, setColor ] = useState('');

	const handlePassword = (e) => {
		if (!password.localeCompare(e.target.value)) {
			setMsg('Password Matched');
			setColor('success');
		} else {
			setMsg('Password not Matched');
			setColor('danger');
		}
	};

	const handleChange = (e) => {
		console.log(e.target.value);
		if (e.target.value === "Male") {
			setGender("Male");
		} else {
			setGender("Female");
		}
	};

    const handleSignupuser=()=> {
        props.handleSignup(email, password, fullName, gender, phone);
    }


	return (
		<Form>
			<Form.Group controlId="formBasicFullName">
				<Form.Label>Full Name</Form.Label>
				<Form.Control
					value={fullName}
					onChange={(e) => setFullName(e.target.value)}
					type="text"
					placeholder="Enter Full Name"
				/>
			</Form.Group>
			
			<Form.Group controlId="formBasicPhone">
				<Form.Label>Phone</Form.Label>
				<Form.Control
					value={phone}
					onChange={(e) => setPhone(e.target.value)}
					type="number"
					placeholder="Phone Number"
				/>
			</Form.Group>

			<Form.Group>
				<Form.Label>Gender</Form.Label>
				<Form.Check
					value="Male"
					onChange={handleChange}
					type="radio"
					label="Male"
					aria-label="radio 1"
					checked={gender === "Male"}
				/>
				<Form.Check
					value="Female"
					onChange={handleChange}
					type="radio"
					label="Female"
					aria-label="radio 2"
					checked={gender === "Female"}
				/>
			</Form.Group>

			<Form.Group controlId="formBasicEmail">
				<Form.Label>Email address</Form.Label>
				<Form.Control
					value={email}
					onChange={(e) => setEmail(e.target.value)}
					type="email"
					placeholder="Enter email"
				/>
			</Form.Group>

			<Form.Group controlId="formBasicPassword">
				<Form.Label>Password</Form.Label>
				<Form.Control
					value={password}
					onChange={(e) => setPassword(e.target.value)}
					type="password"
					placeholder="Password"
				/>
			</Form.Group>

			<Form.Group controlId="confirmformBasicPassword">
				<Form.Label>Confirm Password</Form.Label>
				<Form.Control onChange={handlePassword} type="password" placeholder="Confirm Password" />
				<Form.Text className={`text-${color}`}>{msg}</Form.Text>
			</Form.Group>

			<Button onClick={handleSignupuser} variant="primary" >
				Signup
			</Button>
		</Form>
	);
}

export default Signup;
