import React from "react";

type MessageItemProps = {
    message: string
}
const MessageItem = ({message}: MessageItemProps) => {
    return <p>{message}</p>
}

export default MessageItem
