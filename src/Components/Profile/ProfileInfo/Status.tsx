import React, {ChangeEvent, useState} from "react";

type StatusPropsType = {
    status: string
    changeStatus: (status: string) => void
}
export const Status = ({status, changeStatus}: StatusPropsType) => {
    const [isEditable, setIsEditable] = useState<boolean>(false)
    const [statusValue, setStatusValue] = useState<string>(status)

    const onChangeStatusValue = (e: ChangeEvent<HTMLInputElement>) => setStatusValue(e.currentTarget.value)

    return <p>Status : {isEditable ? <input autoFocus onChange={onChangeStatusValue} onBlur={() => {
            setIsEditable(false)
            changeStatus(statusValue)
        }} type="text" value={statusValue}/> :
        <span onDoubleClick={() => setIsEditable(true)}>{statusValue}</span>}  </p>
}
