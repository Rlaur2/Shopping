import React from 'react'
import {ReactComponent as EmptyStar} from '/home/pavel/Projects/Shopping/shopping/src/images/star-outline.svg'
import {ReactComponent as FullStar} from '/home/pavel/Projects/Shopping/shopping/src/images/star.svg'
import {ReactComponent as HalfStar} from '/home/pavel/Projects/Shopping/shopping/src/images/star-half-full.svg'
import './stylesheets/FilterRating.css'


export const StarRatings = ({rating}) => {
  if (rating > 4.5) {
    return(
        <div className='stars'>
            <FullStar />
            <FullStar />
            <FullStar />
            <FullStar />
            <FullStar />
        </div>
    )
  } else if (rating <= 4.5 && rating > 4) {
    return(
        <div className='stars'>
            <FullStar />
            <FullStar />
            <FullStar />
            <FullStar />
            <HalfStar />
        </div>
    )
  } else if (rating <= 4 && rating > 3.5) {
    return(
        <div className='stars'>
            <FullStar />
            <FullStar />
            <FullStar />
            <FullStar />
            <EmptyStar />
        </div>
    )
  } else if (rating <= 3.5 && rating > 3) {
    return(
        <div className='stars'>
            <FullStar />
            <FullStar />
            <FullStar />
            <HalfStar />
            <EmptyStar />
        </div>
    )
  } else if (rating <= 3 && rating > 2.5) {
    return(
        <div className='stars'>
            <FullStar />
            <FullStar />
            <FullStar />
            <EmptyStar />
            <EmptyStar />
        </div>
    )
  } else if (rating <= 2.5 && rating > 2) {
    return(
        <div className='stars'>
            <FullStar />
            <FullStar />
            <HalfStar />
            <EmptyStar />
            <EmptyStar />
        </div>
    )
  } else if (rating <= 2 && rating > 1.5) {
    return(
        <div className='stars'>
            <FullStar />
            <FullStar />
            <EmptyStar />
            <EmptyStar />
            <EmptyStar />
        </div>
    )
  } else if (rating <= 1.5 && rating > 1) {
    return(
        <div className='stars'>
            <FullStar />
            <HalfStar />
            <EmptyStar />
            <EmptyStar />
            <EmptyStar />
        </div>
    )
  } else if (rating <= 1 && rating > 0.5) {
    return(
        <div className='stars'>
            <FullStar />
            <EmptyStar />
            <EmptyStar />
            <EmptyStar />
            <EmptyStar />
        </div>
    )
  } else if (rating <= 0.5)  {
    return(
        <div className='stars'>
            <HalfStar />
            <EmptyStar />
            <EmptyStar />
            <EmptyStar />
            <EmptyStar />
        </div>
    )
  }
}
