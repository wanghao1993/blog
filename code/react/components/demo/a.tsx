import React from 'react'
import { Button } from 'antd'
interface Greeting {
    name?: string,
    firstName?: string
}

// const Hello = (props: Greeting) => <Button type="primary">Hello, { props.name }</Button>

const Hello: React.FC<Greeting> = ({ name, firstName }) => <Button type="primary">Hello, { name }, { firstName }</Button>

Hello.defaultProps ={
    name: '222',
    firstName: '111'
}
export default Hello