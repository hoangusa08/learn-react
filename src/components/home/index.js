import React from 'react'
import { useForm } from 'react-hook-form';

export default function Home({gifs , addGif}) {
    const { register, handleSubmit} = useForm();
    return (
        <div className="home" onSubmit={handleSubmit(addGif)}>
            <form >
                <input type="text"  {...register("url" ,{ require : true})}></input>
                <button>ADD</button>
            </form>
            <div className="home-image">
                {gifs.map((gif)=>(
                    <img src={gif.url} key={gif.id}></img>
                ))}
            </div>
        </div>
    )
}
