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

            {userProfileContacts.map((key) => <Contact updateProfile={updateProfile} contactTitle={key as SocialMediaType}
                                                       titleValue={userProfile.contacts[key as SocialMediaType]}/>)}
        </div>
    </div>
}

type ContactPropsType = {
    titleValue: string
    contactTitle: SocialMediaType
    updateProfile: (contacts: ContactsType) => void
}


const Contact = ({titleValue, contactTitle, updateProfile}: ContactPropsType) => {
    const {register, handleSubmit, watch, formState: {errors}} = useForm<any>();
    const onSubmit: SubmitHandler<any> = data => console.log(data);

    const [isEditable, setIsEditable] = useState<boolean>(false)
    const [statusValue, setStatusValue] = useState<string>(contactTitle)

    console.log('Cont', contactTitle)

    // const onChangeStatusValue = (e: ChangeEvent<HTMLInputElement>) => setStatusValue(e.currentTarget.value)
    //
    // const onBlurHandler = () => setIsEditable(false)

    const onSubmitHandler = () => updateProfile({...register as any})

    const onEditMode = () => setIsEditable(true)

    return <form onSubmit={handleSubmit(onSubmitHandler)   }>
        <button onClick={onEditMode}>Edit</button>
        {
            isEditable
                ? <p> {contactTitle} : <input  autoFocus
                                              type="text"
                                              value={statusValue}
                                              {...register(contactTitle)}
                /></p>

                : <p><b>{contactTitle}</b> : {titleValue}</p>
        }
    </form>
}

export default PersonalInfo
