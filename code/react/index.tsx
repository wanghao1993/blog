import React from 'react'
import ReactDom from 'react-dom'
// import Hello from "./components/demo/a";
// import HelloClass from './components/demo/c'
import HelloHooks from './components/demo/hooks'
import './index.css'
ReactDom.render(
    <HelloHooks />,
    document.getElementById('app')
)