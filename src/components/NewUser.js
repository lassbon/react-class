import { useState } from "react";
import NewUserCard from "./NewUserCard";
const NewUser = () => {

    let [surname, setSurname] = useState("")
    let [othernames, setOthernames] = useState("")
    let [validate, setValidate] = useState(false)
    let [validateValue, setValidateValue] = useState("")
    
    // function handleNameChange() {

    //     setSurname(surname)
    // }

    // function handleSurname(e){

        
    //     console.log(surname , surname.length)
    //     if (surname.length >  1) {

    //         setValidateValue("")
    //     } else {
       
     
    //         setValidateValue("This field is required")
    //     }
    // }
    
    
    function handleOthername(e){

        setOthernames(e.target.value)
        if (othernames === "") {
            setValidate(true)
             setValidateValue("This field is required")
        } else {
            setValidate(false)
            setValidateValue("")
        }
    } 

    function onFormSubmit(e) {
        e.preventDefault()

       alert(" ai am here")


       

        
    }
    return (
        <div>

        <br /><br />

        <section className="flex flex-row w-full">
            <div className='bg-zinc-500 w-1/2 p-10 text-center'>
            
            <div className="flex flex-col gap-y-2">
             <form onSubmit={onFormSubmit}>
                    <label className="text-left" htmlFor="Name">Surname</label>
                    <input  type="text" className="w-full px-4 py-2 border border-gray-300 outline-none focus:border-gray-400"
                        onChange={(e)=> setSurname(e.target.value)}
                        />
                        <span className="text-center text-red-600" >{ validateValue}</span><br />
                            
                    {/* <label className="text-left" htmlFor="Name">Othernames</label>
                    <input type="text"  onChange={handleOthername}
                        /> */}
                        
                    <input type="submit" value="Login"  disabled={validate} className="px-10 py-5 rounded-full mt-10 bg-lime-500"/> 
                            
                    <br /><br />
                
                    <NewUserCard />       

            </form>

            </div>
                
            
            
            </div>
            <div className='bg-blue-500 w-1/2 p-10 text-center'>
             Details <hr />
                {surname} <br />
                {othernames}
            
            </div>
           

        </section>



    </div>)

}


export default NewUser;