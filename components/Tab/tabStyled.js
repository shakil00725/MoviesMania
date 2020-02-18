import styled from "styled-components";

export const SubWrapper = styled.div`
  max-width:888px;
  width:50%;
  margin:0 auto;
  @media (max-width: 800px) {
    width:100%;
  }
`;

export const Tab = styled.div`
margin:20px;
font-size:14px;
display:flex;
  >div:nth-child(1){
    width:50%;
    margin:2px;
    >input{
      -webkit-appearance: none;
      position:relative;
      width:100%;
      height:50px;
      text-align:center;
      &:before{
        content: 'Now Playing';
        position:relative;
        top:15px;
        outline:none;
        box-sizing:border-box;
        transition: 4s;
      }
      &:checked{
        color:#2E4053 ;
        border-bottom:5px solid #29BB8A ;
      }
    }
  }
  >div:nth-child(2){
    width:50%;
    margin:2px;
    >input{
      -webkit-appearance: none;
      position:relative;
      width:100%;
      height:50px;
      text-align:center;
      &:before{
        content: 'Popular';
        position:relative;
        top:15px;
        outline:none;
        box-sizing:border-box;
        transaction:.8s;
      }
      &:checked{
        color:#2E4053 ;
        border-bottom:5px solid #29BB8A ;
      }
    }
  }

  >div:nth-child(3){
    width:50%;
    margin:2px;
    >input{
      -webkit-appearance: none;
      position:relative;
      width:100%;
      height:50px;
      text-align:center;
      &:before{
        content: 'Toprated';
        position:relative;
        top:15px;
        outline:none;
        box-sizing:border-box;
        transaction:.8s;
      }
      &:checked{
        color:#2E4053 ;
        border-bottom:5px solid #29BB8A ;
      }
    }
  }

  >div:nth-child(4){
    width:50%;
    margin:2px;
    >input{
      -webkit-appearance: none;
      position:relative;
      width:100%;
      height:50px;
      text-align:center;
      &:before{
        content: 'Upcoming';
        position:relative;
        top:15px;
        outline:none;
        box-sizing:border-box;
        transaction:.8s;
      }
      &:checked{
        color:#2E4053 ;
        border-bottom:5px solid #29BB8A ;
      }
    }
  }
`;