import React from 'react';
import './Footer.css';

function Footer(){
    return(
        <footer class="ng-scope">
            <div class="footer-top"></div>
            <div class="footer-bottom">
            <div class="row">
                <div class="col-md-4">
                <div class="contacto-redes-footer">
                    <h5>Direccion Provincial de Transparencia y Gobierno Abierto</h5>
                    <hr></hr>
                        <h4>
                            <p>Sarmiento N° 174 - Dpto 12A</p>
                            <p>San Salvador de Jujuy (4600)</p>
                            <p>0388-4239452 | 388 446-2864</p>
                            <p>info@gajujuy.gob.ar</p>
                        </h4>        
                    <hr></hr>
                </div>
                </div>
                <div class="col-md-4 ng-scope" ng-controller="NewsCtrl">
                </div>
                <div class="col-md-4">
                    <h5>
                        REDES SOCIALES
                    </h5>
                    <div class="contacto-redes-footer">
                        <hr/>
                        <div class="redes-sociales">
                            <a href="http://" target="_blank">
                                <span class="icon-facebook"></span>
                            </a>
                            <a href="http://" target="_blank">
                                <span class="icon-twitter"></span>
                            </a>
                            <a href="http://" target="_blank">
                                <span class="icon-instagram"></span>
                            </a>
                            <a href="https://www.youtube.com/channel/UCbzyTBB2iSl5JW3VftriTCw?view_as=subscriber" target="_blank">
                                <span class="icon-youtube"></span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            </div>
            <div class="copyright">Direccion Provincial de Transparencia y Gobierno Abierto &copy; 2019</div>
        </footer>
    );
};

export default Footer;