import {NavLink} from "react-router-dom";
import React from "react";

type DialogItemProps = {
    id: number
    name: string
}
const DialogItem = ({id, name}: DialogItemProps) => {
    return <NavLink to={`/dialogs/${id}`}>{name}</NavLink>
}

export default DialogItem
