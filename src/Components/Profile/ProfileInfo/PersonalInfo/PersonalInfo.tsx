import style from "../ProfileInfo.module.css";
import React, {ChangeEvent} from "react";
import {SocialMediaType, UserProfileType} from "../../../../Redux/profileReducer";
import Status from "../Status";

type PersonalInfoPropsType = {
    userProfile: UserProfileType
    changeStatus: (status: string) => void
    status: string
    updatePhoto: (photos: File) => void
}

const PersonalInfo = ({userProfile, status, changeStatus, updatePhoto}: PersonalInfoPropsType) => {

    const onUpdatePhoto = (e: ChangeEvent<HTMLInputElement>) => {
        e.target.files && updatePhoto(e.target.files[0])
    }

    const userProfileContacts = Object.keys(userProfile.contacts ?? {})

    return <div className={style.wrapperPersonalInfo}>
        <img className={style.avatarProfile} src={userProfile?.photos.large} alt=""/>
        <input type="file" onChange={onUpdatePhoto}/>
        <div className={style.personalInfo}><h3>{userProfile?.fullName}</h3>
            <p>Looking for a job: <span>{userProfile?.lookingForAJob ? 'Ищу работу за шаурму' : 'Ищу за деньги'}</span></p>
            <Status status={status} changeStatus={changeStatus}/>
            <p>Web Site: <span>{userProfile.contacts && ''}</span></p>
            <p>Description for Job: {userProfile.lookingForAJobDescription}</p>

            {userProfileContacts.map((key) => <Contact contactTitle={key} titleValue={userProfile.contacts[key as SocialMediaType]}/>)}
        </div>
    </div>
}

type ContactPropsType = {
    titleValue: string
    contactTitle: string
}

const Contact = ({titleValue, contactTitle}: ContactPropsType) => {
    return <div>
        <p><b>{contactTitle}</b> : {titleValue}</p>
    </div>
}

export default PersonalInfo
