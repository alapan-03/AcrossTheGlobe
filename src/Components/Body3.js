import location from "./location.png"
import cross from "./cross.png"
import group42 from "./Group 42.png"
import acc1 from "./acc1 (1).png"
import acc2 from "./acc1 (2).png"
import acc3 from "./acc1 (3).png"
import acc4 from "./acc1 (4).png"
import vec from "./Vector.png"

export default function Body3(props) {
return(
    <>
    <div className="grid-container">
    {/* <div class="search-bar item" style={{position:"relative", top:"-220vh", left:"63vw"}}> */}
    <div class="search-bar item">
  <span class="location-icon"><img src={location} style={{width:"25px"}}></img></span>
  <input type="text" placeholder="Enter your location" style={{paddingLeft:"2.1rem"}}/>
  <span class="clear-icon"><img src={cross} style={{width:"25px"}}></img></span>
</div>
{/* <img className="item" src={group42} style={{width:"300px", position:"relative", top:"-210vh", left:"63.5vw"}}></img> */}
<img className="item" src={group42} ></img>




{/* <div className="item" style={{position:"absolute", top:"150vh", left:"63vw"}}> */}
<div className="item">
<h2 style={{marginBottom:"3rem", transform:"translate(-10px)"}}><img src={vec} style={{width:"30px", transform:"translate(0, -4px)",marginRight:".5rem"}}></img>Recommended Groups</h2>

<div class="recommended-groups">
  <div class="group">
    <img src={acc1} alt="Mountain"/>
    <div>Leisure</div>
    <button style={{borderRadius:"200px", paddingTop:"0.3rem", paddingBottom:"0.3rem", paddingLeft:".8rem", paddingRight:"0.8rem", backgroundColor:"black", color:"white", transform:"translate(9px)"}}>Followed</button>
  </div>

  <div class="group">
    <img src={acc2} alt="Protest"/>
    <div>Activism</div>
    <button style={{borderRadius:"200px", paddingTop:"0.3rem", paddingBottom:"0.3rem", paddingLeft:".8rem", paddingRight:"0.8rem", border:"none"}}>Follow</button>
  </div>

  <div class="group">
    <img src={acc3} alt="Suit"/>
    <div>MBA</div>
    <button style={{borderRadius:"200px", paddingTop:"0.3rem", paddingBottom:"0.3rem", paddingLeft:".8rem", paddingRight:"0.8rem", border:"none"}}>Follow</button>
  </div>

  <div class="group">
    <img src={acc4} alt="Statue"/>
    <div>Philosophy</div>
    <button style={{borderRadius:"200px", paddingTop:"0.3rem", paddingBottom:"0.3rem", paddingLeft:".8rem", paddingRight:"0.8rem", border:"none"}}>Follow</button>
  </div>
  <span className="point" style={{color:"blue", marginTop:"1rem", position:"relative", left:'14rem', top:"3rem"}}>See more...</span>
</div>
</div>
</div>
    </>
)
}