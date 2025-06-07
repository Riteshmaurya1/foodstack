import React, { useState } from 'react'
import { useCart } from '../../CartContext/CartContext'

const categories = ['Breakfast', 'Lunch', 'Dinner', 'Mexican', 'Italian', 'Desserts', 'Drinks'];
import { dummyMenuData } from '../../assets/OmhDD'
const OurHome = () => {
    const [activeCategory, setActiveCategory] = useState(categories[0]);
    const displayItems = (dummyMenuData[activeCategory] || []).slice(0, 4);
    const { cartItems, addToCart, removeFromCart } = useCart();
    const getQuantity = id => (cartItems.find(i => i.id === id)?.quantity || 0)
    return (
        <div className=' bg-gradient-to-br from-[#1a120b] via-[#2a1e14] to-[#3e2b1d]  min-h-screen 
      py-16 px-4 sm:px-6 lg:px-8 '>
            <div className=" max-w-7xl mx-auto">
                <h2 className=" text-4xl sm:text-5xl md:text-6xl font-bold text-center mb-12 
             bg-clip-text text-transparent bg-gradient-to-r from-amber-200 via-amber-300 to-amber-200 ">
                    <span className=" font-dancingscript block text-5xl md:text-7xl sm:text-6xl mb-2">
                        Our Exquisite Menu
                    </span>
                    <span className=" block text-xl sm:text-2xl md:text-3xl font-cinxel mt-4 text-amber-100/80">
                        A Symphony of Flavours
                    </span>
                </h2>
                <div className=" flex flex-wrap justify-center gap-4 mb-15">
                    {categories.map(cat => (
                        <button key={cat} onClick={() => setActiveCategory(cat)}
                            className={` px-4 sm:px-6 py-2 rounded-full border-2 transition-all duration-300 
                         transform font-cinzel text-sm sm:text-lg tracking-widest backdrop-blur-sm
                         ${activeCategory === cat ?
                                    'bg-gradient-to-r from-amber-900/80 to-amber-700/80 border-amber-800 scale-105 shadow-xl shadow-amber-900/30'
                                    : ' bg-amber-900/20 border-amber-800/30 text-amber-100/80 hover:bg-amber-800/40 hover'} `}
                        >
                            {cat}
                        </button>
                    ))}
                </div>
                <div className=" grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4">
                    {displayItems.map((item, i) => {
                        const quantity = getQuantity(item.id);
                        return (
                            <div
                                key={item.id}
                                className=" relative bg-amber-900/20 rounded-2xl overflow-hidden border border-amber-800/30 
                                    backdrop-blur-sm flex flex-col transition-all duration-500"
                                style={{ '--index': i }}>
                                <div className=" relative h-48 sm:h-5/6 md:h-60 flex items-center justify-center bg-black/10">
                                    <img src={item.image} alt={item.name}
                                        className=' max-h-full max-w-full object-contain transition-all duration-700 ' />
                                </div>
                                <div className=" p-4 sm:p-6 flex flex-col flex-grow">
                                    <div className=" absolute top-0 left-1/2 -translate-x-1/2 w-16 h-1 bg-gradient-to-r from-transparent 
                                     via-amber-800/50 to-transparent opacity-50 transition-all duration-300"/>
                                     <h3 className=" text-xl sm:text-2xl mb-2 font-dancingscript text-amber-100 transition-colors">
                                        {item.name}
                                     </h3>
                                     <p className=" text-amber-100/80 text-xs"></p>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default OurHome