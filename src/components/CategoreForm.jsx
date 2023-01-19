import React from 'react'

const categories = [
    "all",
    "burger",
    "hot dog",
    "sandwich",
    "fries",
    "topping",
    "drink",
    "extra",
];

const CategoreForm = ({setCategory}) => {
    const handleChangeCategory = (event) => {
        return (event.target.checked ? setCategory(event.target.value) : null);
    }
    return (
        <>
            <fieldset>
                <legend>Category</legend>
                {categories.map((categ, index) => {
                    // console.log(categ);
                    return (
                        <label key={index}>
                    <input
                        name='category'
                        value={categ}
                        type='radio'
                        onChange={handleChangeCategory}
                    />
                    {}
                    {' ' + categ}
                </label>
)
                })}
            </fieldset>
        </>
    )
}

export default CategoreForm;
