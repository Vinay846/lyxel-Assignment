import React, { useState, useEffect } from 'react';
import Login from './Login';
import Profile from './Profile';
import Signup from './Signup';
import { Container } from 'reactstrap';
import fire from '../firebase';
import { Button, Form } from 'react-bootstrap';


function App() {
	const [user, setUser] = useState(false);
	const [state, setState] = useState(false);
    const [userData, setUserData] = useState([]);
	const [load, setLoad] = useState(false);
	const [error, setError] = useState('');

	const getUserData=(uid)=> {
        fire.database().ref('users/' + uid).once("value").then(
            snap => {
                // console.log(snap.val());
                setUserData(snap.val());
            })
    }


	const writeUserData=(user)=> {
		// console.log(user);
		fire.database().ref('users/' + user.uid).set(user).catch(error => {
			console.log(error.message);
			setError(error.message);
		});
	}

	const handleSignup = (email, password, fullName, gender, phone) => {
		try {
			setLoad(true);
			fire.auth().createUserWithEmailAndPassword(email, password)
				.then(userAuth => {
					let user = {
						fullName: fullName,
						gender: gender,
						phone: phone,
						uid: userAuth.user.uid,
						email: userAuth.user.email
					}
					// console.log(user)
					writeUserData(user);
					setLoad(false);
				})
				.catch(err => {
					console.log(err);
					setError(err.message);
				})

		} catch (error) {
			console.log(error.message);
			setError(error.message)
		}
	};

	const handlelogin = (email, password) => {
		setLoad(true);
		fire.auth().signInWithEmailAndPassword(email, password).catch((err) => {
			console.log(err);
			setLoad(false);
			setError(err.message);
		});
	};

	const clearError=()=> {
		setError('');
	}
	
	useEffect(() => {
		setLoad(true);
		fire.auth().onAuthStateChanged((user) => {
			if (user) {
				// console.log(user.uid);
				setUser(true);
				getUserData(user.uid);
				setLoad(false);
			} else {
				setUser(false);
				setLoad(false);
			}
		});
	}, []);

	return (
		<Container className="themed-container my-3 d-flex flex-column justify-content-center">
			{user ? <Profile userData={userData} load={load} clearError={clearError}/> :
				<>
					<Button className="mb-1" style={{ width: 'max-content' }} onClick={() => setState(!state)}>{state ? "Login" : "Signup"}</Button>
					{state ?
						<Signup handleSignup={handleSignup} load={load} clearError={clearError}/>
						:
						<Login handlelogin={handlelogin} load={load} clearError={clearError}/>
					}
				</>
			}
			
			<Form.Text className="text-danger">{error}</Form.Text>
		</Container>
	);
}

export default App;
