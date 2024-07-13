import React from 'react';
import Home from '../../Pages/Home/Home';

const MainLayout = () => {
    return (
        <div >
        <div className='max-w-7xl text-center mx-auto my-1 px-1 py-2 rounded'>
            {/* nav */}
            <Home/>
            
        </div>
        {/* footer */}
        </div>
    );
};

export default MainLayout;