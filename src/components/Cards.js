import React from 'react'

import Card from "./Card"

// import datas from "../data/hashiras.json"

import image1 from '../image/Giyu_Tomioka.jpg';
import image2 from '../image/Mitsuri_Kanroji.jpg';
import image3 from '../image/Obanai_Iguro.jpg';
import image4 from '../image/Sanemi_Shinazugawa.jpg';
import image5 from '../image/Gyomei_Himejima.jpg';
import image6 from '../image/Tengen_Uzui.jpg';
import image7 from '../image/Muichiro_Tokito.jpg';
import image8 from '../image/Shinobu_Kocho.jpg';
import image9 from '../image/Kyojuro_Rengoku.jpg';

const datas = [
    {
        id: 1,
        title: 'Giyu Tomioka',
        image: image1
    },
    {
        id: 2,
        title: 'Mitsuri Kanroji',
        image: image2
    },
    {
        id: 3,
        title: 'Obanai Iguro',
        image: image3
    },
    {
        id: 4,
        title: 'Sanemi Shinazugawa',
        image: image4
    },
    {
        id: 5,
        title: 'Sanemi Shinazugawa',
        image: image5
    },
    {
        id: 6,
        title: 'Tengen Uzui',
        image: image6
    },
    {
        id: 7,
        title: 'Muichiro Tokito',
        image: image7
    },
    {
        id: 8,
        title: 'Shinobu Kocho',
        image: image8
    },
    {
        id: 9,
        title: 'Kyojuro Rengoku',
        image: image9
    }  
]

function Cards() {
    // const loadImage = imageName => (require(`/src/image/${imageName}`).default);

    return (
        <div className='container d-flex justify-content-center h-100 align-items-center '>
            <div className='row'>
                {
                    datas.map(data => (
                        <div className='col-md-4 p-4'  key={data.id}>
                            <Card title={data.title} imageSource={data.image}/>
                        </div>
                    ))
                }
                
            </div>
        </div>
    )
}

export default Cards