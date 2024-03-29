import React from 'react'
import Twitter from "../icons/twitter.svg";
function TwitterButton() {
    return (
        <div className="flex m-2 mx-auto justify-center bg-[#00A8F4] cursor-pointer hover:shadow-[#00A8F4] hover:shadow-sm">
            <img
                src={Twitter}
                alt="sign in with facebook"
                className='mx-1'
            />
            <span className='my-auto mx-4 text-white'>Sign in with Twitter</span>
        </div>
    )
}

export default TwitterButton