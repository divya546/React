import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import React from 'react'
import App from './App.jsx'

// function MyApp(){
//     return (
//         <div>
//             <h1>
//                 Custom App!!
//             </h1>
//         </div>
//     )
// }
const anotherUser =" me as a chai"
const reactElement= React.createElement(
     'a',
     {href: 'https://goggle.com' ,
        target:'_blank'
     },
     'click me to visit google',
     anotherUser
)

const anotherElement =(
    <a href="https://google.com" target ='_blank'>Visit google</a>
)

createRoot(document.getElementById('root')).render(
    //    <App />
    reactElement
    // From where this jsx syntax comming to call a function 
    // from where is this comming
    // so this is comming from  a bundler 
    // Every app uses a bundeler behind the scenes 
    // for the  conversion 
    // react me vite also uses a  bundler
    // Bundler works to upgrade and improvise the syntax
    // etcc.. 
    // therefore we write in html under js and the parsing of this index happens into a tree ina syntax like 



    // function customRender(reactElement,container){
    // const domElement = document.createElement(reactElement.type);
    // domElement.innerHTML = reactElement.children;
    // domElement.setAttribute('href',reactElement.props.href);
    // domElement.setAttribute('target',reactElement.props.target);
    // container.appendChild(domElement);
//     const domElement=document.createElement(reactElement.type);
//     domElement.innerHTML = reactElement.children;
//     for(const prop in reactElement.props){
//         if(prop === 'children'){
//             continue;
//         }
//         domElement.setAttribute(prop,reactElement.props[prop]); 
//      }
//         container.appendChild(domElement);
//   }
  


//   const reactElement ={
//     type: 'a',
//     props:{
//         href:'https://google.com',
//         target: '_blank'
//     },
//     children: 'Click me to visit google'
//   }
//   const mainContainer = document.querySelector('#root');
//   customRender(reactElement,mainContainer);
// can be writtern as MyApp() as a function 
 
)
