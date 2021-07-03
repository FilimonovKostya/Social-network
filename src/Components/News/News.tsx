import React from 'react';
import style from './Card.module.css'

const News = () => {
    return <div className={style.wrapper}>
        <div className={style.profil}>

            <div className={style.bgImage}/>
            <img className={style.avatar} src="https://pm1.narvii.com/6802/b775c9e1266f61a61737324b45e0975ed22d7328v2_hq.jpg"/>

            <div className={style.text}>
                <div>
                    <p>Name : {'Kostya'}</p>
                    <p>Status : {'Bla bla'}</p>
                    <p>Follow : {'true'}</p>
                </div>
            </div>
            <button>Follow</button>

        </div>


    </div>
};

export default News;
