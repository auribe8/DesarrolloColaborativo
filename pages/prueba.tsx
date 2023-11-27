import React from 'react';
import MyCustButton from '../components/button';
import MyBodyIndex from '../components/bodyIndex';
import MyHeader from '../components/commons/header';
import MyFooter from '../components/commons/footer';
import '../public/css/bootstrap.css'
//import '../public/css/fontawesome-all.css'
import '../public/css/magnific-popup.css'
import '../public/css/styles.css'
import '../public/css/swiper.css'

type LoginPRma = {
    name: String,
    password: String,
    novio?: String,
    onClick: ()=>void
}
function Prueba({ name, password, novio,onClick }: LoginPRma) {
    return (
        <div>
            <MyHeader/>
            <MyBodyIndex/>
            Soy el {name} con password {password}
            {novio && <div className='Pitercita'>Mi noviwcito es el wen {novio}</div>}
            <button onClick={onClick}></button>
            <MyCustButton/>
            <MyFooter/>
        </div>
    )
}
export default Prueba;

