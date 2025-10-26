import React from 'react'

const DetachedLine = () => {
    return (
        // Center the line
        <div className="flex justify-center mt-4">
            {/* Line styling: thin, blue, rounded, with a subtle glow for depth */}
            <div className="w-11/12 h-1.5 z-1 bg-[#37393d] rounded-full shadow-2xl shadow-[#37393d]-500/50"></div>
        </div>
    )
}

export default DetachedLine