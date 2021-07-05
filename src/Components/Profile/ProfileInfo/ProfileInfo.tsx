import React from "react";
import style from './ProfileInfo.module.css'
import {UserProfileType} from "../../../Redux/profileReducer";
import PersonalInfo from "./PersonalInfo/PersonalInfo";

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
                 alt="bg"/>
            <PersonalInfo status={status} userProfile={userProfile} changeStatus={changeStatus}/>
        </div>

    </>
}

export default React.memo(ProfileInfo)
