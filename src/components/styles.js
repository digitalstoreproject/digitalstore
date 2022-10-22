
import styled from 'styled-components';

export const FooterContainer = styled.footer`
    font-family: 'Inter', sans-serif;
    width: 100%;
    border: 1px solid red;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: #1F1F1F;
    color: white;
    
    .footerContent{
        width: 100%;
        padding: 80px 100px;
        display: flex;
    }
    .leftSideFooterContent{
        display: flex;
        flex-direction: column;
        width: 20%;
        margin-right: 20%;
        font-size: 16px;
        border: 1px solid blue;
    }
    .leftSideFooterContent p{
        font-size: 16px;
    }
    .leftSideFooterContent div{
        display: flex;
    }
    .iconsContent{
        width: 40%;
        display: flex;
        justify-content: space-between;
    }
    .facebookIcon{
        width: 11px;
        height: 20px;
    }
    .instagramIcon{
        width: 20px;
        height: 20px;
    }
    .twitterIcon{
        width: 20px;
        height: 20px;
    }
    .informationContent{
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        width: 135px;
        margin-right: 100px;
    }
    .informationContent div h3{
        font-size: 18px;
        font-weight: 600;
    }
    .informationContent div{
        height: 230px;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
    }
    .categoriesContent{
        margin-right: 160px;
    }
    .categoriesContent h3{
        font-size: 18px;
        font-weight: 600;
    }
    .categoriesContent div{
        width: 100px;
        height: 190px;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        font-size: 16px;
    }
    .contactContent{
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        height: 150px;
    }
    .contactContent div{
        width: 230px;
    }
    
`;
