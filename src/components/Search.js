import React,{useState} from 'react'
import axios from 'axios'
const Base_URL='https://www.breakingbadapi.com/api'
function Search({open}) {
    const [Text,setText]=useState('')
    // const [Data,setData]=useState([])
    const SubmitHandler=(e)=>{
        e.preventDefault();
        console.log('chala.....................')
        axios.get(`${Base_URL}/characters?name=${Text}`)
        .then(res=>{
            console.log(res.data)
            // setData(res.data)
            open(res.data[0])
        })
        .catch(err=>console.log(err))
    }
    return (
       <form onSubmit={SubmitHandler} className="search_form">
           <input 
            onChange={(e)=>setText(e.target.value)}
            value={Text}
           type="text" 
           placeholder="Character Name"
           className="input_field"
           />
           <button type="submit" className="search_btn">Search</button>
       </form>
    )
}

export default Search
