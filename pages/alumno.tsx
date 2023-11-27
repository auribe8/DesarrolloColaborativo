import React from 'react';
//import '../componentes/css/styles';
import MyHeader from '../components/commons/header';
import MyFooter from '../components/commons/footer';
import MyBotonesNavegacionAlumno from '../components/commons/botonesNavegacionAlumno';
import MyListadoAlumno from '../components/alumno/listadoAlumnos';


function alumno() {
    return (
    <div>
    <div>
            <MyHeader/>

            <header id="header" className="ex-header">
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                    <h1>Control de alumnos</h1>
                </div>
            </div>
        </div>
    </header>
    

    <div className="ex-basic-1">
        <div className="container">
            <div className="row">
                <div className="col-lg-12">
                {/* style="text-align: left;" */}
                    <div className="breadcrumbs">
                        <a href="index.html">Home</a><i className="fa fa-angle-double-right"></i><span>Alumnos</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
    

            <MyBotonesNavegacionAlumno/>
            <MyListadoAlumno/>
            <MyFooter/>
        
    </div>
    </div>

    )
}
export default alumno;