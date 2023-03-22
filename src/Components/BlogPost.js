import BlogReview from "./BlogReview";
import {Link} from "react-router-dom";
import React from "react";

function BlogPost(props) {
    return <div className="d-flex align-items-center me-5" key={props.index}>
        <div className="flex-shrink-0">
            <img
                width={150}
                height={150}
                className="mr-3"
                src={props.img}
                alt="photo"
            />
        </div>
        <div className="flex-grow-1 ms-3">
            <Link key={props.id} to={`/blog/${props.id}`}>
                <h5>{props.title}</h5>
            </Link>
            <p>
                {props.body}
            </p>
            <h6>{props.date}</h6>
        </div>
    </div>
}

export default BlogPost;