import React from 'react';
import Card from '../UI/Card';
import classes from "./BookItem.module.css";

export const BookItem = (props) => {
  
    return (
      <Card>
        <div className={classes.img}>
          <img src="https://i.etsystatic.com/34014044/r/il/f10e8b/3693058786/il_1140xN.3693058786_md2b.jpg" alt={props.alt || "Image"} />
        </div>
  
        <div className={classes.title}>
          {/* <span>{props.title}</span> */}
          <span>title</span>
        </div>
        <div className={classes.discription}>
          
          <p>Rating: 8/10</p>
          <p>Released On: 2001</p>
        </div>
  
        <div className={classes["button-container"]}>
          <button className={classes.button}>Show More</button>
        </div>
  
        {/* <Link className='btn' to={`/movies/${props.id}`}>
          Show More
        </Link> */}
      </Card>
    );
  
}
