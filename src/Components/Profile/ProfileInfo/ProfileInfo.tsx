import React from "react";
import style from './ProfileInfo.module.css'
import {UserProfileType} from "../../../Redux/profileReducer";
import Status from "./Status";

type ProfileInfoPropsType = {
    userProfile: UserProfileType | null
    status: string
    changeStatus: (status: string) => void
}

const ProfileInfo = ({userProfile, status, changeStatus}: ProfileInfoPropsType) => {
    return <>
        <div>
            <img className={style.backgroundImage}
                 src='https://thumbor.forbes.com/thumbor/960x0/https%3A%2F%2Fblogs-images.forbes.com%2Fjosephliu%2Ffiles%2F2019%2F06%2F1-office-1516329_1920-1200x299.jpg'
                 alt="bg"/></div>
        <div className={style.wrapperPersonalInfo}>
            <img className={style.avatarProfile} src={userProfile?.photos.large}
                 alt=""/>
            <div className={style.personalInfo}><h3>{userProfile?.fullName}</h3>
                <p>Looking for a job: <span>{userProfile?.lookingForAJob ? 'Ищу работу за шаурму' : 'Ищу за деньги'}</span></p>
                <Status status={status} changeStatus={changeStatus}/>
                <p>Web Site: <span>{userProfile?.contacts.vk}</span></p>
                <p>Description for Job: {userProfile?.lookingForAJobDescription}</p>
            </div>
        </div>
    </>
}

export default React.memo(ProfileInfo)
