import { setUserId } from "firebase/analytics";
import {React,useState} from "react";
import { useNavigate } from "react-router-dom";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

const Login=()=>{
    const navigate = useNavigate();

    const [userInput, setuserInput] = useState({
        email: "",
        password: ""
    });

    const handleEmail=(event)=>{
        setuserInput({
            email : event.target.value,
            password:userInput.password
        })
          

    }
    const handlePassword=(event)=>{
        setuserInput({
            email : userInput.email ,
            password:event.target.value
        })
    }

   const auth = getAuth();
/*signInWithEmailAndPassword(auth, userInput.email,userInput.password)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
  });*/
  /*const handleClick = async () =>{

    try{
    
    const user = await signInWithEmailAndPassword(auth,userInput.email,userInput.password);
    
    console.log(user);
    const log=() => navigate('/welcome')
                log();
    
    }catch (error){
    
    console.log(error.message);
    
    }
    
    };*/
    const handleClick=(event)=>{
        if (userInput.email=="user@mail.com" && userInput.password=="Password"){
            const log=() => navigate('/welcome')
                log();
        }
        else{
            alert("Enter valid Email or password")
        }
    }
    return(
        //<div className="Log">
           // <h1>LOGIN</h1>
           // <p><input placeholder="Email" value={userInput.email} onChange={handleEmail} /></p>
           // <p><input placeholder="Password" value={userInput.password} onChange={handlePassword}/></p>
           // <p><button onClick={handleClick}>Click to Login</button></p>
           // <button onClick={() => navigate('/Home')}>Create Account</button>
       // </div>
      
      
  <div className="body">
      <p>.</p>  
      <p>.</p>  
      <p>.</p>  
      <p>.</p>  
      <p>.</p>  
      <p>.</p>  
      <p>. </p>  
      <p>.</p>
     
  <div class="container">
  
      
    <h1>LOGIN</h1>
   
    <form>
      <div class="form-control">
        <input type="text" required placeholder="Email" value={userInput.email} onChange={handleEmail}></input>
        
      </div>
      <div class="form-control">
        <input type="password" required placeholder="Password" value={userInput.password} onChange={handlePassword}></input>
        
      </div>
      <button class="btn" onClick={handleClick}>Login</button>
      <p class="text" onClick={() => navigate('/Home')}>Don't have an account? <a href="#">Register</a></p>
    </form>
  </div>
  <script src="js.js"></script>
  <p>.</p>  
      <p>.</p>  
      <p>.</p>  
      <p>.</p>  
      <p>.</p>  
      <p>.</p>  
      <p>. </p>  
      <p>.</p>
      <p>.</p>
  </div>

          
    
       
    
    )

}

export default Login;