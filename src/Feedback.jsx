import React,{useRef, useState,useEffect} from 'react'
import clsx from 'clsx';
import { Transition } from '@headlessui/react';

const Feedback = ({isCorrect, answer, setShowFeedback})=>{
  const styleClasses  = isCorrect ? 'bg-green-400' : 'bg-red-400'
  const h1Style = 'text-white content-center'
  return (
    <>
    <div className={clsx('absolute  flex items-center justify-center top-0 right-0 left-0 bottom-0 z-50  m-2 p-8 text-white font-bold text-xl rounded ',styleClasses)} >
            { isCorrect ? <h1 className={h1Style}>Correct!</h1> :<h1 className={h1Style}>Incorrect!</h1>
            }
        </div>

    </>
  )
}

export default Feedback