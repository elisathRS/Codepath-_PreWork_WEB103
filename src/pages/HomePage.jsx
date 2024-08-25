import React from 'react';
import { useNavigate } from 'react-router-dom';
import ContentCreatorCard from '../components/ContentCreatorCard';
import ViewCreator from './ViewCreator';

function HomePage({ handleViewAllClick }) {
    const navigate = useNavigate(); // Initialize useNavigate

    return (
        <div className="home-page">
            {/* Button to view all creators */}
            <button
                className="home-page-link"
                onClick={() => {
                    handleViewAllClick();
                    navigate('/');
                }}
            >
                View All Creators
            </button>
            
            {/* Button to add a new creator */}
            <button
                className="home-page-link"
                onClick={() => navigate('/new')}
            >
                Add New Creator
            </button>
        </div>
    );
}

export default HomePage;

