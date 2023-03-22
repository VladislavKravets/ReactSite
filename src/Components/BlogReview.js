import { useState } from "react";
import { FaStar } from "react-icons/fa";

function BlogReview(props){
    const [rating, setRating] = useState(props.rating);

    const handleRating = (value) => {
        setRating(value);
        props.onRatingChange(props.id, value); // Вызов функции обратного вызова при изменении рейтинга
    };

    return (
        <div>
            {[...Array(5)].map((star, i) => {
                const ratingValue = i + 1;
                return (
                    <label key={i}>
                        <input
                            style={{display: "none"}}
                            type="radio"
                            name="rating"
                            value={ratingValue}
                            onClick={() => handleRating(ratingValue)}
                        />
                        <FaStar
                            className="star"
                            color={ratingValue <= rating ? "#ffc107" : "#e4e5e9"}
                        />
                    </label>
                );
            })}
        </div>
    );
}

export default BlogReview;