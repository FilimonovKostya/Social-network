import React from "react";
import style from './ProfileInfo.module.css'

const ProfileInfo = () => {
    return <>
        <div>
            <img className={style.backgroundImage}
                  src='https://thumbor.forbes.com/thumbor/960x0/https%3A%2F%2Fblogs-images.forbes.com%2Fjosephliu%2Ffiles%2F2019%2F06%2F1-office-1516329_1920-1200x299.jpg'
                  alt="bg"/></div>
        <div className={style.wrapperPersonalInfo}>
            <img className={style.avatarProfile} src="https://cdn4.iconfinder.com/data/icons/diversity-v2-0-volume-03/64/superhero-spiderman-comics-256.png"
                 alt=""/>
            <div className={style.personalInfo}><h3>Filimonov Kostya</h3>
                <p>Date of birth: <span>21 01 1997</span></p>
                <p>Education : <span>Polotsk state university</span></p>
                <p>Web Site: <span>@example.com</span></p>
            </div>
        </div>

    </>
}

export default ProfileInfo
