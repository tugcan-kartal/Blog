"use client"

import { useParams } from 'next/navigation'; // Correct import
import React from 'react';

const Category: React.FC = () => {
    const params = useParams(); // Access the params
    const categoryName = params.category as string; // Access the category parameter

    if (!categoryName) {
        return <div>Loading...</div>; // Fallback for when the param isn't ready yet
    }

    return (
        <div className="mt-10">
            <h1 className="text-2xl font-bold">{categoryName.toUpperCase()} Gallery</h1>
        </div>
    );
};

export default Category;
