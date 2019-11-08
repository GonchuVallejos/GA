import React from 'react';
import './Informacion_PC.css';

function Informacion_PC() {
    return(
        <div className="Informacion">
            <div class="container">
                <h1 class="mt-4 mb-3"> Presupuesto</h1>
                <ol class="breadcrumb">
                <li class="breadcrumb-item">
                    <a className="Referencia" href="/">Inicio</a>
                </li>
                <li class="breadcrumb-item active">Información</li>
                </ol>
                <div class="mb-4" id="accordion" role="tablist" aria-multiselectable="true">
                <div class="card">
                    <div class="card-header" role="tab" id="headingOne">
                    <h5 class="mb-0">
                        <a className="Collapse" data-toggle="collapse" data-parent="#accordion" href="#collapseZero" aria-expanded="true" aria-controls="collapseZero">Presupuesto ciudadano</a>
                    </h5>
                    <small>En Jujuy. Tu presupuesto</small>
                    </div>
                    <div id="collapseZero" class="collapse show" role="tabpanel" aria-labelledby="headingZero">
                    <div class="card-body">
                        <section class="main-info container">
                            <div class="row">
                                <div class="col-md-6">
                                    <h3 className="Titulos">Presupuesto Ciudadano</h3>
                                    <p>El Presupuesto Ciudadano es una herramienta que el gobierno pone a disposición de las personas para el entendimiento e interpretación del presupuesto de la provincia de una forma no técnica y asistida visualmente.</p>
                                    <p>A través del Presupuesto Ciudadano, las personas podrán familiarizarse con conceptos de finanzas públicas, conociendo cómo se obtienen e invierten los recursos del Gobierno de Jujuy.</p>
                                    <br/>
                            </div>
                            <div class="col-md-6">
                                <div class="border-important">
                                <p class="text-title">Ingresos</p>
                                <p class="number-title">$ 57.674.216.046,00</p>
                                <hr/>
                                <p class="number-title">$ 62.101.563.499,00</p>
                                <p class="text-title">Gastos</p>
                                </div>
                                
                            </div>
                            </div>
                        </section>
                    </div>
                    </div>
                </div>
                <div class="card">
                    <div class="card-header" role="tab" id="headingOne">
                    <h5 class="mb-0">
                        <a className="Collapse" data-toggle="collapse" data-parent="#accordion" href="#collapseOne" aria-expanded="true" aria-controls="collapseOne">Presupuesto</a>
                    </h5>
                    <small>Te explicamos qué es el Presupuesto y para qué le sirve al Gobierno.</small>
                    </div>
                    <div id="collapseOne" class="collapse" role="tabpanel" aria-labelledby="headingOne">
                    <div class="card-body">
                        <section class="main-info container">
                            <div class="row">
                                <div class="col-md-12">
                                    <h3 className="Titulos">¿Qué es el Presupuesto?</h3>
                                    <p>El Presupuesto Provincial es la LEY anual que sanciona Legislatura, a partir de previsiones de los ingresos que recibirá el Gobierno  y cómo se aplicarán para satisfacer las necesidades de la población, justicia y educación, entre otras.</p>
                                    <br/>
                                    <h3 className="Titulos">¿Para qué sirve?</h3>
                                    <p>El Presupuesto es el principal instrumento de planificación del Gobierno, en el que se explicitan las prioridades y políticas que van a guiar el accionar del mismo durante el año calendario. Por lo tanto permite conocer:</p>
                                    <ul>
                                        <li>¿Cuáles serán los principales destinos del gasto?</li>
                                        <li>¿En qué se va a gastar?</li>
                                        <li>¿Qué organismo gastará?</li>
                                        <li>¿Cuál será el origen de los recursos?</li>
                                    </ul>
                                    <br/>
                                    <h3 className="Titulos">¿Qué es el Presupuesto Ciudadano?</h3>
                                    <p>El Presupuesto Ciudadano tiene por objetivo acercar a la ciudadanía una importante herramienta que permita una mejor comprensión del proceso de asignación de recursos por parte del Estado.</p>				
                                </div>
                                <div class="col-md-4">
                                </div>
                            </div>
                        </section>
                    </div>
                    </div>
                </div>
                <div class="card">
                    <div class="card-header" role="tab" id="headingTwo">
                    <h5 class="mb-0">
                        <a className="Collapse" data-toggle="collapse" data-parent="#accordion" href="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">Ingresos</a>
                    </h5>
                    <small>Te explicamos cuales son los Ingresos de la provincia y cómo se obtienen.</small>
                    </div>
                    <div id="collapseTwo" class="collapse" role="tabpanel" aria-labelledby="headingTwo">
                    <div class="card-body">
                        <section class="main-info container">
                            <div class="row">
                                <div class="col-md-4">
                                    <h3 className="Titulos">¿Qué son los Ingresos?</h3>
                                    <p>Son los recursos que capta el sector público para realizar sus actividades.</p>
                                    <p>La mayor parte de los ingresos provinciales proviene de la recaudación de los impuestos. Sin embargo, la Provincia percibe ingresos por diversas otras vías.</p>
                                    <p>Todos los ingresos con los que cuenta la Provincia se clasifican en Ingresos Corrientes y en Ingresos de Capital.</p>
                                </div>
                                <div class="col-md-8">
                                    <h3 className="Titulos">Tipos de Ingresos</h3>
                                    <p>Los <strong>Ingresos Corrientes</strong> son aquellos que se perciben por actividades ordinarias y relacionadas con el normal funcionamiento del Estado, son Ingresos Permanentes del Estado. Se obtienen de modo regular o periódico y no alteran de manera inmediata la situación patrimonial del Estado.</p><br/>
                                    <p>Los <strong>Ingresos de Capital</strong> son los recursos financieros que se obtienen de modo eventual y que alteran la situación patrimonial del Estado. Provienen de la venta de activos (inmuebles, terrenos, máquinas), las amortizaciones por los préstamos concedidos (reembolsos), la venta de acciones del Estado en empresas, ingresos por intereses de depósitos y otros ingresos de Capital.</p>
                                </div>
                            </div>
                            <div class="row">
                                <div class="cal-md-12"><hr/></div>
                            </div>
                            <div class="row">
                                <div class="col-md-12">
                                    <h3 className="Titulos">Ingresos Corrientes</h3>
                                </div>
                                <div class="col-md-6">
                                    <p>Dichos ingresos provienen de la percepción de impuestos, Tasas, Contribuciones, Venta de Bienes, Prestación de Servicios, Rentas de la Propiedad, Multas y Sanciones y Otros. Se clasifican en:</p>
                                    <p><strong>Ingresos Impositivos:</strong> Constituyen la principal fuente de ingresos para el Estado Provincial. Tienen su origen en la recaudación de impuestos. Al mismo tiempo pueden ser de origen provincial, como lo son el Impuesto a los Ingresos Brutos o inmobiliario, o de origen nacional y que retornan a la provincia por Ley de Coparticipación, como lo son el IVA e Impuesto a las ganancias.</p>
                                    <p><strong>Ingresos No Impositivos:</strong> Se incluyen en esta clasificación todos los ingresos recaudados por la Provincia que no constituyen impuestos, sino tasas por utilización de bienes o servicios públicos, así como los derechos, aranceles, multas, etc.</p>
                                </div>
                                <div class="col-md-6">
                                    <p><strong>Transferencias Corrientes:</strong> Dentro de este apartado se registran los recursos que son recibidos por la provincia y que no constituyen una compensación, ni generan la obligacion de ser devueltos por la Provincia. Son transferidos por otros niveles de gobierno para financiar gastos corrientes, por lo gral. tienen una asignación específica por ley. </p>
                                    <p><strong>Venta de Bienes y Servicios:</strong> Se incluyen aquí todos los ingresos que se reciben como contraprestación por la venta de bienes o servicios producidos por dependencias de la provincia, tales como el Boletín Oficial, Policía de La Provincia, etc.</p>
                                    <p><strong>Rentas de la Propiedad:</strong> Dentro de esta clasificación se registran los ingresos provenientes de intereses por préstamos otorgados anteriormente, los alquileres percibidos por la Provincia y la renta de las inversiones financieras.</p>
                                </div>
                            </div>
                            <div class="row">
                                <div class="cal-md-12"><hr/></div>
                            </div>
                            <div class="row">
                                <div class="col-md-12">
                                    <h3 className="Titulos">Ingresos de Capital</h3>
                                </div>
                                <div class="col-md-6">
                                    <p>Los Ingresos de Capital se clasifican en Transferencias de Capital, Recupero de Préstamos y Venta de Activos:</p>
                                    <p><strong>Transferencias de Capital:</strong> Son recursos que recibe la provincia que no constituyen una compensación sino que son transferidos por otros organismos provinciales o nacionales ni generan la obligación de ser devueltos por la Provincia, y cuyo destino es financiar inversiones, obras públicas, infraestructura, etc. </p>
                                </div>
                                <div class="col-md-6">
                                    <p><strong>Recupero de Préstamos:</strong> Son los ingresos que se obtienen por la amortización de préstamos otorgados con anterioridad.</p>
                                    <p><strong>Venta de Activos:</strong> Se registran aquí los ingresos obtenidos por la venta de edificios y terrenos, por la venta de marcas y patentes, por la venta de acciones o de otros activos financieros.</p>
                                </div>
                            </div>
                        </section>
                    </div>
                    </div>
                </div>
                <div class="card">
                    <div class="card-header" role="tab" id="headingThree">
                    <h5 class="mb-0">
                        <a className="Collapse" data-toggle="collapse" data-parent="#accordion" href="#collapseThree" aria-expanded="false" aria-controls="collapseThree">Gastos</a>
                    </h5>
                    <small>Te explicamos cuales son los Ingresos de la provincia y cómo se obtienen.</small>
                    </div>
                    <div id="collapseThree" class="collapse" role="tabpanel" aria-labelledby="headingThree">
                    <div class="card-body">
                        <section class="main-info container">
                            <div class="row">
                                <div class="col-md-12">
                                    <h3 className="Titulos">¿Qué es el Gasto Público?</h3>
                                    <p>Son gastos públicos las erogaciones generalmente ordinarias que realiza el Estado en virtud de la ley para cumplir sus fines consistentes en la satisfacción de necesidades públicas.</p>
                                    <p>Las erogaciones que realizan los organismos públicos para adquirir bienes y servicios, o las transferencias de recursos a los diferentes agentes económicos forman en conjunto el Gasto Público. Todas estas transacciones tienen lugar con el fin de llevar adelante las acciones que tienen que ver con la provisión de bienes y servicios públicos, las metas que se impone el Estado y las políticas que pone en ejecución.</p>
                                    <p>A los fines de analizar de qué manera se asignan los recursos de la provincia, es necesario abordar el gasto en función de algún criterio de clasificación. Cada clasificación del gasto consiste en una forma de ordenar y presentar la información presupuestaria.</p>
                                </div>
                            </div>
                            <div class="row">
                                <div class="cal-md-12"><hr/></div>
                            </div>
                            <div class="row">
                                <div class="col-md-12">
                                    <h3 className="Titulos">Clasificación por naturaleza del gasto</h3>
                                </div>
                                <div class="col-md-3">
                                    <p>Resulta útil clasificar las transacciones que realiza el sector público por su naturaleza, es decir, responder a la pregunta ¿En qué se gasta? Para ello dividiremos a los gastos en Corrientes y de Capital.</p>
                                </div>
                                <div class="col-md-9">
                                    <p>Los <strong>Gastos Corrientes</strong> son gastos cotidianos o normales que el estado debe realizar en forma indispensable para el correcto y normal desenvolvimiento de los servicios públicos y de la administración en general. Entre estos encontramos gastos de consumo (reparación de edificios, renovación de bienes muebles, etc.) o retribuciones por servicios contratados (sueldos, salarios, gastos bancarios, intereses de la deuda, etc.).</p>
                                    <p>Los <strong>Gastos de Capital</strong> son todas aquellas erogaciones del gobierno que significan un incremento del patrimonio público. Pueden ser erogaciones destinadas a la adquisición, a la producción o a la construcción de bienes materiales o inmateriales, o inversiones financieras que sirven como instrumentos para la producción de bienes y servicios.</p>
                                </div>
                            </div>
                            <div class="row">
                                <div class="cal-md-12"><hr/></div>
                            </div>
                            <div class="row">
                                <div class="col-md-12">
                                    <h3 className="Titulos">Gastos Corrientes</h3>
                                </div>
                                <div class="col-md-6">
                                    <p>En esta clasificación se incluyen:</p>
                                    <p>La partida de <strong>Personal</strong>, que incluye los salarios y las contribuciones patronales del personal en relación de dependencia de la Provincia, tales como médicos, docentes, policías, personal penitenciario, personal administrativo, jueces, agentes públicos, etc.</p>
                                    <p>Las partidas de <strong>Bienes y Servicios</strong>, comprende los gastos por materiales, suministros y servicios necesarios para el funcionamiento del estado, relacionadas con la producción de bienes y servicios públicos.</p>
                                    <p>La partida <strong>Intereses y Gastos Financieros</strong> es compuesta por los pagos de intereses y gastos financieros originados en préstamos, emisión de títulos y/o bonos, y por deudas con proveedores y contratistas.</p>
                                </div>
                                <div class="col-md-6">
                                    <p>La partida de <strong>Transferencias Corrientes</strong> se refiere a aquellas erogaciones que no tienen contraprestación y cuyos importes no serán reintegrados. Se incluyen aquí, entre otros, la Coparticipación Impositiva y el Apoyo Financiero a Municipios, las subvenciones estatales a instituciones de enseñanza de gestión privada, las transferencias para capacitación, promoción o inserción laboral, etc.</p>
                                    <p>La partida <strong>A Clasificar</strong> constituye una reserva de crédito presupuestario para gastos contingentes que puedan suceder dentro del ejercicio.</p>
                                </div>	
                            </div>
                            <div class="row">
                                <div class="cal-md-12"><hr/></div>
                            </div>
                            <div class="row">
                                <div class="col-md-12">
                                    <h3 className="Titulos">Gastos de Capital</h3>
                                </div>
                                <div class="col-md-6">
                                    <p>Las <strong>Transferencias</strong> también pueden ser destinadas a financiar gastos de capital. Entre éstas se incluyen el Fondo Federal Solidario para Municipios y Comunas, el Fondo de Infraestructura para Municipios y Comunas, los planes de vivienda, el Programa de Asistencia Municipal, entre otros.</p>
                                    <p>Las partidas de <strong>Inversión Real</strong> se componen de las erogaciones destinadas a la adquisición producción o construcción de bienes de capital, es decir, las edificaciones, instalaciones, construcciones y equipos que sirven para producir otros bienes y servicios, que no se agotan en el primer uso y que tienen una vida útil superior a un año. Incluye los gastos por materiales, mano de obra e insumos cuando los bienes se producen por cuenta propia.</p>
                                </div>
                                <div class="col-md-6">
                                    <p>La partida <strong>Bienes Preexistentes</strong> hace alusión a la adquisición de inmuebles y arreglos y mantenimiento de los mismos.</p>
                                    <p>A la partida <strong>Inversión Financiera</strong> la componen las erogaciones por otorgamiento de préstamos, compra de valores de crédito, aportes de capital, acciones, títulos y bonos públicos o privados.</p>
                                    <p>La partida <strong>Otros gastos de capital</strong> incluye las erogaciones que no pueden ser clasificadas dentro de las anteriores descriptas.</p>
                                </div>
                            </div>
                        </section>
                    </div>
                    </div>
                </div>
                <div class="card" >
                    <div class="card-header" role="tab" id="headingFour">
                    <h5 class="mb-0">
                        <a className="Collapse" data-toggle="collapse" data-parent="#accordion" href="#collapseFour" aria-expanded="false" aria-controls="collapseFour">Deuda</a>
                    </h5>
                    <small>Te explicamos que tipo de deudas tiene el gobierno y como se generan.</small>
                    </div>
                    <div id="collapseFour" class="collapse" role="tabpanel" aria-labelledby="headingFour">
                    <div class="card-body">
                        <section class="main-info container">
                            <div class="row">
                                <div class="col-md-12">
                                    <h3 className="Titulos">Uso del Crédito</h3>
                                    <p>La posibilidad de acceder a préstamos constituye un elemento muy importante en la administración fiscal. Utilizado racionalmente, el crédito permite llevar adelante un universo de proyectos que de otro modo no sería posible que el Estado encarara.</p>
                                    <p>El endeudamiento se encuentra contemplado en el Presupuesto Provincial. En la Ley de Presupuesto, la Legislatura de la Provincia establece un tope máximo para cada año por el cual la Provincia puede tomar deuda, es decir, tomar fondos prestados con el compromiso de devolverlos en el futuro.</p>
                                    <p>La deuda que toma la Provincia puede ser clasificada según el tiempo en el que se compromete a devolver los fondos.</p>
                                </div>
                                <div class="col-md-6">
                                    <h3 className="Titulos">De Corto Plazo</h3>
                                    <p>Es el endeudamiento que se asume y se cancela dentro del mismo año. Tiene por finalidad cubrir las deficiencias temporales de caja que pueden tener origen en cuestiones estacionales. Sus montos son relativamente pequeños. Se instrumenta a través de la emisión de “Letras de Tesorería”, por un monto autorizado en el Presupuesto. Para el año 2017, el presupuesto en su artículo 35 autoriza al poder ejecutivo a emitir Letras del tesoro por un monto máximo del 8% del Presupuesto anual.</p>
                                    <p>Además, el art. 19 de la ley de presupuesto fija el monto máximo autorizado al Ministerio de Hacienda y Finanzas para hacer uso transitorio del crédito y/o de adelantos en cuenta corriente para cubrir deficiencias estacionales de caja, en el importe equivalente al seis por ciento (6%) del total presupuestado.</p>
                                </div>
                                <div class="col-md-6">
                                    <h3 className="Titulos">De Largo Plazo</h3>
                                    <p>Es el endeudamiento que se asume con el compromiso de cancelarlo en más de un año de plazo. Tiene por finalidad financiar los proyectos de mayor envergadura, que serán incorporados al patrimonio del estado y significan una mejora en los servicios y beneficios para los ciudadanos.</p>
                                </div>
                            </div>
                        </section>
                    </div>
                    </div>
                </div>
                </div>
            </div>
        </div>
    );
}
export default Informacion_PC;