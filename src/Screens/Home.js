import React ,{useState,useEffect}from 'react'
import axios from 'axios'
import Card from '../components/Card'
import Pagination from '../components/Pagination'
import Profile from '../components/Profile'
import Header from '../components/Header'
import Loader from '../components/Loader'
const Base_URL='https://www.breakingbadapi.com/api'
function Home() {
    const [activePage,setactivePage]=useState(1)    //To Store active page number
    const [Data,setData]=useState([])                //To store fetched data
    const [SplicedData,setSplicedData]=useState([])  //To store spliced data
    const [Start,setStart]=useState(0)               //Start index of page
    const [Open,setOpen]=useState(false)
    const [ProfileData,setProfileData]=useState({})
    const [Loading,setLoading]=useState(true)
    // Function to get the list of all characters from api
    useEffect(()=>{

        axios.get(`${Base_URL}/characters`)
        .then(res=>{
            console.log(res.data)
            setData(res.data)
            const newData=res.data.splice(0,10)
            setSplicedData(newData)
            setStart(10)
            setLoading(false)
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

    //   Open Modal
      const openModal=(data)=>{
        console.log('profile',data)
        setProfileData(data)
        setOpen(true)
      }
      function closeModal(){
          console.log('clicked')
          setOpen(false)
      }
    return (
        Loading?<Loader/>:
        <div>
          
          <Header open={openModal}/>
          <br/><br/><br/><br/>
            <div className="list_conatiner">
                {
                    SplicedData.map(items=>{
                        return(
                            <div onClick={()=>openModal(items)}>
                            <Card
                            key={items.char_id}
                            name={items.name}
                            profile={items.img}
                            occupation={items.occupation}
                            status={items.status}
                            dob={items.birthday}
                            />
                            </div>
                        )
                    })
                }
            </div>
            {/* Pagination Section */}
            <Pagination
                handlePageChange={handlePageChange}
                activePage={activePage}
            />
            {/* Profile Modal */}
            {Open?<Profile 
            closeModal={closeModal}
            profileData={ProfileData}/>:null}
        </div>
    )
}

export default Home
