'use client';
import React, { useState } from "react";

const Counter = () => {
    const [value, setValue] = useState(0);

    const increment = () => {
        setValue(value + 1);
    };

    const decrement = () => {
        if (value === 0) {
            return;
        }
        setValue(value - 1);
    };
    return (
        <div className="flex gap-3">
            <button onClick={decrement} className="bg-purple-700 text-white rounded p-3">-</button>
            <button className="bg-purple-500 text-white rounded p-3">{value}</button>
            <button onClick={increment} className="bg-purple-700 text-white rounded p-3">+</button>
        </div>
    );
};

export default Counter;