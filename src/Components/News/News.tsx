import React from 'react';
import style from './Card.module.css'

const News = () => {
    return <div className={style.wrapper}>
        <div className={style.profil}>

            <div className={style.bgImage}/>
            <img className={style.avatar} src="https://pm1.narvii.com/6802/b775c9e1266f61a61737324b45e0975ed22d7328v2_hq.jpg"/>

            <div className={style.text}>
                <div>
                    <p>status :</p>
                    <p>Name :</p>
                    <p>Age :</p>
                    <p>Web Site:</p>
                </div>
                <div>
                    <p>Free</p>
                    <p>Filimonov Kostya</p>
                    <p>24</p>
                    <p>Github</p>
                </div>
            </div>

            <div className={style.iletisim}>
                <a target="_blank" href="">
                    <img draggable="false" className={style.sayfalar} src=""/></a>

                <a target="_blank" href=""><img draggable="false" className={style.sayfalar} src=""/></a>

                <a target="_blank" href="https://www.facebook.com/devrimos"><img className={style.sayfalar} src="https://is5-ssl.mzstatic.com/image/thumb/Purple125/v4/9e/7d/ec/9e7dec5a-a2f3-a348-3ef0-04ba0797138b/Icon-Production-0-0-1x_U007emarketing-0-0-0-7-0-0-sRGB-0-0-0-GLES2_U002c0-512MB-85-220-0-0.png/1200x630wa.png"/></a>

                <a target="_blank" href="https://www.instagram.com/devrim0s"><img draggable="false" className={style.sayfalar} src=""/></a>

                <a target="_blank" href="https://www.twitter.com/devrim0s"><img draggable="false" className={style.sayfalar} src=""/></a>
            </div>
        </div>


    </div>
};

export default News;
