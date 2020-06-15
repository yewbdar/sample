import React from 'react' ;
import  './layout.css'
const Layout = (props) => (
       <React.Fragment>
         <div> toolbars , sideDrowe, backdrop </div>
        <main className='content'>
            {props.children}
        </main>
       </React.Fragment>
        
)

export default Layout