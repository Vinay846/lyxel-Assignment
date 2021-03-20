import React from 'react'
import fire from '../firebase';
import { Button } from 'react-bootstrap';


const Profile =(props)=> {
  
    const handleLogout = () => {
		fire.auth().signOut();
	};


    return (
        <>
        <div className="d-flex flex-column align-items-center">
            <h4>User Profile</h4>
            {/* <span><strong>UID: </strong>{props.userData.uid}</span> */}
            <span><strong>Full Name: </strong>{props.userData.fullName}</span>
            <span><strong>Gender: </strong>{props.userData.gender}</span>
            <span><strong>Phone: </strong>{props.userData.phone}</span>
            <span><strong>Email: </strong>{props.userData.email}</span>
            <Button style={{ width: 'max-content' }} onClick={handleLogout}>Logout</Button>
        </div>
            </>
    )
}

export default Profile
