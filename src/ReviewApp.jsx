import React from 'react';
import ReviewCard from './ReviewCard';
import "./Test.css";

const ReviewApp = () => {
    return (
        <div className="main-div text-center">
            <h1>Our Reviews</h1>
            <ReviewCard />
        </div>
    )
}

export default ReviewApp;