import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';

function Login(props) {
	const [ email, setEmail ] = useState('');
	const [ password, setPassword ] = useState('');

    const handleLoginuser=()=> {
        props.handlelogin(email, password);
    }

	return (
		<Form className="my-3">
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
			<Button onClick={handleLoginuser} variant="primary">
				Login
			</Button>
		</Form>
	);
}

export default Login;
