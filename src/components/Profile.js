import React, {useEffect} from 'react'
import fire from '../firebase';
import { Button, Spinner } from 'react-bootstrap';


const Profile =({clearError, load, userData})=> {
    const handleLogout = () => {
		fire.auth().signOut();
	};

    useEffect(() => {
        clearError();
    }, [clearError])

    return (
        <>
        <div className="d-flex flex-column align-items-center">
            <h4>User Profile</h4>
            {/* <span><strong>UID: </strong>{userData.uid}</span> */}
            <span><strong>Full Name: </strong>{userData.fullName}</span>
            <span><strong>Gender: </strong>{userData.gender}</span>
            <span><strong>Phone: </strong>{userData.phone}</span>
            <span><strong>Email: </strong>{userData.email}</span>
            <Button disabled={load} style={{ width: 'max-content' }} onClick={handleLogout}>
            {load && <Spinner
                as="span"
                animation="grow"
                size="sm"
                role="status"
				aria-hidden="true"
			/>}Logout
            </Button>
        </div>
            </>
    )
}

export default Profile
