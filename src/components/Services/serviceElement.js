import styled from 'styled-components';

export const ServicesContainer=styled.div`
 height: 900px;
 display: flex;
 flex-direction: column;
 justify-content: center;
 align-items: center;
 background: #010606;

 @media screen and (max-width: 1024px){
    height: 1100px;
 }

 @media screen and (max-width: 480px){
    height:2200px;
  
 }
`

export const ServicesWrapper=styled.div`
 max-width: 1000px;
 margin: 0 auto;
 display: grid;
 grid-template-columns: 1fr 1fr 1fr;
 align-items: center;
 grid-gap: 16px;
 padding: 0 50px;

 @media screen and (max-width: 1000px){
    grid-template-columns: 1fr;
    padding: 0 20px;
   
 }
`

export const ServicesCard=styled.div`
 background: #fff;
 display: flex;
 flex-direction: column;
 justify-content: flex-start;
 align-items: center;
 border-radius: 10px;
 max-height: 400px;
 padding: 30px;
 box-shadow: 0 1px 3px rgba(0,0,0,0.2);
 transition: all 0.2s ease-in-out;

 &:hover{
    transform: scale(1.02);
    transition: all 0.2s ease-in-out;
    cursor: pointer;
 }
 @media screen and (max-width: 1000px){
   flex-direction:column;
  
   padding: 50px 20px;
   
}

`

export const ServicesIcon=styled.img`
 height: 160px;
 width: 160px;
 margin-bottom: 10px;
`

export const ServicesH1=styled.h1`
  font-size: 2.5rem;
  color: #fff;
  margin-bottom: 64px;

  @media screen and (max-width:1024px){
    font-size: 2rem;
    padding-top: 80px ;
    margin-bottom: 40px;
  }
`

export const ServicesH2=styled.h2`
 font-size: 1rem;
 margin-bottom: 10px;

 @media screen and (max-width:1024px){
   text-alight: center;
   font-size: 0.9rem;
   text-decoration: none;
 }
`

export const ServicesP=styled.p`
 font-size: 1rem;
 text-align: center;

 @media screen and (max-width: 1024px){
   font-size: 0.9rem;
 }
`