import React,{useState} from 'react'
import axios from 'axios'
const Base_URL='https://www.breakingbadapi.com/api'
function Search({open}) {
    const [Text,setText]=useState('')
    const [Loading,setLoading]=useState(false)
    const SubmitHandler=(e)=>{
        e.preventDefault();
        setLoading(true)
        console.log('chala.....................')
        axios.get(`${Base_URL}/characters?name=${Text}`)
        .then(res=>{
            console.log(res.data)
            // setData(res.data)
            if(res.data.length===0)
            alert('No results found')
            else
            {
            open(res.data[0])
            setLoading(false)
            }
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
           <button type="submit" className="search_btn">{Loading?'Loading...':'Search'}</button>
       </form>
    )
}

export default Search
