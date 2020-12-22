import React from 'react'

function Card({name,profile,occupation,status,dob,id}) {
    return (
        <div class="box" key={id}>
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
