import React, { useState, useEffect } from "react";
import { Button } from 'antd'
interface Greeting {
    name: string
    firstName: string
}



const HelloHooks = (props: Greeting) => {
    const [count, setCount] = useState(0)

    const [text, setText] = useState('')
    return <>
        <Button onClick={() => setCount(count + 1)}>+++</Button>
        <div>
            { count }
        </div>
    </>
}

HelloHooks.defaultProps = {
    name: 'xxx',
    firstName: 'wang'
}
export default HelloHooks