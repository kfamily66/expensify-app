import * as firebase from "firebase";
import config from "./config";

const expenses = [
  {
    description: "Coffee",
    note: "",
    amount: 300,
    createdAt: 1516
  },
  {
    description: "Rent",
    note: "",
    amount: 1095,
    createdAt: 6487987
  },
  {
    description: "Gas bill",
    note: "",
    amount: 500,
    createdAt: 48798798
  }
];

firebase.initializeApp(config);
const database = firebase.database();

export { firebase, database as default };

///----- CREATE DATA -----///

// database
//   .ref()
//   .set({
//     name: "Eugene Kozlov",
//     age: 23,
//     isMarried: false,
//     location: {
//       city: "Perm",
//       country: "Russia"
//     }
//   })
//   .then(() => console.log("Data is saved"))
//   .catch(e => console.log("Something went wrong: ", e));

// database.ref("age").set(24);

// database.ref("attributes").set({ height: 183 });

///----- REMOVE DATA -----///

// database
//   .ref("isMarried")
//   .remove() //this is equal set(null)
//   .then(() => console.log("Removed"))
//   .catch(e => console.log("Error: ", e));

///----- UPDATE DATA -----///

// database.ref().update({
//   name: "New name", // update existing
//   age: 25,
//   isMarried: null, // remove existing
//   language: "Russian", // add new
//   "location/city": "Moskow" // the only way update inner object properties
// });

///----- FETCH FROM DATABASE ONCE -----///

// database
//   .ref("name")
//   .once("value")
//   .then(snapshot => {
//     const val = snapshot.val();
//     console.log(val);
//   })
//   .catch(e => console.log("Error: ", e));

///----- FETCH FROM DATABASE WITH SUBSCRIPTION -----///

// const onValueChange = database.ref().on(
//   "value",
//   snapshot => {
//     console.log(snapshot.val());
//   },
//   e => console.log("Error: ", e)
// );
// database.ref().off(onValueChange); // remove subscription

///----- ADD AND STORE ARRAY-LIKE DATA WITH FIREBASE -----///

// database.ref("notes").push(expenses[0]);
// database.ref("notes").push(expenses[1]);
// database.ref("notes").push(expenses[2]);

///----- FETCH ONCE AND CONVERT DATA TO ARRAY -----///

// database
//   .ref("notes")
//   .once("value")
//   .then(snapshot => {
//     console.log(snapshot.val());
//     const expenses = [];
//     snapshot.forEach(child => {
//       expenses.push({
//         id: child.key,
//         ...child.val()
//       });
//     });
//     console.log(expenses);
//   });

///----- FETCH WITH SUBSCRIPTION AND CONVERT DATA TO ARRAY -----///

// database.ref("notes").on("value", snapshot => {
//   console.log(snapshot.val());
//   const expenses = [];
//   snapshot.forEach(child => {
//     expenses.push({
//       id: child.key,
//       ...child.val()
//     });
//   });
//   console.log(expenses);
// });

///----- SUBSCRIPTION METODS: child_removed, child_changed, child_added, child_moved -----///

// database.ref("notes").on("child_removed", snapshot => console.log(snapshot.key, snapshot.val()));

// database.ref("notes").on("child_changed", snapshot => console.log(snapshot.key, snapshot.val()));

// database.ref("notes").on("child_added", snapshot => console.log(snapshot.key, snapshot.val())); // run once for every existing child and then listen new added child
