import * as React from 'react'
import * as ReactDOM from 'react-dom/client'
import {styled} from "@linaria/react";
import {SomeComponent} from "./SomeComponent";

const Text = styled(SomeComponent)`
  display: block;
  padding-top: 20px;
`


const Root = () => (
    <React.StrictMode>
        <Text />
    </React.StrictMode>
)

const container = document.querySelector('#root')

if (container) {
    const root = ReactDOM.createRoot(container)
    root.render(<Root />)
}
