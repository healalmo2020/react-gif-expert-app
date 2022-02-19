import React from 'react'
import { useFetchGifs } from '../hooks/useFetchGifs';
import { GifGridItem } from './GifGridItem';

export const GifGrid = ({ category }) => {



    const {data:images,loading}=useFetchGifs(category);
    // console.log(data);
    

    // useEffect(() =>{
    //     getGifs(category).then(
    //         imgs=>setImages(imgs)
    //     )
    // },[])


   

    return (
        <>
            
            <h3 >{category}</h3>

            <div className=" animate__animated animate__flash">{loading && <p >cargando...</p> }</div>
                <div className="card-grid">

                    {
                        images.map(img => (
                            <GifGridItem 
                                {...img}
                                key={img.id}

                            />
                        ))

                    }
                </div>
        </>
    )
}
