// import react = require("react");

function customRender(reactElement,container){

    // const domElement = document.createElement
    // (reactElement.type)
    // domElement.innerHTML = reactElement.children
    // domElement.setAttribute('href', reactElement.props.href)
    // domElement.setAttribute('targert', reactElement.props.target)

    // container.appendChild(domElement);

    const domElement  =  document.createElement(reactElement.type);
    domElement.innerHTML = reactElement.children
    for(const  prop in reactElement.props)
    {
       if(prop == 'children') continue;
       domElement.setAttribute(prop, reactElement.props[props])
    }
    container.appendChild(domElement);
}

const reactElement = {
    type: 'a',
    props: {
        href : "https://google.com",
        target: '_blank'
    },
    children: "click me to visit google"
}

const anotherElement = (
    <a href="https://google.com" target="_blank">Visit google</a>
)


const mainContainer = document.querySelector('#root');

customRender(reactElement,mainContainer)

ReactDOM.createRoot(document.getElementById("root")).render(
    anotherElement()
)