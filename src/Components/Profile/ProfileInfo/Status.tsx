import React, {ChangeEvent, useEffect, useState} from "react";

type StatusPropsType = {
    status: string
    changeStatus: (status: string) => void
}
const Status = ({status, changeStatus}: StatusPropsType) => {
    const [isEditable, setIsEditable] = useState<boolean>(false)
    const [statusValue, setStatusValue] = useState<string>(status)

    const onChangeStatusValue = (e: ChangeEvent<HTMLInputElement>) => setStatusValue(e.currentTarget.value)

    const onBlurHandler = () => {
        setIsEditable(false)
        changeStatus(statusValue)
    }

    useEffect(() => {
        setStatusValue(status)
    }, [status])

    return <p>Status : {
        isEditable
            ? <input autoFocus onChange={onChangeStatusValue} onBlur={onBlurHandler} type="text" value={statusValue}/>
            : <span onDoubleClick={() => setIsEditable(true)}>{status}</span>}  </p>
}

export default React.memo(Status)
