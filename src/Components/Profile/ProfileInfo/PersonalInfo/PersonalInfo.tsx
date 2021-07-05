import style from "../ProfileInfo.module.css";
import React from "react";
import {UserProfileType} from "../../../../Redux/profileReducer";
import Status from "../Status";

type PersonalInfoPropsType = {
    userProfile: UserProfileType | null
    changeStatus: (status: string) => void
    status: string
}

const PersonalInfo = ({userProfile, status, changeStatus}: PersonalInfoPropsType) => {
    return <div className={style.wrapperPersonalInfo}>
        <img className={style.avatarProfile} src={userProfile?.photos.large} alt=""/>
        <div className={style.personalInfo}><h3>{userProfile?.fullName}</h3>
            <p>Looking for a job: <span>{userProfile?.lookingForAJob ? 'Ищу работу за шаурму' : 'Ищу за деньги'}</span></p>
            <Status status={status} changeStatus={changeStatus}/>
            <p>Web Site: <span>{userProfile?.contacts.vk}</span></p>
            <p>Description for Job: {userProfile?.lookingForAJobDescription}</p>
        </div>
    </div>
}

export default PersonalInfo
