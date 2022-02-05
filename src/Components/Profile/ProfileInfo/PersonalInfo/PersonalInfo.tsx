import style from "../ProfileInfo.module.css";
import React, {ChangeEvent, useEffect, useState} from "react";
import {SocialMediaType, UserProfileType} from "../../../../Redux/profileReducer";
import Status from "../Status";
import {SubmitHandler, useForm} from "react-hook-form";
import {updateProfile} from "../../../../Api/api";
import {ReactComponent as Camera} from "../../../../assests/camera.svg";

type PersonalInfoPropsType = {
    userProfile: UserProfileType
    changeStatus: (status: string) => void
    status: string
    updatePhoto: (photos: File) => void
    updateProfile: (contacts: updateProfile) => void
}

const PersonalInfo = ({userProfile, updateProfile, status, changeStatus, updatePhoto}: PersonalInfoPropsType) => {

    const {register, handleSubmit} = useForm<any>();
    const onSubmit: SubmitHandler<any> = handleSubmit((data) => {

        updateProfile({...data})
    });

    const onUpdatePhoto = (e: ChangeEvent<HTMLInputElement>) => {
        e.target.files && updatePhoto(e.target.files[0])
    }

    const userProfileContacts = Object.keys(userProfile.contacts ?? {})

    return <div className={style.wrapperPersonalInfo}>

        <div className={style.wrapperPhotoProfile}>
            <img className={style.avatarProfile} src={userProfile?.photos?.large} alt=""/>
            <label htmlFor="updatePhoto">
                <div id={'test'} className={style.camera}><Camera className={style.icon}/></div>
                <input className={style.input} type="file" id={'updatePhoto'} onChange={onUpdatePhoto}/>
            </label>
        </div>

        <form onSubmit={onSubmit} className={style.wrapperContacts}>
            <div className={style.leftInfo}>

                <p>Looking for a job : <span>{userProfile?.lookingForAJob ? 'В поиске работы' : 'Не рассматриваю' +
                    ' предложения'}</span>
                </p>
                <Status status={status} changeStatus={changeStatus}/>
                <p>Web Site: <span>{userProfile.contacts && ''}</span></p>
                <p>Description for Job: {userProfile.lookingForAJobDescription}</p>
            </div>
            <div style={{color: 'black'}}>
                {userProfileContacts.map((key, index) => <>

                    <Contact key={index} register={register} handleSubmit={handleSubmit} contactTitle={key as SocialMediaType}
                             titleValue={userProfile.contacts[key as SocialMediaType]}/>
                </>)}
            </div>
            <div className={style.btn}>
                <button> Send</button>
            </div>
        </form>
    </div>
}

type ContactPropsType = {
    register: any
    handleSubmit: any
    titleValue: string
    contactTitle: SocialMediaType
}


const Contact = ({titleValue, contactTitle, register}: ContactPropsType) => {
    const [isEditable, setIsEditable] = useState<boolean>(false)

    useEffect(() => {
        document.addEventListener('keypress', (e) => {
            e.key === 'Escape' && setIsEditable(false)
        })
    })

    return <>

        {
            isEditable
                ? <p> {contactTitle} : <input
                    type="text"
                    {...register(contactTitle)}
                /></p>

                : <p onDoubleClick={() => setIsEditable(!isEditable)}><b>{contactTitle}</b> : {titleValue}</p>
        }

    </>
}

export default PersonalInfo
