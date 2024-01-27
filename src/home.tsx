import React from 'react'
import Welcome from "./welcome";
import Counter from './counter';
function Home() {
    return (
        <div>
            <div>Hello World! Home</div>
            <Welcome name="John"/>
            <Counter/>
        </div>
    )
}

export default Home