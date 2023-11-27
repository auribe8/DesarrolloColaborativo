import React from 'react';
//import '../componentes/css/styles';
//import img from './img/estudihambre';
import MyImageEstudiHambre from '../components/imgsss/imgEstudihambre';
import Image from 'next/image';

type bodyt = {
    name?: String
}

function bodyIndex(params:bodyt) {
    return (
    <div>
    <div data-spy="scroll" data-target=".fixed-top">
    
    <header id="header" className="header">
        <div className="header-content">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="text-container">
                            <h1>APRENDE <span id="js-rotating">REDES, PROGRAMACIÓN, DISEÑO</span></h1>
                            <p className="p-heading p-large">La facultad de ingenierías y tecnología tiene mucho que aportar para tu aprendizaje. Acércate al edificio de talleres.</p>
                            <a className="btn-solid-lg page-scroll" href="#contacto">DESCUBRIR</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </header>
    
                        <div className="button-container">
                            <a className="btn-solid-reg page-scroll" href="logins.jsp">Login</a>
                        </div>
    
    <div id="alumnosyprofes" className="cards-2">
        <div className="container">
            <div className="row">
                <div className="col-lg-12">
                    <div className="section-title">ALUMNOS Y PROFESORES</div>
                    <h2>Conoce nuestro equipo<br/>Sé parte de él</h2>
                </div>
            </div>
            <div className="row">
                <div className="col-lg-12">
                    
                    <div className="card">
                        <div className="card-image">
                            
            <MyImageEstudiHambre/>
                            <img className="img-fluid" src="img/estudihambre.jpg" alt="alternative"/>
                        </div>
                        <div className="card-body">
                            <h3 className="card-title">Alumnos</h3>
                            <p>Cualquier alumno de la facultad de ingenierías y tecnologías puede acceder a los talleres y rentar:</p>
                            <ul className="list-unstyled li-space-lg">
                                <li className="media">
                                    <i className="fas fa-square"></i>
                                    <div className="media-body">Materiales</div>
                                </li>
                                <li className="media">
                                    <i className="fas fa-square"></i>
                                    <div className="media-body">Equipos</div>
                                </li>
                            </ul>
                            <p className="price">Bienvenido</p>
                        </div>
                        <div className="button-container">
                            <a className="btn-solid-reg page-scroll" href="AlumnoPrueba.jsp">Registrar</a>
                        </div>
                    </div>

                    <div className="card">
                        <div className="card-image">
                            <Image className="img-fluid" width={200} height={100} src="/img/profes.jpg" alt="alternative"/>
                        </div>
                        <div className="card-body">
                            <h3 className="card-title">Profesores</h3>
                            <p>Nuestro equipo de expertos tienen acceso a cualquiera de nuestros talleres que necesiten para: </p>
                            <ul className="list-unstyled li-space-lg">
                                <li className="media">
                                    <i className="fas fa-square"></i>
                                    <div className="media-body">Clases</div>
                                </li>
                                <li className="media">
                                    <i className="fas fa-square"></i>
                                    <div className="media-body">Practicas</div>
                                </li>
                            </ul>
                            <p className="price">Bienvenido</p>
                        </div>
                        <div className="button-container">
                            <a className="btn-solid-reg page-scroll" href="ProfesorPrueba.jsp">Registrar</a>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    </div>
    
    <div id="materiales" className="basic-1">
        <div className="container">
            <div className="row">
                <div className="col-lg-5">
                    <div className="text-container">
                        <div className="section-title">MATERIALES</div>
                        <h2>Contamos con todos los materiales que necesitas para tu aprendizaje</h2>
                        <p>Tenemos muchos materiales para que el desarrollo de nuestros alumnos sea el más óptimo. No dudes en solicitarlos.</p>
                        <p className="testimonial-text">"Nuestra misión es que nuestros alumnos tengan todas las herramientas para que su aprendizaje nunca tenga límites, eso es La Salle Bajío."</p>
                        <div className="testimonial-author">Felipe Hernández Palafox</div>
                        <br/>
                        <a className="btn-solid-reg page-scroll" href="MaterialPrueba.jsp">Registrar</a>
                    </div>
                </div>
                <div className="col-lg-7">
                    <div className="image-container">
                       <img className="img-fluid" src="img/switches.png" alt="alternative"/>
                    </div>
                </div>
            </div>
        </div>
    </div>
    
    <div className="cards-1">
        <div className="container">
            <div className="row">
                <div className="col-lg-12">
                    
                    <div className="card">
                        <span className="fa-stack">
                            <span className="hexagon"></span>
                            {/* style="margin-left: 14px; vertical-align: middle; position: relative; text-align: center; width: 70%; line-height: inherit;"  */}
                            <img src="img/switchIcon.png" alt=""/>
                        </span>
                        <div className="card-body">
                            <h4 className="card-title">Switch Cisco</h4>
                            <p>Switches modulares para redes de acceso a campus de mediano y gran tamaño de clase empresarial</p>
                        </div>
                    </div>
                    
                    <div className="card">
                        <span className="fa-stack">
                            <span className="hexagon"></span>
                            {/* style="margin-left: 26px; vertical-align: middle; position: relative; text-align: center; width: 45%; line-height: inherit;"  */}
                            <img src="img/routerIcon.png" alt=""/>
                        </span>
                        <div className="card-body">
                            <h4 className="card-title">Router Cisco</h4>
                            <p>Incluyen analítica avanzada, optimización de aplicaciones, aprovisionamiento automatizado y seguridad incorporada.</p>
                        </div>
                    </div>
                    
                    <div className="card">
                        <span className="fa-stack">
                            <span className="hexagon"></span>
                            {/* style="margin-left: 30px; vertical-align: middle; position: relative; text-align: center; width: 40%; line-height: inherit;"  */}
                            <img src="img/cableIcon.png" alt=""/>
                        </span>
                        <div className="card-body">
                            <h4 className="card-title">Cables cruzados</h4>
                            <p>Tienen una cableado específico diseñado, con una ruta invertida para la transmisión de las señales</p>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    </div>
    
	<div id="talleres" className="filter">
		<div className="container">
            <div className="row">
                <div className="col-lg-12">
                    <div className="section-title">TALLERES</div>
                    <h2>Conoce tus nuevos espacios de aprendizaje</h2>
                </div>
            </div>
            <div className="row">
                <div className="col-lg-12">
                    <div className="grid">
                        <div className="element-item development">
                            <a className="popup-with-move-anim" href="#project-1"><div className="element-item-overlay"><span>Mac</span></div><img src="img/maclab.jpg" alt="alternative"/></a>
                        </div>
                        <div className="element-item development">
                            <a className="popup-with-move-anim" href="#project-2"><div className="element-item-overlay"><span>Redes</span></div><img src="img/salonredes.jpg" alt="alternative"/></a>
                        </div>
                        <div className="element-item design development marketing">
                            <a className="popup-with-move-anim" href="#project-3"><div className="element-item-overlay"><span>Impresión 3D</span></div><img src="img/impresion3d.jpeg" alt="alternative"/></a>
                        </div>
                        <div className="element-item design development marketing">
                            <a className="popup-with-move-anim" href="#project-4"><div className="element-item-overlay"><span>Realidad Virtual</span></div><img src="img/realidad.jpg" alt="alternative"/></a>
                        </div>
                    </div>
                    
                </div>
            </div>
		</div>
    </div>
    
    <div id="rentas" className="accordion">
		<div className="area-1">
		</div><div className="area-2">
            
            
            <div className="accordion-container" id="accordionOne">
                <h2>Renta de materiales</h2>
                <div className="item">
                    <div id="headingOne">
                        <span data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne" role="button">
                            <span className="circle-numbering">1</span><span className="accordion-title">¿Cómo rentar material?</span>
                        </span>
                    </div>
                    <div id="collapseOne" className="collapse show" aria-labelledby="headingOne" data-parent="#accordionOne">
                        <div className="accordion-body">
                            Acércate a la oficina de materiales, se encuentra en el segundo piso del edificio, lleva tu credencial escolar y pregunta por el material.
                        </div>
                    </div>
                </div>
            
                <div className="item">
                    <div id="headingTwo">
                        <span className="collapsed" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo" role="button">
                            <span className="circle-numbering">2</span><span className="accordion-title">¿Quién puede rentar materiales?</span>
                        </span>
                    </div>
                    <div id="collapseTwo" className="collapse" aria-labelledby="headingTwo" data-parent="#accordionOne">
                        <div className="accordion-body">
                            Los alumnos de la facultar de ingenierías y tecnologías, siempre que tengan clases puede solicitar cualquier material. 
                        </div>
                    </div>
                </div>
            
                <div className="item">
                    <div id="headingThree">
                        <span className="collapsed" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree" role="button">
                            <span className="circle-numbering">3</span><span className="accordion-title">¿Cuáles son las reglas al rentar?</span>
                        </span>
                    </div>
                    <div id="collapseThree" className="collapse" aria-labelledby="headingThree" data-parent="#accordionOne">
                        <div className="accordion-body">
                            Cuida los materiales, regrésalos cuando termines de usarlos en el estado en el que se te entregan, sólo úsalos dentro del edificio.
                        </div>
                    </div>
                </div>
                
                            <a href="RentaMPrueba.jsp">
                                <button className="form-control-submit-button">Rentar</button>
                            </a>
            </div>
		</div>
    </div>

	<div className="tabs">
        <div className="area-1">
            <div className="tabs-container">
                <h2>Renta de talleres</h2>
                <br/>
                
                <ul className="nav nav-tabs" id="ariaTabs" role="tablist">
                    <li className="nav-item">
                        <a className="nav-link active" id="nav-tab-1" data-toggle="tab" href="#tab-1" role="tab" aria-controls="tab-1" aria-selected="true"><i className="fas fa-th"></i> Profesor</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" id="nav-tab-2" data-toggle="tab" href="#tab-2" role="tab" aria-controls="tab-2" aria-selected="false"><i className="fas fa-th"></i> Reglas</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" id="nav-tab-3" data-toggle="tab" href="#tab-3" role="tab" aria-controls="tab-3" aria-selected="false"><i className="fas fa-th"></i> Disponible</a>
                    </li>
                </ul>
                
                <div className="tab-content" id="ariaTabsContent">

                    <div className="tab-pane fade show active" id="tab-1" role="tabpanel" aria-labelledby="tab-1">
                        <h4>¿Quién puede rentar un taller?</h4>
                        <p>Cuando los alumnos están dentro de los talleres es necesario que alguien esté a cargo, es por ello que los talleres solo pueden ser rentados por el profesor que vaya a dar la clase o supervisar la práctica.</p>
                        <p>Los profesores que están supervisando no están a cargo de los materiales, eso es responsabilidad de cada alumno. Cualquier duda se pueden comunicar con los encargados: <a className="green page-scroll" href="#contacto">contacto.</a></p>
                        
                        
                    </div>
                    
                    <div className="tab-pane fade" id="tab-2" role="tabpanel" aria-labelledby="tab-2">
                        <ul className="list-unstyled li-space-lg first">
                            <li className="media">
                                <div className="media-bullet">1</div>
                                <div className="media-body"><strong>Responsabilidad</strong>  del taller que se solicita durante la práctica</div>
                            </li>
                            <li className="media">
                                <div className="media-bullet">2</div>
                                <div className="media-body"><strong>Disponibilidad</strong> preguntar al menos un día antes</div>
                            </li>
                            <li className="media">
                                <div className="media-bullet">3</div>
                                <div className="media-body"><strong>Moviliario</strong> cuidar el moviliario y equipos del taller</div>
                            </li>
                        </ul>
                        <ul className="list-unstyled li-space-lg last">
                            <li className="media">
                                <div className="media-bullet">4</div>
                                <div className="media-body"><strong>Horarios</strong> usar los talleres en los horarios solicitados</div>
                            </li>
                            <li className="media">
                                <div className="media-bullet">5</div>
                                <div className="media-body"><strong>Respetar</strong> horarios y espacios por los alumnos y profesores</div>
                            </li>
                            <li className="media">
                                <div className="media-bullet">6</div>
                                <div className="media-body"><strong>Silencio</strong> mantener un volumen moderado en el edificio</div>
                            </li>
                        </ul>
                    </div>
                    
                    <div className="tab-pane fade" id="tab-3" role="tabpanel" aria-labelledby="tab-3">
                        <p><strong>Revisar disponibilidad con antelación</strong> es importante comunicarse con los encargados de los talleres y preguntar sobre la disponibilidad del que esté solicitando, especificando fecha y hora. Se puede comunicar a: <a className="green" href="#contacto">contacto.</a></p>
                        <p><strong>Recomendaciones:</strong> si usted solicita su taller con mayor tiempo hay más posibilidad de que el taller esté disponible en el horario y fecha que lo solicite, le recomendamos solicitar el taller con al menos una semana de anticipación.</p>
                        
                    </div>
                            <a href="RentaTPrueba.jsp">
                                <button className="form-control-submit-button">Rentar</button>
                            </a>
                </div>
            </div>
        </div><div className="area-2"></div>
    </div>
    
    <div id="contacto" className="counter">
        <div className="container">
            <div className="row">
                <div className="col-lg-5 col-xl-6">
                    <div className="image-container">
                    {/* style="width: 570px !important;height: 350px !important;" */}
                         <img src="img/final.jpg"  alt="alternative"/>
                    </div>
                </div>
                <div className="col-lg-7 col-xl-6">
                    <div className="text-container">
                        <div className="section-title">ABOUT</div>
                        <h2>Edificio de talleres para la facultad de ingenierías y tecnologías</h2>
                        <p>Nuestra meta es que los estudiantes cuenten con todo lo necesario para que provechen su potencial al máximo. Nuestro edificio está a tu disposición, podrás encontrar:</p>
                        
                        <div id="counter">
                            <div className="cell">
                                <div className="counter-value number-count" data-count="10">1</div>
                                <div className="counter-info">Talleres</div>
                            </div>
                            <div className="cell">
                                <div className="counter-value number-count" data-count="11">1</div>
                                <div className="counter-info">Materiales</div>
                            </div>
                            <div className="cell">
                                <div className="counter-value number-count" data-count="111">1</div>
                                <div className="counter-info">Equipos</div>
                            </div>
                        </div>
                        <a href="contacto.jsp">
                            <button className="form-control-submit-button">Contacto</button>
                        </a>

                    </div>    
                </div>
            </div>
        </div>
    </div>
    
    <div id="project-1" className="lightbox-basic zoom-anim-dialog mfp-hide">
        <div className="row">
            <button title="Close (Esc)" type="button" className="mfp-close x-button">x</button>
            <div className="col-lg-8">
            {/* style= "width: 500px !important; height: 600px !important;" */}
                <img className="" src="img/maclab.jpg" alt="alternative"/>
            </div>
            <div className="col-lg-4">
                <h3>Laboratorio de Mac</h3>
                <hr className="line-heading"/>
                <p>En este laboratorio podrás realizar tus trabajos así como proyectos que necesites. </p>
                <p>Contamos con equipos de última generación para la realización de los trabajos y proyectos necesarios que requieran el uso de estos dispositivos.</p>
                <div className="testimonial-container">
                    <p className="testimonial-text">La mejor manera de aprender un nuevo lenguaje es a base de prueba y error, no debemos de rendirnos por sentirnos abrumados por nuestros errores.</p>
                    <p className="testimonial-author">Stephen King</p>
                </div>
                <a className="btn-solid-reg" href="TallerPrueba.jsp">TALLERES</a> <a className="btn-outline-reg mfp-close as-button" href="#projects">BACK</a> 
            </div>
        </div>
    </div>
    
    <div id="project-2" className="lightbox-basic zoom-anim-dialog mfp-hide">
        <div className="row">
            <button title="Close (Esc)" type="button" className="mfp-close x-button">x</button>
            <div className="col-lg-8">
            {/* style= "width: 500px !important; height: 600px !important;" */}
                <img className="" src="img/salonredes.jpg" alt="alternative"/>
            </div>
            <div className="col-lg-4">
                <h3>Taller de redes</h3>
                <hr className="line-heading"/>
                <p>En este laboratorio podrás realizar tus trabajos así como proyectos que necesites.</p>
                <p>Contamos con certificaciones de Cisco para tener los mejores equipos disponibles para todos nuestros alumnos.</p>
                <div className="testimonial-container">
                    <p className="testimonial-text">Si quieres encontrar los secretos del universo, piensa en términos de energía, frecuencia y vibración.</p>
                    <p className="testimonial-author">Nikola Tesla</p>
                </div>
                <a className="btn-solid-reg" href="TallerPrueba.jsp">TALLERES</a> <a className="btn-outline-reg mfp-close as-button" href="#projects">BACK</a> 
            </div>
        </div>
    </div>
    
    <div id="project-3" className="lightbox-basic zoom-anim-dialog mfp-hide">
        <div className="row">
            <button title="Close (Esc)" type="button" className="mfp-close x-button">x</button>
            <div className="col-lg-8">
                {/* style= "width: 500px !important; height: 600px !important;" */}
                <img className="" src="img/impresion3d.jpeg" alt="alternative"/>
            </div>
            <div className="col-lg-4">
                <h3>Taller de Impresion en 3D</h3>
                <hr className="line-heading"/>
                <p>En este laboratorio podrás realizar tus trabajos así como proyectos que necesites.</p>
                <p>Aquí podrás experimentar con los mejores tipos de dispositivos, así como los más actualizados, contamos con todo tipo de maquinaria para realizar tus ideas realidad.</p>
                <div className="testimonial-container">
                    <p className="testimonial-text">Nunca me he tenido por ingeniero o inventor, solamente me considero un promotor y agitador de ideas.</p>
                    <p className="testimonial-author">Andres Manueñ Lopez Obrador</p>
                </div>
                <a className="btn-solid-reg" href="TallerPrueba.jsp">TALLERES</a> <a className="btn-outline-reg mfp-close as-button" href="#projects">BACK</a> 
            </div>
        </div>
    </div>
    
    <div id="project-4" className="lightbox-basic zoom-anim-dialog mfp-hide">
        <div className="row">
            <button title="Close (Esc)" type="button" className="mfp-close x-button">x</button>
            <div className="col-lg-8">
            {/* style= "width: 500px !important; height: 600px !important;" */}
                <img className="" src="img/realidad.jpg" alt="alternative"/>
            </div>
            <div className="col-lg-4">
                <h3>Taller de realidad virtual</h3>
                <hr className="line-heading"/>
                <p>En este laboratorio podrás realizar tus trabajos así como proyectos que necesites.</p>
                <p>Para llegar a ser los mejores siempre estaremos dispuestos a apoyar a nuestros alumnos, aquí encontrarás la manera en crear un mundo tal y como tú lo deseas.</p>
                <div className="testimonial-container">
                    <p className="testimonial-text">Lo que ocurría en el mundo virtual, en el que la belleza existía para ser objeto de odio y vejación, era más sugestivo que lo que ocurría en el mundo real, donde la belleza no parecía tener ningún propósito.</p>
                    <p className="testimonial-author">Jonathan Franzen</p>
                </div>
                <a className="btn-solid-reg" href="TallerPrueba.jsp">TALLERES</a> <a className="btn-outline-reg mfp-close as-button" href="#projects">BACK</a> 
            </div>
        </div>
    </div>    

    </div>
    </div>

    )
}
export default bodyIndex;