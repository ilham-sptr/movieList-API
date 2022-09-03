import React from 'react'
import ReactDOM from 'react-dom'
import List from './containers/List'

function App() {
    return (
        <>
            <List />
        </>
    )
}

ReactDOM.render(
    <App />,
    document.getElementById("root")
)