import React, { useState } from 'react'
import ReviewsData from "./ReviewsData";


const ReviewCard = () => {
    // Hooks
    const [CurrentItemIndex, setCurrentItemIndex] = useState(0);
    // 
    const currentReview = ReviewsData[CurrentItemIndex];
    // Previous Button Function
    const previousReview = () => {
        let CurrentIndex;
        CurrentIndex = CurrentItemIndex - 1;
        if (CurrentIndex < 0) {
            CurrentIndex = ReviewsData.length - 1;
        }
        setCurrentItemIndex(CurrentIndex);
    }
    // Next Button Function
    const nextReview = () => {
        let CurrentIndex;
        CurrentIndex = CurrentItemIndex + 1;
        if (CurrentIndex > ReviewsData.length - 1) {
            CurrentIndex = 0
        }
        setCurrentItemIndex(CurrentIndex)
    }
    // Random Button Function
    const randomReview = () => {
        let CurrentIndex = Math.floor(Math.random() * ReviewsData.length)
        setCurrentItemIndex(CurrentIndex);
    }
    // Return
    return (
        <>
            <div className="review-card text-center shadow mx-auto">
                <div className="img-container">
                    <img id="person-img" className="person-img" src={currentReview.img} alt="image" />
                </div>
                <div className="info-container">
                    <h3>{currentReview.name}</h3>
                    <h3>{currentReview.job}</h3>
                    <p>{currentReview.text}</p>
                </div>
                <svg onClick={previousReview} className="prevnext-btn" width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-arrow-left-square" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" d="M14 1H2a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z" />
                    <path fill-rule="evenodd" d="M12 8a.5.5 0 0 1-.5.5H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5a.5.5 0 0 1 .5.5z" />
                </svg>
                <svg onClick={nextReview} className="prevnext-btn" width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-arrow-right-square" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" d="M14 1H2a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z" />
                    <path fill-rule="evenodd" d="M4 8a.5.5 0 0 0 .5.5h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H4.5A.5.5 0 0 0 4 8z" />
                </svg>
                <br />
                <button onClick={randomReview} className="sm-btn m-3">Surprise me</button>
            </div>
        </>
    )
}

export default ReviewCard;