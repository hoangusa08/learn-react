import React from 'react'
import { useEffect } from 'react';
import { useForm } from 'react-hook-form';

export default function Home({gifs ,...props}) {
    const { register , handleSubmit} = useForm();
    console.log(gifs)
    useEffect(() => {
        props.getGif()
    }, [])
    return (
        <div className="home" >
            <form onSubmit={handleSubmit(props.addGif)}>
                <input type="text"  {...register("url" ,{ require : true})}></input>
                <button>ADD</button>
            </form>
            <form onSubmit={handleSubmit(props.removeGif)}>
                <input type="text"  {...register("id" ,{ require : true})}></input>
                <button>REMOVE</button>
            </form>
            <div className="home-image">
                {gifs.map((gif)=>(
                    <img src={gif.url} key={gif.id}></img>
                ))}
            </div>
        </div>
    )
}
