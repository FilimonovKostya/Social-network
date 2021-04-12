import React from 'react';
import style from './Dialogs.module.css'

const Dialogs = () => {
    return <div className={style.wrapper}>
        <div className={style.dialogs}>
            <p>Batman</p>
            <p>Pavel Durov</p>
            <p>Ilon Mask</p>
            <p>Den Abramov</p>
        </div>
        <div className={style.messages}>
            <p>Hi</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem consequuntur dolor eos hic illo laborum modi optio pariatur quisquam
                repellat?</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo, nostrum.</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo in numquam odio quas?</p>
            <p>Lorem ipsum dolor sit amet.</p>
        </div>
    </div>
};

export default Dialogs;
