import rect from "./Rectangle 2.jpg"

export default function Body1(props) {
    return(
        <>
        <img src={rect} style={{width:"100vw", filter:"brightness(45%)"}}></img>

        <p style={{position:"relative", top:"-22vh",fontSize:"2.4rem" ,left:"13vw", fontWeight:"600", color:"white"}}>Computer Engineering<p style={{fontSize:"1rem", fontWeight:"400"}}>142,765 Computer Engineers follow this</p></p>
        </>
    )
}