import icon1 from "./wholelogo.png"
import search from "./searchIcon2.png"
import arrow from "./DropdownArrow.png"
import arrow3 from "./3Arrows.png"
import profile from "./Group 64.png"

export default function Navbar(props) {
    return(

<nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid">
    <a class="navbar-brand" href="#" style={{position:"relative", left:"3vw"}}><img style={{width:"100px"}} src={icon1}></img></a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      {/* <span class="navbar-toggler-icon"></span> */}
      <img style={{width:"90px"}} src={arrow3}></img>
    </button>
    
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <form class="d-flex" role="search" style={{position:"relative", left:"27.5vw"}}>
        <img style={{width:"25px", height:"25px", position:"relative", top:"1vh", left:"2.5vw"}} src={search}></img>
        <input style={{borderRadius:"100px", width:"20vw", minWidth:"20vw", paddingLeft:"3vw"}} class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        {/* <button class="btn btn-outline-success" type="submit">Search</button> */}
      </form>
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          {/* <a class="nav-link active" aria-current="page" href="#" style={{position:"relative", left:"51vw"}}>Create account.<span style={{color:"blue"}}> It's free</span><img style={{width:"20px", transform:"translate(0,-1.2px)"}} src={arrow}></img></a> */}
          <img className="point" src={profile} style={{width:"160px", position:"relative", left:"52vw"}}></img>
        </li>
    

    
      </ul>
    </div>
  </div>
</nav>

)
}