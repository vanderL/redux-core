import React, {useState, useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { chageFilters, selectUniqueColors } from './store/products';

const Filter = () => {
    const colors = useSelector(selectUniqueColors);
    const [minPrice, setMinPrice] = useState('');
    const [maxPrice, setMaxPrice] = useState('');
    const [selectedColors, setSelectedColors] = useState([]);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(chageFilters({name: 'colors', value: selectedColors}))
    }, [selectedColors, dispatch])

    useEffect(() => {
        dispatch(
            chageFilters({
                name: 'prices', 
                value: {
                    min: Number(minPrice),
                    max: Number(maxPrice)
                },
            }),
        );
    }, [minPrice, maxPrice, dispatch])

    function handleChange({target}) {
        if(target.checked) {
            setSelectedColors([...selectedColors, target.value])
        } else {
            setSelectedColors(selectedColors.filter((color) => color !== target.value),)
        }
    }

    function handleChecked(color){
        return selectedColors.includes(color)
    }

    return (
        <div>
            <input 
                type="number" 
                value={minPrice}
                onChange={({target}) => setMinPrice(target.value)}
                placeholder="Min"
            />
            <input 
                type="number" 
                value={maxPrice}
                onChange={({target}) => setMaxPrice(target.value)}
                placeholder="Max"
            />
            {colors.map(color => 
                <label key={color}>
                    <input 
                        type="checkbox" 
                        value={color} 
                        checked={handleChecked(color)} 
                        onChange={handleChange}
                    />
                        {color}
                </label>
            )}
        </div>
    )
};

export default Filter;