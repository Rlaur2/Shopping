import React, { useState } from 'react'
import {ReactComponent as EmptyStar} from '/home/pavel/Projects/Shopping/shopping/src/images/star-outline.svg'
import {ReactComponent as FullStar} from '/home/pavel/Projects/Shopping/shopping/src/images/star.svg'
import './stylesheets/FilterRating.css'

export const FilterRating = ({starFilter, setStarFilter, change, setChange}) => {
    const [update, setUpdate] = useState(false);
    const handleStarFilter = (e) => {
        const newStarFilter = starFilter;
        newStarFilter[e.target.value] = !newStarFilter[e.target.value]
        setStarFilter(newStarFilter);
        setUpdate(!update);
        setChange(!change);
    };

    return (
    <div className='stars'>
            <div className="filter-title">Customer Ratings</div>
            <div className='five-star filter-select'>
                <input
                    onChange={handleStarFilter} 
                    type="checkbox" 
                    name="five-star" 
                    id="five-star"
                    value="five"
                    checked={starFilter.five} 
                />
                <label htmlFor="five-star">
                    <FullStar />
                    <FullStar />
                    <FullStar />
                    <FullStar />
                    <FullStar />
                </label>
            </div>
            <div className='four-star filter-select'>
                <input
                    onChange={handleStarFilter} 
                    type="checkbox" 
                    name="four-star" 
                    id="four-star"
                    value="four"
                    checked={starFilter.four}  
                />
                <label htmlFor="four-star">
                    <FullStar />
                    <FullStar />
                    <FullStar />
                    <FullStar />
                    <EmptyStar />
                </label>
            </div>
            <div className='three-star filter-select'>
                <input
                    onChange={handleStarFilter} 
                    type="checkbox" 
                    name="three-star" 
                    id="three-star"
                    value="three"
                    checked={starFilter.three}  
                />
                <label htmlFor="three-star">
                    <FullStar />
                    <FullStar />
                    <FullStar />
                    <EmptyStar />
                    <EmptyStar />
                </label>
            </div>
            <div className='two-star filter-select'>
                <input
                    onChange={handleStarFilter} 
                    type="checkbox" 
                    name="two-star" 
                    id="two-star"
                    value="two"
                    checked={starFilter.two}  
                />
                <label htmlFor="two-star">
                    <FullStar />
                    <FullStar />
                    <EmptyStar />
                    <EmptyStar />
                    <EmptyStar />
                </label>
            </div>
            <div className='one-star filter-select'>
                <input
                    onChange={handleStarFilter} 
                    type="checkbox" 
                    name="one-star" 
                    id="one-star"
                    value="one"
                    checked={starFilter.one}  
                />
                <label htmlFor="one-star">
                    <FullStar />
                    <EmptyStar />
                    <EmptyStar />
                    <EmptyStar />
                    <EmptyStar />
                </label>
            </div>

    </div>
  )
}
