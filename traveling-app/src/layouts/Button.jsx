import React from 'react'

const Button = (props) => {
  return (
    <div>
        <button className={`${props.backgroundColor} text-black rounded-full px-8 p-2 font-medium hover:bg-[#8482ff] hover:text-white transition-all`}>
            {props.title}
        </button>
    </div>

  )
}

export default Button