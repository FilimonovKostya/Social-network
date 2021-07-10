import style from "../ProfileInfo.module.css";
import React, {ChangeEvent} from "react";
import {UserProfileType} from "../../../../Redux/profileReducer";
import Status from "../Status";

type PersonalInfoPropsType = {
    userProfile: UserProfileType | null
    changeStatus: (status: string) => void
    status: string
    updatePhoto: (photos: File) => void
}

const PersonalInfo = ({userProfile, status, changeStatus, updatePhoto}: PersonalInfoPropsType) => {

    const onUpdatePhoto = (e: ChangeEvent<HTMLInputElement>) => {
        e.target.files && updatePhoto(e.target.files[0])
    }

    return <div className={style.wrapperPersonalInfo}>
        <img className={style.avatarProfile} src={userProfile?.photos.large} alt=""/>
        <input type="file" onChange={onUpdatePhoto}/>
        <div className={style.personalInfo}><h3>{userProfile?.fullName}</h3>
            <p>Looking for a job: <span>{userProfile?.lookingForAJob ? 'Ищу работу за шаурму' : 'Ищу за деньги'}</span></p>
            <Status status={status} changeStatus={changeStatus}/>
            <p>Web Site: <span>{userProfile?.contacts.vk}</span></p>
            <p>Description for Job: {userProfile?.lookingForAJobDescription}</p>
        </div>
    </div>
}

export default PersonalInfo
