import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const SerachIcon = styled(FontAwesomeIcon)``;
export const HamburgerMenu = styled(FontAwesomeIcon)`
 
`;



export const MobileWrapper = styled.div`
    transition:1ms ease-out;
    position:absolute;
    width:100%;
    z-index:999;
    background:white;

    >div{
    display:flex;
    flex-flow:column;
    height:210px;
    justify-content:space-evenly;
    

    >div{
        align-self: center;
        list-style-type:none;
    }

    
    >div:nth-child(5){
        >${SerachIcon}{
            padding-right:10px;
        }
        >input{
            border:none;
            outline:none;
            height:30px;
            box-shadow: inset 0 0 55px 1px #e5e7e5;
        }
    }

    }

`;


export const SideMenue = styled.div`
    background:white;
    width:10%;
    height: 100vh;
    position:fixed;

    @media (max-width: 800px) {
        display:none;
    }
`;

export const Input = styled.input`
        width:40%;
        height:50px;
        padding-left:10px;
        align-self: center;
        outline:none;
        border:none;
        box-shadow: inset 0 0 55px 1px #e5e7e5;

`;

export const Menu = styled.div`
    display:flex;
    height:100%;
    flex-direction:column;
    text-align:center;


    >div{
        box-shadow: inset 0 0 55px 1px #e5e7e5;
        padding-top:15px;
        border-bottom:1px solid #29BB8A;
    }


    
`;




export const UpperMenu = styled.div`
    margin:0px;
    background:white;
    box-shadow: 0px 2px 5px 0px #e5e7e5;
    display:flex;
    width:100%;
    height:70px;

    >${HamburgerMenu}{
        display:none;
    }

    @media (max-width: 800px) {

        justify-content:flex-end;

        >Input{
            display:none;           
        }
        >${HamburgerMenu}{
            display:block;
        }
        >${SerachIcon}{
            display:none;
        }

    }
`;



export const Search = styled.button`
        outline:none;
        border:none;
        height:35px;
        width:10%;
        background:#29BB8A;
        color:white;
        border-radius:25px;
        position:relative;
        left:-100px;
`;

export const Wrapper = styled.div`
`;
