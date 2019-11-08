import React from 'react';
import './Carousel.css'

function Carousel(){
    return(
        <header>
        <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
        <div class="carousel-inner" role="listbox">
            
            <div class="carousel-item active">
            <img className="imagen d-block w-100" src="http://www.gajujuy.gob.ar/wp-content/themes/gaJujuy/images/slider/hornocal.jpg" alt=""/>
                <div id="carousel-info" class="carousel-caption d-none d-md-block">
                    <h3>Serranías del Hornocal</h3>
                    <p>Humahuaca</p>
                </div>
            </div>
            
            <div class="carousel-item">
            <img className="imagen d-block w-100" src="http://www.gajujuy.gob.ar/wp-content/themes/gaJujuy/images/slider/cerro_7colores.jpg" alt=""/>
                <div id="carousel-info" class="carousel-caption d-none d-md-block">
                    <h3>Cerro de 7 colores</h3>
                    <p>Purmamarca</p>
                </div>
            </div>
            
            <div class="carousel-item">
                <img className="imagen d-block w-100" src="http://www.gajujuy.gob.ar/wp-content/themes/gaJujuy/images/slider/catedral.jpg" alt=""/>
                <div id="carousel-info" class="carousel-caption d-none d-md-block">
                    <h3>Iglesia Catedral</h3>
                    <p>San Salvador de Jujuy</p>
                </div>
            </div>
            
            <div class="carousel-item">
            <img className="imagen d-block w-100" src="http://www.gajujuy.gob.ar/wp-content/themes/gaJujuy/images/slider/salinas.jpg" alt=""/>
                <div id="carousel-info" class="carousel-caption d-none d-md-block">
                    <h3>Salinas Grandes</h3>
                    <p>Tumbaya</p>
                </div>
            </div>
        </div>
        </div>
    </header>   
    );
}

export default Carousel;