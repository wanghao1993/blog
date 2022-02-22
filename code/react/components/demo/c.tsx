import React from 'react'
import { Button } from 'antd'
interface Greeting {
    name?: string,
    firstName?: string
}

interface State {
    count: number
}
class HelloClass extends React.Component<Greeting, State> {
    state: State = {
        count: 0
    }

    static defaultProps = {
        name: 'default',
        firstName: 'wang'
    }
    render(): React.ReactNode {
        return <div>
            <Button onClick={() => this.setState({
                count: this.state.count + 1
            })}>+</Button>
            <span>
            { this.state.count }
            </span>
        </div>
        
    }
}

export default HelloClass