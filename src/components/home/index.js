import React from 'react'
import { useEffect } from 'react';
import { useForm } from 'react-hook-form';

export default function Home({gifs ,...actionOfGif}) {
    const { register , handleSubmit} = useForm();
    console.log(gifs)
    useEffect(() => {
        actionOfGif.getGif()
    }, [])
    return (
        <div className="home" >
            <form onSubmit={handleSubmit(actionOfGif.addGif)}>
                <input type="text"  {...register("url" ,{ require : true})} placeholder="Link"></input>
                <button>ADD</button>
            </form>
            <form onSubmit={handleSubmit(actionOfGif.removeGif)}>
                <input type="text"  {...register("id" ,{ require : true})} placeholder="Index"></input>
                <button>REMOVE</button>
            </form>
            <form onSubmit={handleSubmit(actionOfGif.searchGif)}>
                <input type="text"  {...register("searchStr" ,{ require : true})} placeholder="Name"></input>
                <button>SEARCH</button>
            </form>
            <div className="home-image">
                {gifs.map((gif)=>(
                    <img src={gif.url} key={gif.id}></img>
                ))}
            </div>
        </div>
    )
}
