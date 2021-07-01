import React from 'react';
import style from './Card.module.css'

const News = () => {
    return <div className={style.wrapper}>
        <div className={style.profil}>

            <div className={style.bgImage}/>
      <img className={style.avatar} src="https://pm1.narvii.com/6802/b775c9e1266f61a61737324b45e0975ed22d7328v2_hq.jpg"/>

            <div className={style.text}>
                <a className={style.isim}>Devrim Demir</a>
                <p className={style.turkej}>Turkey</p>
            </div>

            <div className={style.iletisim}>
                <a target="_blank" href="">
                    <img draggable="false" className={style.sayfalar} src=""/></a>

                <a target="_blank" href=""><img draggable="false" className={style.sayfalar} src=""/></a>

                <a target="_blank" href="https://www.facebook.com/devrimos"><img draggable="false" className={style.sayfalar} src=""/></a>

                <a target="_blank" href="https://www.instagram.com/devrim0s"><img draggable="false" className={style.sayfalar} src=""/></a>

                <a target="_blank" href="https://www.twitter.com/devrim0s"><img draggable="false" className={style.sayfalar} src=""/></a>
            </div>
        </div>


    </div>
};

export default News;
