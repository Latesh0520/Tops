export default function ThreeBoxDesign(){
    return (
        <div style={{display:"flex",alignItems:"center",gap:"30px",margin:"10px 0"}}> 
            {
                [1,2,3].map((e)=>{
                    return (
                        <div style={{backgroundColor:"gray",color:'white',width:"33%",height:"150px",display:"grid",placeContent:"center"}}>Box {e}</div>                    
                    );
                })
            }
        </div>
    );
}