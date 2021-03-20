import React, { useState } from 'react';
import { Button, Form, Spinner } from 'react-bootstrap';

function Login({handlelogin, load}) {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

	const handleLoginuser = () => {
		handlelogin(email, password);
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
			<Button disabled={load} onClick={handleLoginuser} variant="primary">
				{load && <Spinner
					as="span"
					animation="grow"
					size="sm"
					role="status"
					aria-hidden="true"
				/>}Login
			</Button>
		</Form>
	);
}

export default Login;
