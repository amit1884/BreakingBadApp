import React from 'react'
import Search from './Search'

function Header({open}) {
    return (
        <div className="header_container">
           <p style={{fontSize:'20px',fontWeight:'550'}}>Breaking Bad App</p>
           <div style={{float:'right'}}>
               <Search open={open}/>
            </div>  
        </div>
    )
}

export default Header
