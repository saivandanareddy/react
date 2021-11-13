import React from 'react'
import Child2 from './Child2'
import Child1 from './Child1'

function Parent() {
    return (
        <div>
         <h1>Parent component is a functional component</h1>  
         <Child1 name="Vandana"/>
            
             <Child2 name="Priyanka"/>

            
        </div>
    )
}

export default Parent
