import React from 'react'

const Price = ({ setMax, setMin, min, max }) => {
    const handleRange = (event) => {
        if (event.target.name === 'min') {
            return setMin(event.target.value);
        } else {
            return setMax(event.target.value);
        }
    }
    return (
        <>
            <fieldset>
                <legend>Price</legend>
                <label>Min Price
                    <input
                        type='range'
                        min={1}
                        name='min'
                        max={9}
                        onChange={handleRange}
                        value={min}
                    />
                </label>
                <label>Max Price
                    <input
                        type='range'
                        min={1}
                        name='max'
                        max={9}
                        onChange={handleRange}
                        value={min}
                    />
                </label>
            </fieldset>
        </>
    )
}

export default Price;
