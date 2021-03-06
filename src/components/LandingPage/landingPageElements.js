import styled from "styled-components";


export const LandingPageContainer = styled.div`
    background: ;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 30px;
    height:600px;
    position: relative;
    z-index:1;

    :before{
        top: 0;
        right:0;
        bottom:0;
        left:0;
        background: linear-gradient(
            180deg, 
            rgba(0,0,0,0.2) 0%,
            rgba(0,0,0,0.6) 100%
            ),
            linear-gradient(
                180deg, 
                rgba(0,0,0,0.2) 0%,
                transparent 100%
            );
            
        z-index: 2;
    }
`

export const LandingBg = styled.div`
    position: absolute;
    top: 0;
    right:0;
    bottom:0;
    left:0;
    width: 100%;
    height: 100%;
    overflow: hidden;
`
export const ImageBg = styled.img`
    width: 100%;
    height: 100%;
    -o-object-fit: cover;
    object-fit: cover;
    background: #000;
`

export const LandingContent = styled.div`
    
    z-index: 3;
    // max-width:1200px;

    justify-content: center;
    align-items: center;
    position: absolute;
    padding: 8px 24px;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: rgba(0,0,70,0.8);
    width: 100%;
    height: 100%;
`

export const LandingH1 = styled.h1`
    color: #fff;
    font-size: 48px;
    text-align: center;
    

    @media screen and (max-width: 768px){
        font-size: 40px
    }

    @media screen and (max-width: 480px){
        font-size: 32px
    }
`

export const LandingP = styled.p`
    margin-top:24px;
    color: #fff;
    font-size:24px;
    text-align: center;
    max-width: 600px;

    @media screen and (max-width: 768px){
        font-size: 20px
    }

    @media screen and (max-width: 480px){
        font-size: 18px
    }

`