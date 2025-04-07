import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import React from 'react'
import Youtube from './Youtube.jsx'

const reactElement = {
    type: 'a',
    props: {
        href: "https://google.com",
        target: '_blank'
    },
    children: 'Click me to visit google'
}

function MyApp () {
    return (
        <div>
            <h1>Custom React App</h1>
        </div>
    )
}
const AnotherElement = (
    <a href="http://google.com" target='_blank'>Visit Google</a>
)

const areactElement = React.createElement(
    'a',
    {href: 'https://google.com', target: "_blank"},
    'click to visit google'
)

ReactDOM.createRoot(document.getElementById('root')).render(

    <App />

)