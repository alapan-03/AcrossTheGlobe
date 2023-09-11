import cardImg from "./Rectangle 5.jpg"
import article from "./Article.png"
import dots3 from "./dots3.png"
import profile1 from "./Rectangle 3.png"
import views from "./Group.png"
import edu from "./Education.png"
import cardImg2 from "./Rectangle 5 (1).jpg"
import profile2 from "./Rectangle 3 (1).png"
import share from "./Group 2.png"
import arrow from "./DropdownArrow.png"
import post from "./Group 61.png"
import post2 from "./Group 57.png"
import meetup from "./Meetup.png"
import cardImg3 from "./Rectangle 5.png"
import time from "./Group 53.png"
import btnGroup from "./Group 1.png"
import profile3 from "./Group 52.png"
import job from "./Jobx1.png"
import dev from "./Developerx2.png"
import about from "./aboutx3.png"
import buttonx4 from "./buttonx4.png"
import profile4 from "./profilex5.png"
import name from "./Nmaex6.png"

export default function Body2(props) {

    const button = document.getElementsByClassName("dbutton");
    const dropdown = document.getElementsByClassName("dropdown")[0];
    // document.addEventListener("DOMContentLoaded", function () {
// Get the button and the dropdown


    // function disp(){

    //     if(dropdown.style.display==="none")
    //     dropdown.style.display = "block"
    // else
    // dropdown.style.display="none"
    // }

    // })

    return(
        <>
        <ul className="nav2" style={{display:"flex", listStyle:"none", marginLeft:"9vw", marginTop:"-2vh"}}>
            <li className="nav2-li1 media3 point" style={{marginLeft:"2vw"}}>All posts(32)</li>
            <li className="media3 point" style={{marginLeft:"2vw"}}>Article</li>
            <li className="media3 point" style={{marginLeft:"2vw"}}>Event</li>
            <li className="media3 point" style={{marginLeft:"2vw"}}>Education</li>
            <li className="media3 point" style={{marginLeft:"2vw"}}>Job</li>

            {/* <li style={{marginLeft:"32rem", backgroundColor:"#cfcfcf", minWidth:"120px", padding:".5rem", borderRadius:"5px"}}>Write a post<img style={{width:"20px"}} src={arrow}></img></li> */}
            <li><img src={post} className="media1 point" style={{width:"140px", position:"relative", top:"-1vh", left:"23.5vw", marginBottom:"-1rem"}}></img></li>
            <li style={{marginLeft:"1.6vw"}} className="media2 point"><img src={post2} style={{width:"140px",position:"relative", top:"-0.5rem", left:"23.5vw", marginBottom:"-1rem"}}></img></li>
        </ul>
        <hr className="hr" style={{width:"64.35rem", position:"relative", left:"15.7vw"}}></hr>




        <div class="card" style={{width: "38rem", height:"27rem", position:"relative", left:'12.5vw', top:"2rem"}}>
  <img src={cardImg} class="card-img-top" alt="..."/>
  <div class="card-body">
    <img src={article} style={{marginBottom:"1rem", width:"70px"}}></img>
    <img src={dots3} className="dbutton point" style={{width:"35px", position:"relative", left:"28rem", top:"1.95rem"}}></img>



    <h5 class="card-title">What if famous brands had regular fonts? Meet<br></br> RegulaBrands!</h5>
    <p class="card-text" style={{position:"relative", top:".5rem"}}>I’ve worked in UX for the better part of a decade. From now on, I plan to rei…</p>
    {/* <a href="#" class="btn btn-primary">Go somewhere</a> */}
<img src={profile1} className="point" style={{width:"40px", position:"relative", top:'1.6rem'}}></img><p style={{position:"relative", left:"3.5rem", top:"-0.5rem", fontWeight:"600"}}>Sarthak Kamra</p>
    
    <img src={views} className="point" style={{width:"95px", position:"relative", top:"-3rem", left:'23rem'}}></img>
    <img src={share} className="point" style={{width:'50px', position:"relative", left:"26.5rem", top:"-3rem"}}></img>

  </div>
</div>




        <div class="card"  style={{width: "38rem", height:"27rem", position:"relative", left:'12.5vw', top:"3rem", marginBottom:"2rem"}}>
  <img src={cardImg2} class="card-img-top" alt="..."/>
  <div class="card-body">
    <img src={edu} style={{marginBottom:"1rem", width:"90px"}}></img>
    <img src={dots3} className="dbutton point" style={{width:"35px", position:"relative", left:"28rem", top:"1.95rem"}}></img>



    <h5 class="card-title">Tax Benefits for Investment under National Pension<br></br> Scheme launched by Government</h5>
    <p class="card-text" style={{position:"relative", top:".5rem"}}>I’ve worked in UX for the better part of a decade. From now on, I plan to rei…</p>
    {/* <a href="#" class="btn btn-primary">Go somewhere</a> */}
<img src={profile2} className="point" style={{width:"40px", position:"relative", top:'1.6rem'}}></img><p style={{position:"relative", left:"3.5rem", top:"-0.5rem", fontWeight:"600"}}>Sarah West</p>
    
    <img src={views} className="point" style={{width:"95px", position:"relative", top:"-3rem", left:'23rem'}}></img>
    <img src={share} className="point" style={{width:'50px', position:"relative", left:"26.5rem", top:"-3rem"}}></img>
  </div>
</div>








<div class="card"  style={{width: "38rem", height:"30rem", position:"relative", left:'12.5vw', top:"3rem", marginBottom:"2rem"}}>
  <img src={cardImg3} class="card-img-top" alt="..."/>
  <div class="card-body">
    <img src={meetup} style={{marginBottom:"1rem", width:"90px"}}></img>
    <img src={dots3} className="dbutton point" style={{width:"35px", position:"relative", left:"28rem", top:"1.95rem"}}></img>



    <h5 class="card-title">Tax Benefits for Investment under National Pension<br></br> Scheme launched by Government</h5>
    <p class="card-text" style={{position:"relative", top:".5rem"}}><img style={{width:"300px"}} src={time}></img></p>

    <img src={btnGroup} className="point" style={{width:"570px", marginTop:"1rem"}}></img>
    {/* <a href="#" class="btn btn-primary">Go somewhere</a> */}
<img src={profile3} className="point" style={{width:"130px", position:"relative", top:'1.6rem'}}></img>
    
    <img src={views} className="point" style={{width:"95px", position:"relative", top:"1.5rem", left:'15rem'}}></img>
    <img src={share} className="point" style={{width:'50px', position:"relative", left:"18rem", top:"1.5rem"}}></img>
  </div>
</div>






<div class="card"  style={{width: "38rem", height:"16rem", position:"relative", left:'12.5vw', top:"3rem"}}>
  {/* <img src={cardImg2} class="card-img-top" alt="..."/> */}
  <div class="card-body">
    <img src={job} style={{marginBottom:"1rem", width:"60px"}}></img><br></br>
    <img src={dots3} className="dbutton point" style={{width:"35px", position:"relative", left:"28rem", top:"1.95rem"}}></img>

<img src={dev} style={{width:"170px", position:"relative", left:"-2.2rem"}}></img><br></br>
<img src={about} style={{width:"270px"}}></img>
<br></br>
<br></br>


<img src={buttonx4} className="point" style={{width:"570px"}}></img>
       {/* <a href="#" class="btn btn-primary">Go somewhere</a> */}
<img src={profile4} style={{width:"40px", position:"relative", top:'1.6rem'}}></img><p style={{position:"relative", left:"3.5rem", top:"-0.5rem", fontWeight:"600"}}>Joseph Gray</p>
    
    <img src={views} style={{width:"95px", position:"relative", top:"-3rem", left:'23rem'}}></img>
    <img src={share} style={{width:'50px', position:"relative", left:"26.5rem", top:"-3rem"}}></img>
  </div>
</div>

        </>
    )
}