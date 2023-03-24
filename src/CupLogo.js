import React from 'react'
import Logo from './msg_shield_large.png';

export default function CupLogo() {
  return (
    <div style={{ display:'flex', justifyContent:'center', width:'100%' }}>
      <div className='cuplogo'>
        <img src={Logo}
            alt="Logo" 
            style={{ width:'100%', height:'100%' }}
        />
      </div>
    </div>
  )
}