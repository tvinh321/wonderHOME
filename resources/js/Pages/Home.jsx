import React from 'react';
import { BeakerIcon } from '@heroicons/react/24/solid'

export function Home() {
    return (
        <div>
            <BeakerIcon className="h-6 w-6 text-blue-500"/>
            <h1 className='text-amber-500 font-bold'>Home</h1>
        </div>
    );
}