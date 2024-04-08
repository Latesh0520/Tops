import LogoSection from "./SubLayoutDesign/LogoSection";
import Section2 from "./SubLayoutDesign/Section2";
import ThreeBoxDesign from "./SubLayoutDesign/ThreeBoxDesign";

export default function Design4() {
    const gridItems = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16];
    return <div style={{margin:"50px 0"}}>     
        <p className="h1">Layout 4</p>
        <div style={{backgroundColor:"gray",color:'white',display:"flex",alignItems:"center"}}>
            <div style={{width:"50%"}}><LogoSection/></div>
            <div style={{width:"50%"}}>
                <Section2 text="Navigation"/>
            </div>
        </div>
        <div style={{display:"flex",flexWrap:"wrap",gap:"20px",margin:"10px 0"}}>
            {
                gridItems.map((e)=>{
                    return (
                        <div style={{height: "100px", width: "24%", background: "gray"}}></div>
                    );
                })
            }  
            {/* I try to write here previous js code of for loop but found errors i dont understand why this happen*/}           
        </div>
       <ThreeBoxDesign/>
       <Section2 text="Footer"/>
    </div>
}