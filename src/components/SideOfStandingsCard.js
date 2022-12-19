import React from 'react'

function SideOfStandingsCard({image, description}) {
  return (
  <div className="child"  >
    <div  style={{backgroundImage: `url(${image})`, backgroundRepeat: "no-repeat",

   backgroundSize: "cover", height:"50%", width:"100%", display:"flex",justifyContent:"center",alignItems:"flex-end"}}>
    <center><h5 style={{fontWeight:"bold",color:"white"}}>{description}</h5></center>
    </div>
</div>
  )
}

export default SideOfStandingsCard