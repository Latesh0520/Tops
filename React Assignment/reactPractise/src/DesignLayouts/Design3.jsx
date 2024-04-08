import LogoSection from "./SubLayoutDesign/LogoSection";
import Section1 from "./SubLayoutDesign/Section1";
import Section2 from "./SubLayoutDesign/Section2";

export default function Design3() {
    return (
        <div style={{margin:"50px 0"}}>
            <LogoSection/>            
            <div style={{display:"flex",alignItems:"center",gap:"10px"}}> 
                <div style={{width:"20%",height:"500px"}}><h2> Side Bar</h2></div>
                <div style={{width:"80%",height:"500px",margin:"10px 0"}}>
                    <Section1 text="Header / Banner"/>
                    <div style={{backgroundColor:"gray",color:'white',height:"395px",display:"grid",placeContent:"center"}}><h2>Body Text</h2></div>
                </div>
            </div>
            <Section2 text="Footer"/>
        </div>
    );
}