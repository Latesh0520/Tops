import Section1 from "./SubLayoutDesign/Section1";
import Section2 from "./SubLayoutDesign/Section2";
import LogoSection from "./SubLayoutDesign/LogoSection";

export default function Design1() {
    return (
        <div style={{margin:"50px 0"}}>
            <h1>Layout 1</h1>
            <LogoSection/>
            <Section2 text="Navigation"/>
            <Section1 text="Header / Banner"/>
            <div style={{display:"flex",alignItems:"center",gap:"10px"}}> 
                <div style={{backgroundColor:"gray",color:'white',width:"30%",height:"200px",}}>Side Bar</div>
                <div style={{backgroundColor:"gray",color:'white',width:"70%",height:"200px"}}>Body Area</div>
            </div>
            <Section2 text="Footer"/>
        </div>
    );
}