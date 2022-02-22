import React from "react";

import ReactDom from 'react-dom'

import HelloClass from "./c";

interface Loading {
    loading: boolean
}

function HelloHoc<P> (WrappedComponents: React.ComponentType<P>) {
    return class extends React.Component<P & Loading> {
        render() {
            const { loading, ...props } = this.props;

            if (loading) {
                return <WrappedComponents { ...props as P }></WrappedComponents>
            } else {
                return '加载中...'
            }
        }
    }
}

export default HelloHoc(HelloClass)