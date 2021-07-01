import React from 'react';
import preloader from './loading.svg'
import style from './Preloader.module.css'

const Preloader = () => {
    return <div className={style.wrapper}><img src={preloader} alt="preloader"/></div>
};

export default Preloader;
