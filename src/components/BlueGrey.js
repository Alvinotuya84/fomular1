import React from 'react'
import './style.css';
function BlueGrey({thin,text}) {
  return (
    <div className='blueGray' style={{width:thin?"100%":"50%",height:thin?70:200,display:"flex",alignItems:"center",justifyContent:"center",
    border:"1px solid rgb(212, 212, 212)"}}>
        <center><h5>{text}</h5></center>
    </div>
  )
}

export default BlueGrey