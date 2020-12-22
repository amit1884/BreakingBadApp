import React ,{useState,useEffect}from 'react'
import axios from 'axios'
import Card from '../components/Card'
import Pagination from '../components/Pagination'
import Profile from '../components/Profile'
const Base_URL='https://www.breakingbadapi.com/api'
function Home() {
    const [activePage,setactivePage]=useState(1)
    const [Data,setData]=useState([])
    const [SplicedData,setSplicedData]=useState([])
    const [Start,setStart]=useState(0)
    // Function to get the list of all characters from api
    useEffect(()=>{

        axios.get(`${Base_URL}/characters`)
        .then(res=>{
            console.log(res.data)
            setData(res.data)
            const newData=res.data.splice(0,10)
            setSplicedData(newData)
            setStart(10)
        })
        .catch(err=>console.log(err))
    },[])
// Function to handle pagination
    const handlePageChange = (pageNumber) =>{
        console.log(`active page is ${pageNumber}`);
        setactivePage(pageNumber)

        const newData=[...Data]
        const data=newData.splice((pageNumber*10-Start),10)
        setSplicedData(data)
      }
    
    return (
        <div>
          <br/><br/><br/><br/><br/>
            <Pagination
                handlePageChange={handlePageChange}
                activePage={activePage}
            />
            <div className="list_conatiner">
                {
                    SplicedData.map(items=>{
                        return(
                            <Card
                            id={items.char_id} 
                            name={items.name}
                            profile={items.img}
                            occupation={items.occupation}
                            status={items.status}
                            dob={items.birthday}
                            />
                        )
                    })
                }
            </div>
            <Pagination
                handlePageChange={handlePageChange}
                activePage={activePage}
            />
            <Profile/>
        </div>
    )
}

export default Home
