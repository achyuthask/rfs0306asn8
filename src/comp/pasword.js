import { Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';


const  Passworgeneration = () =>{

    const passwordGenerator =() =>{
        const upperCaseChar =  "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        const LowerCaseChar =  "abcdefghijklmnopqrstuvwxyz";
        const numbers ="0123456789";
        const symbols = "!@#$%&*";
        let  finalchar = `${upperCaseChar}${LowerCaseChar}${numbers}${symbols}`;
        let  length = 8;
        let password = "";
        for(let i=0; i<length ; i++){
            let index = Math.floor(Math.random()*finalchar.length+1)
            password =password+finalchar.charAt(index)
        }
           alert(password);
    };
    return(
     <>
        <div>
        <h1 style={{color: "tomato" }}>PASSWORD GENERATOR</h1>
       
       < input type="text"  disabled value= "attributes" style={{ padding: "10px" }}/>
       <select>
           <option value="0">0</option>
           <option value="1">1</option>
           <option value="2">2</option>
           <option value="3">3</option>
           <option value="4">4</option>
           <option value="5">5</option>
           <option value="6">6</option>
           <option value="7">7</option>
           <option value="8">8</option>
        </select>
        <br></br>
        <input type="checkbox" id="uppercase"/>
        <label htmlFor=""  style={{ padding: "10px" }}>uppercase</label><br></br>
        <input type="checkbox" id="Lowercase" />
        <label htmlFor="" style={{ padding: "10px" }}>Lowerrcase</label><br></br>
        <input type="checkbox" id="Include Numbers" />
        <label htmlFor="" style={{ padding: "10px" }}>Include Numbers</label><br></br>
        <input type="checkbox" id="Include Symbols" />
        <label htmlFor="" style={{ padding: "10px" }}>Include Symbols</label><br></br>
       <Button onClick={passwordGenerator }>GENERATE PASSWORD</Button>
        </div>
        
      
     </>
    );
}
export default Passworgeneration;
