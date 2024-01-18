import { useEffect, useState } from "react"

export default function Form()
{
    const [name,setName]=useState();
    const [desigination,setDesigination]=useState();
    const [interest,setInterest]=useState();

    
       

    useEffect(()=>{
            localStorage.setItem("name",JSON.stringify(name))
            localStorage.setItem("desigination",JSON.stringify(desigination))
            localStorage.setItem("iterest",JSON.stringify(interest))
        },[name,desigination,interest])
        
    

    return(
        <div>
            <form >
                <input type="text" placeholder="Name" value={name} onChange={(e)=>setName(e.target.value)} />
                <input type="text" placeholder="Desigination" value={desigination} onChange={(e)=>setDesigination(e.target.value)} />
                <label htmlFor="interests">3 interests</label>
                <input type="text" value={interest} onChange={(e)=>setInterest(e.target.value)}  />
                <button>Submit</button>
                <button>Cancel</button>
            </form>
       
    </div>
    )
   
}