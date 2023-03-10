import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';




const LeftSideNav = () => {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        fetch('https://skypearl-learning-server.vercel.app/course-categories')
            .then(res => res.json())
            .then(data => setCategories(data))
    }, [])

    return (
        <div>
            <h4>Total Courses: {categories.length}</h4>
            <div>
                {
                    categories.map(category => <p className="d-grid gap-2  " >
                        <Button variant="dark" size="lg" key={category.id}><Link to={`/category/${category.id}`}>{category.name}</Link></Button>
                    </p>)
                }
            </div>
        </div>
    );
};

export default LeftSideNav;