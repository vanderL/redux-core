import React, {useState} from 'react';
import { useSelector } from 'react-redux';

const selectUniqueColors = ({products}) => 
    Array.from(new Set(products.data.map(({color}) => color)));

const Filter = () => {
    // const colors = ['azul', 'rosa', 'preta']
    const colors = useSelector(selectUniqueColors);
    const [minPrice, setMinPrice] = useState('');
    const [maxPrice, setMaxPrice] = useState('');
    const [selectedColors, setSelectedColors] = useState([]);

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
            <p>Cores Selecionadas {selectedColors}</p>
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
                        onChange={handleChange}/>
                        {color}
                </label>
            )}
        </div>
    )
};

export default Filter;