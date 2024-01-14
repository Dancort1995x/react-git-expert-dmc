import { useState } from 'react'
import { AddCategory, GifGrid } from './components';


export const GifExpertApp = () => {


    const [categories, setCategories] = useState(['One Punch'])

    // ... (spread copia del arreglo)
    const onAddCategory = (newCategory) => {

        if (categories.includes(newCategory)) return;


        // forma 1 
        // setCategories(categories => [...categories,'Jujustu Kaisen']);
        //forma 2
        setCategories([newCategory, ...categories])
        // categories.push(newCategory);
        // console.log(newCategory);
    }

    // console.log(categories);

    return (
        <>
            {/* titulo */}
            <h1>GifExpertApp</h1>

            {/* Input */}
            <AddCategory
                // setCategories ={ setCategories }
                onNewCategory={(event) => onAddCategory(event)}
            />
            {/* Listado de Gif */}
            {
                categories.map((category) => (
                    <GifGrid key={category}
                        category={category}
                    />
                ))
            }
            {/* Gif Item */}
        </>
    )
}