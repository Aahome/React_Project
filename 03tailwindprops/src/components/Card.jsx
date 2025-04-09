import React from 'react'

function Card({username = " HC ", post = "Not assigned yet"}) {
    // console.log(props)  
    return (
        <div>
            <figure className="md:flex bg-slate-100 rounded-xl p-8 md:p-0 dark:bg-slate-800">
                <img className="w-24 h-24 md:w-48 md:h-auto md:rounded-none rounded-full mx-auto" src="https://i.redd.it/i-got-bored-so-i-decided-to-draw-a-random-image-on-the-v0-4ig97vv85vjb1.png?width=1280&format=png&auto=webp&s=7177756d1f393b6e093596d06e1ba539f723264b" alt="" width="384" height="512" />
                    <div className="pt-6 md:p-8 text-center md:text-left space-y-4">
                        <blockquote>
                            <p className="text-lg font-medium">
                                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Optio, fugit.
                            </p>
                        </blockquote>
                        <figcaption className="font-medium">
                            <div className="text-sky-500 dark:text-sky-400">
                                {username || 'aziz'}
                            </div>
                            <div className="text-slate-700 dark:text-slate-500">
                                {post}
                            </div>
                        </figcaption>
                    </div>
            </figure>
        </div>
    )
}

export default Card