import app from "./firebaseConfig"
import { getDatabase , ref, set} from "firebase/database";



const database = getDatabase(app);

// =====================Database Methods==============================

let sendData =(obj,nodeName,id)=>{
 
    let reference = ref(database ,` ${nodeName}  / ${id ? id : ""}`);
    
    return set(reference,obj);
}



export {signUpUser,loginUser,sendData}