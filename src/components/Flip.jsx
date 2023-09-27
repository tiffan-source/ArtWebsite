import React from 'react';
function Flip() {
    return (
        <div className='flex min-h-screen items-center justify-center bg-slate-100'>
            <div className='group h-96 w-96 [perspective:1000px]'>
                <div className="relative h-full w-full rounded-xl shadow-xl transition-all duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
                    <div className="absolute inset-0">
                        <img src="https://source.unsplash.com/random/350x500" alt="" className='h-full w-full rounded-xl object-cover shadow-xl shadow-black/40'/>
                    </div>
                    <div className="absolute inset-0 h-full w-full rounded-xl bg-black/40 px-12 text-center text-slate-200 [transform:rotateY(180deg)] [backface-visibility:hidden]">
                        <div className='text-center text-white text-2xl'>Mon texte</div>
                    </div>
                </div>
            </div>
        </div>


    )
}

export default Flip