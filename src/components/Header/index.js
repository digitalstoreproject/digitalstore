import SearchIcon from '../../assets/images/searchIcon.svg';
import LogoMain from '../../assets/images/logoMain.svg'
import LoginButton from '../../assets/images/loginButton.svg'
import ShoppingCart from '../../assets/images/shoppingCart.svg'
import { HeaderContainer } from './styles';


function Header() {
  return (
    <HeaderContainer>
        <div className='topHeaderContainer'>
            <div className='logoContainer'>
                <img src={LogoMain} alt="Main Logo" />
            </div>
            <div className='searchBarContainer'>
                <input className='inputSearch' type='search' placeholder='Pesquisar produto...'></input>
                <img className='searchIcon' src={SearchIcon} alt='Search Icon' />
            </div>
            <a className='registerText' href="/">Cadastre-se</a>
            <img className='buttonLogin' src={LoginButton} alt='Login Button' />
            <img className='buttonShoppingCart' src={ShoppingCart} alt='Shopping Cart' />
        </div>
        <nav>
            <a href="/">Home</a>
            <a href="/">Produtos</a>
            <a href="/">Categorias</a>
            <a href="/">Meus Pedidos</a>
        </nav>
    </HeaderContainer>
  );
}

export default Header;
