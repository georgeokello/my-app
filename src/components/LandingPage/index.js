import React from "react";
import image from "../../images/image.PNG"
import { 
    ImageBg,
    LandingBg,
    LandingContent,
    LandingH1,
    LandingP,
    LandingPageContainer,
    
    } from "./landingPageElements";



function Landing(){
    return(
        <>
           <LandingPageContainer>
               <LandingBg>
                   <ImageBg src={image}/>
               </LandingBg>
               <LandingContent>
                   <LandingH1>
                       Kenbo Services Limited
                   </LandingH1>
                   <LandingP>
                       We.........................................................
                       .......................................
                   </LandingP>
               </LandingContent>
               
           </LandingPageContainer>
        </>
    )
}


export default Landing