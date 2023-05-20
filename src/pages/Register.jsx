import React, { useState } from "react";
import add from "../images/addAvatar.png";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth, db, storage } from "../firebase";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { doc, setDoc } from "firebase/firestore";

const Register = () => {

  const [err, setErr] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault();
    const displayName = e.target[0].value;
    const email = e.target[1].value;
    const password = e.target[2].value;
    const file = e.target[3].files[0];

    try {
      //Create user
      const res = await createUserWithEmailAndPassword(auth, email, password);
      console.log(`first ${res.user}`);

      //Create a unique image name
      const date = new Date().getTime();
      const storageRef = ref(storage, `${displayName + date}`);

      console.log(`after storageref ${res.user}`);

      await uploadBytesResumable(storageRef, file).then(() => {
        getDownloadURL(storageRef).then(async (downloadURL) => {
          try {
            //Update profile
            await updateProfile(res.user, {
              displayName: displayName,

              photoURL: downloadURL,
            });

            console.log(`after updateprofile ${res.user}`);
            //create user on firestore
            await setDoc(doc(db, "users", res.user.uid), {
              uid: res.user.uid,
              displayName: displayName,
              email : email,
              photoURL: downloadURL,
            });

            console.log(`after setdoc ${res.user}`);

            //create empty user chats on firestore
            // await setDoc(doc(db, "userChats", res.user.uid), {});
          } catch (err) {
            console.log(err);
            setErr(true);
          }
        });
      });
      console.log(`last ${res.user}`);
    } catch (err) {
      setErr(true);
    }
  };


  return (
    <>
      <div className="formContainer">
        <div className="formWrapper">
          <span className="logo">Chat On</span>
          <span className="title">Register</span>
          <form onSubmit={handleSubmit} >
            <input type="text" placeholder='Name' />
            <input type="email" placeholder='Email' />
            <input type="password" placeholder='Password' />
            <input style={{ display: "none" }} type="file" id='file' />
            <label htmlFor="file">
              <img src={add} alt="file" />
              <span>Add an avatar</span>
            </label>
            <button>Sign up</button>
            {err && <span>Something went wrong</span> }
          </form>
          <p>You already have an account? Login</p>
        </div>
      </div>
    </>
  )
}

export default Register
