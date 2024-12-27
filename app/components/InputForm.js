import React from 'react'
//import firebase
import { db } from '../firebase/firebase'
import {
    collection,
    addDoc, 
    getDoc, 
    docs, 
    deleteDoc,
    updateDoc
} from 'firebase/firestore'


//const docRef = doc(db,"message","LQdPRcqWFaRdTMcqtCC3")
//const collectionRef = collection(db,"message")
//const docSnap = await getDoc(docRef)
//console.log(docSnap.data())

const InputForm = () => {


  return (
    <div>
      <textarea name="" id="" placeholder='Your Message here' className='bg-slate-300'></textarea>
      <button>Submit</button>
    </div>
  )
}

export default InputForm