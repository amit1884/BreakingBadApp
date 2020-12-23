import React ,{useState,useEffect}from 'react'
import axios from 'axios'
const Base_URL='https://www.breakingbadapi.com/api'
function Profile({profileData,closeModal}) {
    const [Quote,setQuote]=useState('')
    const Id=profileData.char_id;
    useEffect(()=>{
        axios.get(`${Base_URL}/quotes/${Id}`)
        .then(res=>{
            console.log(res.data)
            setQuote(res.data[0].quote)
        })
        .catch(err=>console.log(err))
    },[Id])
    return (
        <div className="profile_outer_container">
            <div className="inner_container">
               <div onClick={closeModal}> <button className="close_btn">X</button></div>
                <div className="content_area">
                    <div className="image_area">
                        <img src ={profileData.img} className="char_img" alt="photo_char" />
                    </div>
                    <div className="details">
                        <p style={{overflow:'hidden'}}><span id="name">{profileData.name}</span><span style={{fontSize:'20px',fontWeight:'500',color:'#000',fontFamily: 'Courgette, cursive'}}>({profileData.nickname})</span></p>
                       <div style={{padding:'20px'}}>
                           {profileData.birthday!=='Unknown'?<p>Born on {profileData.birthday}</p>:null}
                       <p><b>Portrayed By :</b>{profileData.portrayed}</p>
                        <p><b>Occupations:</b></p>
                        <ul>
                        {
                            profileData.occupation.map(item=>{
                                return(
                                    <li>{item}</li>
                                )
                            })
                        }
                        </ul>
                        <p><b>Appeared In:</b></p>
                        <ul>
                            {
                                profileData.appearance.map(item=>{
                                    return(
                                        <li>Season&nbsp;{item}</li>
                                    )
                                })
                            }
                        </ul>
                        <br/>
                        <h2 id="quote">"{Quote}"</h2>
                        <p style={profileData.status==='Alive'?{color:'green',fontSize:'16px',textAlign:'center'}:{color:'red',fontSize:'16px',textAlign:'center'}}>({profileData.status})</p>
                       </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Profile
