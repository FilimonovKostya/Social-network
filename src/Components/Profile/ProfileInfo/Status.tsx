import React, {useState} from "react";

type StatusPropsType = {
    lookingForAJobDescription?: string | null
}
export const Status = ({lookingForAJobDescription}: StatusPropsType) => {
    const [isEditable, setIsEditable] = useState<boolean>(false)

    return <p>Status : {isEditable ? <input autoFocus onBlur={() => setIsEditable(false)} type="text" value={lookingForAJobDescription ? lookingForAJobDescription : ''}/> :
        <span onDoubleClick={() => setIsEditable(true)}>{lookingForAJobDescription}</span>}  </p>
}
