import { async } from "@firebase/util";
import { getRedirectResult } from "firebase/auth";
import { ref,get } from "firebase/database";
import {React,useEffect} from "react";
import { firebaseDatabase } from "../backend/firebaseHandler";


const ContactMe = () => {
    useEffect(() => {
        const temp=async()=>{
      const  myRef=  ref(firebaseDatabase,'Student')
      const dataSnapshot=await get(myRef);
      console.log(dataSnapshot.val());
    }
    temp();
    },[])



    return ( 
        <div >
        <h1 > Hello </h1>

        </div>
    )
}
export default ContactMe;