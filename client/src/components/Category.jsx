import { categories } from '@/helpers/categories'
import React from 'react'


const Category = () => {
  return (
    <div className='grid lg:grid-rows-1 h-28 lg:grid-cols-9 md:grid-rows-2 md:grid-cols-6 gap-4 mt-10'>
        { 
            categories.map((category, index) => (
                <div key={index} className='w-full h-full border p-2 shadow-xl rounded-lg'>
                    <div className=' w-full h-full flex items-start justify-start flex-col gap-2'>
                    <img src={category.categoryName} alt={category.categoryText} className='w-6 h-6 mt-3 object-contain self-start' />
                    <span className='text-sm block w-full self-center'>{category.categoryText}</span>
                    </div>
                </div>
            ))
        }
    </div>
  )
}

export default Category