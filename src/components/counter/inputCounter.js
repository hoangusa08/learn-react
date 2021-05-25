import React from 'react'
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import allAction from '../../actions'

export default function InputCounter() {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const dispatch = useDispatch()
    const onSubmitIncrement = (data) => {
        dispatch(allAction.counter.increment(parseInt(data.count,10)))
    }
    const onSubmitDecrement = (data) => {
        dispatch(allAction.counter.decrement(parseInt(data.count,10)))
    }
    return (
        <form>
            <input type="text" style={{display:"block"}}  {...register("count" ,{ require : true})} ></input>
            {errors.exampleRequired && <span>This field is required</span>}
            <button onClick={handleSubmit(onSubmitIncrement)}>Increment</button>
            <button onClick={handleSubmit(onSubmitDecrement)}> Decrement</button>
        </form>
    )
}
