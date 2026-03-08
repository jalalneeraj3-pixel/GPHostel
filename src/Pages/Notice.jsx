import React, { useEffect, useState } from 'react'

const Notice = () => {
    const [count, setCount] = useState(60);
    useEffect(() => {
        if (count > 0) {
            setTimeout(() => {
                setCount(count - 1);
            }, 1000);
        } else {
            alert("Time UP!");
        }
    }, [count])
    return (
        <>
            <div>Notice</div>

            <h1>{count} seconds left</h1>
        </>
    )
}

export default Notice