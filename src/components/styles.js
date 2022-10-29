
import styled from 'styled-components';

export const FooterContainer = styled.footer`
    font-family: 'Inter', sans-serif;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: #1F1F1F;
    color: white;
    padding: 72px 100px;
    padding-bottom: 0px;
    
    .footerContent{
        width: 100%;
        display: flex;
    }
    .leftSideFooterContent{
        display: flex;
        flex-direction: column;
        width: 20%;
        margin-right: 20%;
        font-size: 16px;
    }
    .logoImg{
        margin-bottom: 35px;
    }
    .leftSideFooterContent p{
        font-family: 'Inter';
        font-style: normal;
        font-weight: 400;
        font-size: 16px;
        line-height: 26px;
    }
    .leftSideFooterContent div{
        display: flex;
    }
    .iconsContent{
        width: 40%;
        display: flex;
        justify-content: space-between;
        margin-top: 40px;
    }
    .facebookIcon{
        width: 11px;
        height: 20px;
        cursor: pointer;
    }
    .instagramIcon{
        width: 20px;
        height: 20px;
        cursor: pointer;
        }
    .twitterIcon{
        width: 20px;
        height: 20px;
        cursor: pointer;
    }
    .informationContent{
        display: flex;
        flex-direction: column;
        width: 135px;
        margin-right: 10%;
    }
    .informationContent h3{
        font-size: 18px;
        font-weight: 600;
        margin-bottom: 45px;
    }
    .informationContent div{
        display: flex;
        flex-direction: column;
        font-weight: 400;
        font-size: 16px;
    }
    .informationContent div p{
        cursor: pointer;
        margin-bottom: 25px;
    }
    .informationContent div p:hover{
        text-decoration: underline;
    }
    .categoriesContent{
        margin-right: 12%;

    }
    .categoriesContent h3{
        font-size: 18px;
        font-weight: 600;
        margin-bottom: 45px;
    }
    .categoriesContent div{
        width: 100px;
        display: flex;
        flex-direction: column;
        font-size: 16px;
    }
    .categoriesContent div p{
        cursor: pointer;
        margin-bottom: 25px;
    }
    .categoriesContent div p:hover{
        text-decoration: underline;
    }
    .contactContent{
        display: flex;
        flex-direction: column;
        height: 100%;
    }
    .contactContent h3{
        margin-bottom: 45px;
    }
    .contactContent div{
        width: 230px;
        margin-bottom: 23px;
        font-weight: 400;
        font-size: 16px;
    }
    .contactContent div p{
        cursor: pointer;
        margin-bottom: 25px;
    }
    .contactContent div p:hover{
        text-decoration: underline;
    }
    .copyrightContainer{
        display: flex;
        justify-content: center;
        padding: 23px 0px;
        margin-top: 34px;
        border-top: 1px solid #626262;
        width: 100%;
    }
    
`;
