import LogoSection from "./SubLayoutDesign/LogoSection";
import Section1 from "./SubLayoutDesign/Section1";
import Section2 from "./SubLayoutDesign/Section2";
import ThreeBoxDesign from "./SubLayoutDesign/ThreeBoxDesign";

export default function Design2() {
    return (
        <div style={{margin:"50px 0"}}>
            <h1>Layout 2</h1>
            <div style={{display:"flex",alignItems:"center"}}>
                <div style={{width:"50%"}}>
                    <LogoSection/>
                </div>
                <div style={{width:"50%"}}>
                    <Section2 text="Navigation"/>
                </div>
            </div>
            <Section1 text="Header / Banner"/>
            <Section1 text="Intro text Area"/>
            <ThreeBoxDesign/>
            <Section2 text="Footer"/>
        </div>
    );
}