import React from 'react'

function Card({name,profile,occupation,status,dob}) {
    return (
        <div class="box">
        <img class="main-img" src={profile} alt="character"/>
        <div class="box-content">
            <div class="item">{name}</div>
            <div class="description show-animate">
                <p>{dob}</p>
                
                {
                    occupation.map(item=>{
                        return(
                            <p>{item}</p>
                        )
                    })
                }
                <p style={status==='Alive'?{color:'green'}:{color:'red'}}>{status}</p>
            </div>
        </div>
        </div>  
    )
}

export default Card
