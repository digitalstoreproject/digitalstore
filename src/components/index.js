import { FooterContainer } from './styles';
import LogoMainWhite from '../assets/images/mainLogoWhite.svg'
import FacebookIcon from '../assets/images/facebookIcon.svg'
import InstagramIcon from '../assets/images/instagramIcon.svg'
import TwitterIcon from '../assets/images/twitterIcon.svg'

function Footer() {
    return (
        <FooterContainer>
            <div className='footerContent'>
                <div className='leftSideFooterContent'>
                    <img className='logoImg' src={LogoMainWhite} alt='Main Logo White'></img>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.</p>
                    <div className='iconsContent'>
                        <img className='facebookIcon' src={FacebookIcon} alt="Facebook icon" />
                        <img className='instagramIcon' src={InstagramIcon} alt="Instagram icon" />
                        <img className='twitterIcon' src={TwitterIcon} alt="Twitter icon" />
                    </div>
                </div>
                <div className='informationContent'>
                    <h3>
                        Informação
                    </h3>
                    <div>
                    <p>Sobre Drip Store</p>
                        <p>Segurança</p>
                        <p>Wishlist</p>
                        <p>Blog</p>
                        <p>Trabalhe conosco</p>
                        <p>Meus Pedidos</p>
                    </div>
                </div>
                <div className='categoriesContent'>
                    <h3>Categorias</h3>
                    <div>
                        <p>Camisetas</p>
                        <p>Calças</p>
                        <p>Bonés</p>
                        <p>Headphones</p>
                        <p>Tênis</p>
                    </div>
                </div>
                <div className='contactContent'>
                    <h3>Contato</h3>
                    <div>
                        <p>Av. Santos Dumont, 1510 - 1 andar - Aldeota, Fortaleza - CE, 60150-161</p>
                    </div>
                    <div>
                        <p>(85) 3051-3411</p>
                    </div>
                </div>
            </div>
            <div className='copyrightContainer'>
                <p>@ 2022 Digital College</p>
            </div>
        </FooterContainer>
    );
  }
  
  export default Footer;
