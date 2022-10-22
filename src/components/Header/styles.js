import styled from 'styled-components';

export const HeaderContainer = styled.header`
    font-family: 'Inter', sans-serif;
    width: 100%;
    display: flex;
    justify-content: space-around;
    flex-direction: column;
    padding: 34px 100px;
    
    .topHeaderContainer{
        width: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    .logoContainer{
        display: flex;
        cursor: pointer;
    }
    .searchBarContainer{
        display: flex;
        width: 40%;
        position: relative;
        align-items: center;
    }
    .inputSearch{
        width: 100%;
        padding: 16px 24px;
        background-color: #47474710;
        border: none;
        border-radius: 8px;
    }
    .searchIcon{
        position: absolute;
        right: 3%;
        cursor: pointer;
    }
    .registerText{
        color: #474747;
        font-size: 16px;
        font-weight: 400;
        letter-spacing: 0.75px;
        font-family: 'Inter', sans-serif;
        text-decoration: none;
    }
    .registerText:hover{
        text-decoration: underline;
        color: #C92071;
    }
    .buttonLogin{
        cursor: pointer;
    }
    .buttonLogin:hover {
        width: 114px;
        height: 40px;
        opacity: 0.9;
    }
    .buttonShoppingCart{
        cursor: pointer;
    }
    .buttonShoppingCart:hover{
        opacity: 0.8;
    }
    nav{
        padding-top: 40px;
    }
    nav a{
        margin-right: 32px;
        text-decoration: none;
        color: #474747;
        letter-spacing: 0.75px;
    }
    nav a:hover{
        text-decoration: underline;
        color: #C92071;
    }
`;
