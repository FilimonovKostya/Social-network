import style from "../ProfileInfo.module.css";
import React, {ChangeEvent, useState} from "react";
import {ContactsType, SocialMediaType, UserProfileType} from "../../../../Redux/profileReducer";
import Status from "../Status";
import {SubmitHandler, useForm} from "react-hook-form";

type PersonalInfoPropsType = {
    userProfile: UserProfileType
    changeStatus: (status: string) => void
    status: string
    updatePhoto: (photos: File) => void
    updateProfile: (contacts: ContactsType) => void
}

const PersonalInfo = ({userProfile, updateProfile, status, changeStatus, updatePhoto}: PersonalInfoPropsType) => {

    const {register, handleSubmit} = useForm<any>();
    const onSubmit: SubmitHandler<any> = handleSubmit((data) => updateProfile({data} as any));

    const onUpdatePhoto = (e: ChangeEvent<HTMLInputElement>) => {
        e.target.files && updatePhoto(e.target.files[0])
    }

    const userProfileContacts = Object.keys(userProfile.contacts ?? {})

    return <div className={style.wrapperPersonalInfo}>
        <img className={style.avatarProfile} src={userProfile?.photos?.large} alt=""/>
        <input type="file" onChange={onUpdatePhoto}/>
        <div className={style.personalInfo}><h3>{userProfile?.fullName}</h3>
            <p>Looking for a job: <span>{userProfile?.lookingForAJob ? 'Ищу работу за шаурму' : 'Ищу за деньги'}</span></p>
            <Status status={status} changeStatus={changeStatus}/>
            <p>Web Site: <span>{userProfile.contacts && ''}</span></p>
            <p>Description for Job: {userProfile.lookingForAJobDescription}</p>

            {userProfileContacts.map((key) => {
                return <form onSubmit={onSubmit}>

                    <Contact register={register} handleSubmit={handleSubmit} updateProfile={updateProfile} contactTitle={key as SocialMediaType}
                             titleValue={userProfile.contacts[key as SocialMediaType]}/>

                             <button>Send</button>

                </form>

            })}


        </div>
    </div>
}

type ContactPropsType = {
    register: any
    handleSubmit: any
    titleValue: string
    contactTitle: SocialMediaType
    updateProfile: (contacts: ContactsType) => void
}


const Contact = ({titleValue, contactTitle, handleSubmit, register, updateProfile}: ContactPropsType) => {
    const [isEditable, setIsEditable] = useState<boolean>(false)

    return <>

        {
            isEditable
                ? <p> {contactTitle} : <input autoFocus
                                              type="text"
                                              {...register(contactTitle)}
                /></p>

                : <p onDoubleClick={() => setIsEditable(!isEditable)}><b>{contactTitle}</b> : {titleValue}</p>
        }

    </>
}

export default PersonalInfo
