import * as firebase from 'firebase';

const config = {
	apiKey: process.env.FIREBASE_API_KEY,
	authDomain: process.env.FIREBASE_AUTH_DOMAIN,
	databaseURL: process.env.FIREBASE_DATABASE_URL,
	projectId: process.env.FIREBASE_PROJECT_ID,
	storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
	messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID
};
firebase.initializeApp(config);

const database = firebase.database();

export { firebase, database as default};




// database.ref('expenses')
// 	.once('value')
// 	.then((snapshot) => {
// 		const expenses = [];

// 		snapshot.forEach((childSnapshot) => {
// 			expenses.push({
// 				id: childSnapshot.key,
// 				...childSnapshot.val()
// 			})
// 		})
// 		console.log(expenses);
// 	})

// database.ref('expenses').on('child_removed', (snapshot) => {
// 	console.log(snapshot.key, snapshot.val());
// })
// database.ref('expenses').on('child_changed', (snapshot) => {
// 	console.log(snapshot.val());
// })
// database.ref('expenses').on('child_added', (snapshot) => {
// 	console.log(snapshot.val());
// })

// database.ref('expenses').push({
// 	description: "Pizza",
// 	note: "Cippola e salsiccia",
// 	amount: 83000,
// 	createdAt: 88888876544
// })


// database.ref('notes/-KyRwC7tdK61ooUw2FBT').remove()

// database.ref('notes').push({
// 	title: 'ToDo2',
// 	body: 'Kiss babe'
// })

// const firebaseNotes = {
// 	notes: {
// 		uhseufh: {
// 			note: 'bananas'
// 		},
// 		awdpojd: {
// 			note: 'apples'
// 		}
// 	}
// }

// const notes = [{
// 	id: 123,
// 	text: 'Ello'
// }, {
// 	id: 456,
// 	text: 'Yo'
// }];

// database.ref('notes').set(notes);

// database.ref().on('value', (snapshot) => {
// 	const val = snapshot.val();
// 	console.log(`${val.name} is a ${val.job.title} and works for ${val.job.company}`);
// })

// const onValueChange = database.ref().on('value', (snapshot) => {
// 	console.log(snapshot.val());
// }, (e) => {
// 	console.log('Errrr', e);
// })

// setTimeout(() => {
// 	database.ref('age').set(35);
// }, 3500)

// setTimeout(() => {
// 	database.ref().off(onValueChange);
// }, 7000)

// setTimeout(() => {
// 	database.ref('age').set(36);
// }, 10500)
// database.ref('location/city')
// 	.once('value')
// 	.then((snapshot) =>{
// 		const val = snapshot.val()
// 		console.log(val);
// 	})
// 	.catch((e) => {
// 		console.log('Error fetching data', e);
// 	})

// database.ref().set({
// 	name: 'Kgo',
// 	age: 29,
// 	stressLevel: 4,
// 	isSingle: false,
// 	job: {
// 		title: "software dev",
// 		company: "milk"
// 	},	
// 	location: {
// 		city: 'New York',
// 		country: 'USA'
// 	}
// }).then(() => {
// 	console.log('Data saved to the base!');
// }).catch((e) => {
// 	console.log('this FAILED', e);
// })

// database.ref().update({
// 	"job/company": "Amazon",
// 	stressLevel: 9,
// 	"location/city": "Seattle"
// })

// database.ref('isSingle')
// 	.remove()
// 	.then(() => {
// 		console.log('Removed sucessfully');
// 	})
// 	.catch((e) => {

// 	})