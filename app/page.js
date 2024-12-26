// import Link from "next/link";
// export default function Home() {
//   return (
//     <div className="min-h-screen flex justify-center items-center">
//       <form className="flex flex-col gap-3 items-center p-5 bg-slate-100">
//         <div className="flex flex-col justify-center items-start gap-3">
//           <div className="flex flex-col gap-3 w-full">
//           <label>Name</label>
//           <input type="text" className="px-2 py-3 border-none outline-none h-10 "/>
//           </div>
//           <div className="flex flex-col gap-3 w-full">
//           <label>Email</label>
//           <input type="email" name=""/>
//           </div>
//           <div className="flex flex-col gap-3 w-full">
//           <label>Password</label>
//           <input type="password" name=""/>
//           </div>
//         </div>
//         <div>
//           <button type="submit" className="bg-blue-600">Sign Up</button>
//         </div>
//         <div className="flex gap-2 items-center">
//           <small>Already have an account?</small>
//           <Link href="/login"><small>Login instead</small></Link>
//         </div>
//       </form>
//     </div>
//   );
// }


import React from 'react'
import InputForm from './components/InputForm'

const page = () => {
  return (
    <div>
      <InputForm />
    </div>
  )
}

export default page
