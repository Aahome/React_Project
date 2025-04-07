function myRender(reactElement, container) {
    // const delement = document.createElement(reactElement.type)
    // domElement.innerHTML = reactElement.children
    // domElement.setAttribute('href, reactElemet.props.href')
    // domElement.setAttribute('target, reactElemet.props.target')
    // container.appendChild(domElement)
    const domELement = document.createElement(reactElement.type)
    domELement.innerHTML = reactElement.children
    for (const prop in reactElement.props) {
        if(prop === 'children') continue
        domELement.setAttribute(prop, reactElement.props[prop])
    }
    container.appendChild(domELement);
};

const reactElement = {
    type: 'a',
    props: {
        href: "https://google.com",
        target: '_blank'
    },
    children: 'Click me to visit google'
}

const mainRoot = document.querySelector('#root')

myRender(reactElement, mainRoot)