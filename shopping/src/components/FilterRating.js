import React from 'react'
import {ReactComponent as EmptyStar} from '/home/pavel/Projects/Shopping/shopping/src/images/star-outline.svg'
import {ReactComponent as FullStar} from '/home/pavel/Projects/Shopping/shopping/src/images/star.svg'
import './stylesheets/FilterRating.css'

export const FilterRating = () => {
  
    return (
    <div className='stars'>
            <div className="filter-title">Customer Ratings</div>
            <div className='five-star filter-select'>
                <input type="checkbox" name="five-star" id="five-star" />
                <label htmlFor="five-star">
                    <FullStar />
                    <FullStar />
                    <FullStar />
                    <FullStar />
                    <FullStar />
                </label>
            </div>
            <div className='four-star filter-select'>
                <input type="checkbox" name="four-star" id="four-star" />
                <label htmlFor="four-star">
                    <FullStar />
                    <FullStar />
                    <FullStar />
                    <FullStar />
                    <EmptyStar />
                </label>
            </div>
            <div className='three-star filter-select'>
                <input type="checkbox" name="three-star" id="three-star" />
                <label htmlFor="three-star">
                    <FullStar />
                    <FullStar />
                    <FullStar />
                    <EmptyStar />
                    <EmptyStar />
                </label>
            </div>
            <div className='two-star filter-select'>
                <input type="checkbox" name="two-star" id="two-star" />
                <label htmlFor="two-star">
                    <FullStar />
                    <FullStar />
                    <EmptyStar />
                    <EmptyStar />
                    <EmptyStar />
                </label>
            </div>
            <div className='one-star filter-select'>
                <input type="checkbox" name="one-star" id="one-star" />
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
