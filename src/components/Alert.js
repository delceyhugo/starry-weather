import React, {useEffect, useRef } from 'react'

export default function Alert(props) {
    const componentEl = useRef(null);
    useEffect(() => {
        if(props.alert && props.alert !== ''){
            componentEl.current.classList.remove("fade-out");
            componentEl.current.classList.add("fade-in");
            setTimeout(() =>{
                // componentEl.current.classList.remove("fade-in");
                componentEl.current.classList.add("fade-out");
                componentEl.current.classList.remove("fade-in");
                setTimeout(() =>{
                    props.handleAlert('')
                }, 1000)
            }, 3000)
        }
    }, [props])
    function fadeOut(){
        componentEl.current.classList.add("fade-out");
        componentEl.current.classList.remove("fade-in");
    }
    

    return (
        <>
            <div className='alert' ref={componentEl}>
                <img src="https://img.icons8.com/dusk/64/000000/cancel.png" alt='danger alert'/>
                <p>{props.alert ? props.alert : ''}</p>
                <img onClick={fadeOut} src="https://img.icons8.com/windows/64/ffffff/macos-close.png" alt='close alert'/>
            </div>
        </>
    )
}
