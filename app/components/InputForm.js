import React from 'react'
//import firebase
import { collection, addDoc,getDoc } from "firebase/firestore"; 

const InputForm = () => {
  const collectionRef = collection(db,"message")
  const docsSnap =  getDoc(collectionRef);

  return (
    <div>
      <textarea name="" id="" placeholder='Your Message here' className='bg-slate-300'></textarea>
      <button>Submit</button>
    </div>
  )
}

export default InputForm