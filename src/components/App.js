import React, { useState, useEffect } from 'react';
import Login from './Login';
import Profile from './Profile';
import Signup from './Signup';
import { Container } from 'reactstrap';
import fire from '../firebase';
import { Button } from 'react-bootstrap';


function App() {
	const [user, setUser] = useState(false);
	const [state, setState] = useState(false);
    const [userData, setUserData] = useState([]);


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
			console.log(error.message)
		});
	}

	const handleSignup = (email, password, fullName, gender, phone) => {
		try {
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
				})
				.catch(err => {
					console.log(err);
				})

		} catch (error) {
			console.log(error.message)
		}
	};

	const handlelogin = (email, password) => {
		fire.auth().signInWithEmailAndPassword(email, password).catch((err) => {
			console.log(err);
		});
	};

	
	useEffect(() => {
		fire.auth().onAuthStateChanged((user) => {
			if (user) {
				// console.log(user.uid);
				setUser(true);
				getUserData(user.uid)
			} else {
				setUser(false);
			}
		});
	}, []);

	return (
		<Container className="themed-container my-3 d-flex flex-column justify-content-center">
			{user ? <Profile userData={userData}/> :
				<>
					<Button className="mb-1" style={{ width: 'max-content' }} onClick={() => setState(!state)}>{state ? "Login" : "Signup"}</Button>
					{state ?
						<Signup handleSignup={handleSignup} />
						:
						<Login handlelogin={handlelogin} />
					}
				</>
			}
		</Container>
	);
}

export default App;
