import React from 'react';
import { useSelector } from "react-redux";
export default function OutputCounter() {
    const count = useSelector( state => state.counter)
    return (
        <div>
            count : {count}
        </div>
    )
}
