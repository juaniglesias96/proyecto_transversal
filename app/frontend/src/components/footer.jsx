import React from 'react';
import './footer.css';
import { appIcons, socialIcons } from '../iconData'; // Importa los íconos

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <div className="download-apps">
                    <span>Descarga nuestra app</span>
                    {appIcons.map((icon, index) => (
                        <img key={index} src={icon.src} alt={icon.alt} />
                    ))}
                </div>
                <div className="social-media">
                    <span>Síguenos en:</span>
                    {socialIcons.map((icon, index) => (
                        <img key={index} src={icon.src} alt={icon.alt} />
                    ))}
                </div>
            </div>
            <div className="terms">
                <p>Copyright © 2024</p>
                <p>
                    <a href="/terminos">Términos y condiciones</a> | <a href="/privacidad">Privacidad</a>
                </p>
            </div>
        </footer>
    );
};

export default Footer;
