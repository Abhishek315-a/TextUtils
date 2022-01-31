import React from 'react'

function About(props) {
  return (
    <div className="container" style={{color:props.mode==='dark'?'white':'black'}}>
        <div className="item">
            <h3>Section 1</h3>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Placeat ullam id quidem corporis soluta dolor sint dolore at nesciunt veritatis.</p>
        </div>
        <div className="item">
            <h3>Section 2</h3>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Placeat ullam id quidem corporis soluta dolor sint dolore at nesciunt veritatis.</p>
        </div>
        <div className="item">
            <h3>Section 3</h3>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Placeat ullam id quidem corporis soluta dolor sint dolore at nesciunt veritatis.</p>
        </div>
    </div>
  )
}

export default About
