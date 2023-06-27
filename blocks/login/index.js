!function(){"use strict";var e={n:function(t){var l=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(l,{a:l}),l},d:function(t,l){for(var n in l)e.o(l,n)&&!e.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:l[n]})},o:function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}},t=window.wp.element,l=window.wp.blocks,n=window.wp.components,r=window.wp.blockEditor,i=window.wp.i18n,o=window.wp.serverSideRender,s=e.n(o),c=JSON.parse('{"$schema":"https://schemas.wp.org/trunk/block.json","apiVersion":2,"name":"llms/login","title":"LifterLMS Login","category":"llms-blocks","description":"Displays the LifterLMS login form. If a user is already logged in, nothing is displayed.","textdomain":"lifterlms","attributes":{"layout":{"type":"string","default":"columns"},"redirect":{"type":"string"},"llms_visibility":{"type":"string"},"llms_visibility_in":{"type":"string"},"llms_visibility_posts":{"type":"string"}},"supports":{"align":["wide","full"]},"editorScript":"file:./index.js"}'),a=window.wp.primitives;(0,l.registerBlockType)(c,{icon:()=>(0,t.createElement)(a.SVG,{className:"llms-block-icon",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512"},(0,t.createElement)(a.Path,{d:"M217.9 105.9L340.7 228.7c7.2 7.2 11.3 17.1 11.3 27.3s-4.1 20.1-11.3 27.3L217.9 406.1c-6.4 6.4-15 9.9-24 9.9c-18.7 0-33.9-15.2-33.9-33.9l0-62.1L32 320c-17.7 0-32-14.3-32-32l0-64c0-17.7 14.3-32 32-32l128 0 0-62.1c0-18.7 15.2-33.9 33.9-33.9c9 0 17.6 3.6 24 9.9zM352 416l64 0c17.7 0 32-14.3 32-32l0-256c0-17.7-14.3-32-32-32l-64 0c-17.7 0-32-14.3-32-32s14.3-32 32-32l64 0c53 0 96 43 96 96l0 256c0 53-43 96-96 96l-64 0c-17.7 0-32-14.3-32-32s14.3-32 32-32z"})),edit:e=>{let{attributes:l,setAttributes:o}=e;const a=(0,r.useBlockProps)(),m=(0,t.useMemo)((()=>(0,t.createElement)(s(),{block:c.name,attributes:l,LoadingResponsePlaceholder:()=>(0,t.createElement)(n.Spinner,null),ErrorResponsePlaceholder:()=>(0,t.createElement)("p",{className:"llms-block-error"},(0,i.__)("Error loading content. Please check block settings are valid. This block will not be displayed.","lifterlms")),EmptyResponsePlaceholder:()=>(0,t.createElement)("p",{className:"llms-block-empty"},(0,i.__)("Displays LifterLMS register form. This block will not be displayed.","lifterlms"))})),[l]);return(0,t.createElement)(t.Fragment,null,(0,t.createElement)(r.InspectorControls,null,(0,t.createElement)(n.PanelBody,{title:(0,i.__)("Login Form Settings","lifterlms")},(0,t.createElement)(n.PanelRow,null,(0,t.createElement)(n.BaseControl,{help:(0,i.__)("Controls the size of the button.","lifterlms")},(0,t.createElement)(n.Flex,{direction:"column"},(0,t.createElement)(n.BaseControl.VisualLabel,null,(0,i.__)("Size","lifterlms")),(0,t.createElement)(n.ButtonGroup,null,["Columns","Stacked"].map((e=>{const r=null==e?void 0:e.toLowerCase();return(0,t.createElement)(n.Button,{key:r,isPrimary:r===l.layout,onClick:()=>o({layout:r})},e)})))))),(0,t.createElement)(n.PanelRow,null,(0,t.createElement)(n.TextControl,{label:(0,i.__)("Login redirect URL","lifterlms"),value:l.redirect,onChange:e=>o({redirect:e})})))),(0,t.createElement)("div",a,(0,t.createElement)(n.Disabled,null,m)))}})}();