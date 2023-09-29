import React from 'react'

type Props = {}

const CategoryTab = (props: Props) => {
    const categoriez = [
        {
            name : "Semua",
        },
        {
            name : "Design Grafis",
        },
        {
            name : "Programming",
        },
        {
            name : "Microtic",
        },
        {
            name : "Lainnya",
        },
    ]
    return (
        <div className="flex items-start justify-start gap-x-8 bg-white shadow-xl p-4 rounded-lg">
            {
                categoriez.map((item, index) => (
                    <div key={index} className="text-md font-bold">{item.name}</div>
                ))
            }
        </div>
    )
}

export default CategoryTab