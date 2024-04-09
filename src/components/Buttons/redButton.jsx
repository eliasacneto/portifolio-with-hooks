
import { useEffect, useState } from 'react'
import './redButton.css'

const RedButton = () => {

    const [isDownloaded, setIsDownloaded] = useState(false)

    useEffect(() => {
        if (isDownloaded) {
          window.alert('Seu download começará em breve!');
          setIsDownloaded(false);
        }
      }, [isDownloaded]);


    return (
        <>
        
        <button onClick={() => setIsDownloaded(true)} className='btn-red'>Download CV</button>

       
        
        </>
        
    )
}

export default RedButton



// import React, { useState, useEffect } from 'react';

// function ExampleComponent() {
//     const [isButtonClicked, setIsButtonClicked] = useState(false);
  
//     return (
//       <div>
//         <button onClick={() => setIsButtonClicked(true)}>Clique aqui</button>
  
//         {isButtonClicked && <window.alert('Botão clicado!') />}
  
//         <useEffect(() => {
//           if (isButtonClicked) {
//             window.alert('Botão clicado!');
//             setIsButtonClicked(false);
//           }
//         }, [isButtonClicked]);
//       </div>
//     );
//   }
  
//   export default ExampleComponent;