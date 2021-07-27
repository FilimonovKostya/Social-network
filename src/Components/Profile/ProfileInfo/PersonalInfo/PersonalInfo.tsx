import style from "../ProfileInfo.module.css";
import React, {ChangeEvent, useState, KeyboardEvent, useEffect} from "react";
import {SocialMediaType, UserProfileType} from "../../../../Redux/profileReducer";
import Status from "../Status";
import {SubmitHandler, useForm} from "react-hook-form";
import {updateProfile} from "../../../../Api/api";
import {ReactComponent as Camera} from "../../../../assets/camera.svg";

type PersonalInfoPropsType = {
    userProfile: UserProfileType
    changeStatus: (status: string) => void
    status: string
    updatePhoto: (photos: File) => void
    updateProfile: (contacts: updateProfile) => void
}

const PersonalInfo = ({userProfile, updateProfile, status, changeStatus, updatePhoto}: PersonalInfoPropsType) => {
    console.log('userPr', userProfile.contacts)

    const {register, handleSubmit} = useForm<any>();
    const onSubmit: SubmitHandler<any> = handleSubmit((data) => {
        console.log('data', data)
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
        <div className={style.personalInfo}><h3>{userProfile?.fullName}</h3>
            <p>Looking for a job: <span>{userProfile?.lookingForAJob ? 'Ищу работу за шаурму' : 'Ищу за деньги'}</span>
            </p>
            <Status status={status} changeStatus={changeStatus}/>
            <p>Web Site: <span>{userProfile.contacts && ''}</span></p>
            <p>Description for Job: {userProfile.lookingForAJobDescription}</p>

            {/*{userProfileContacts.map((key) => {*/}
            {/*    return <form onSubmit={onSubmit}>*/}

            {/*        <Contact register={register} handleSubmit={handleSubmit} contactTitle={key as SocialMediaType}*/}
            {/*                 titleValue={userProfile.contacts[key as SocialMediaType]}/>*/}

            {/*        <button>Send</button>*/}

            {/*    </form>*/}

            {/*})} */}


        </div>
    </div>
}

type ContactPropsType = {
    register: any
    handleSubmit: any
    titleValue: string
    contactTitle: SocialMediaType
}


const Contact = ({titleValue, contactTitle, handleSubmit, register}: ContactPropsType) => {
    const [isEditable, setIsEditable] = useState<boolean>(false)

    useEffect(() => {
        const keyPressHandler = (event: KeyboardEvent<HTMLInputElement>) => {
            event.key === 'Escape' && setIsEditable(false)
        }
        document.addEventListener('keypress', (e) => {
            console.log(e.key)
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
