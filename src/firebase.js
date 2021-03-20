import firebase from 'firebase';

var firebaseConfig = {
	apiKey: 'AIzaSyCwAV9w1wbvlpdum6TBHIS0Ehr1dQ7X3iU',
	authDomain: 'authentication-248dc.firebaseapp.com',
	projectId: 'authentication-248dc',
	storageBucket: 'authentication-248dc.appspot.com',
	messagingSenderId: '275622216818',
	appId: '1:275622216818:web:52a2675ed5303b3217eeeb',
	databaseURL: 'https://authentication-248dc-default-rtdb.firebaseio.com/'
};

const fire = firebase.initializeApp(firebaseConfig);
export default fire;
