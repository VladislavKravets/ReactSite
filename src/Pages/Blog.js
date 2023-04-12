import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import {db} from "../firebase";
import {uid} from "uid";
import {onValue, ref, push, set, remove, update} from "firebase/database";


function Blog() {
    // comment
    const [author, setAuthor] = useState("");
    const [comment, setComment] = useState("");
    const [blogs, setBlogs] = useState([]);

    // database end edit
    const [comments, setComments] = useState([]);
    const [isEdit, setIsEdit] = useState(false);
    const [tempUuid, setTempUuid] = useState("");

    // ссылка блога
    const {link} = useParams();

    const handleDelete = (comment) => {
        remove(ref(db, `comments/${link}/${comment.uuid}`)).then(r => console.log(r));
    }

    const handleUpdate = (comment) => {
        setIsEdit(true);
        setTempUuid(comment.uuid);
        setComment(comment.comment);
        setAuthor(comment.author);
    }

    const handleSubmitChange = () => {
        update(ref(db, `comments/${link}/${tempUuid}`), {
            comment: comment,
            author: author,
            uuid: tempUuid,
        }).then(r => console.log(r));
        setComment("");
        setAuthor("");
        setIsEdit(false);
    }

    useEffect(() => {
        const commentsRef = ref(db, `comments/${link}`);
        onValue(commentsRef, (snapshot) => {
            setComments([]);
            const data = snapshot.val();
            if (data !== null) {
                Object.values(data).map((todo) => {
                    setComments((oldArray) => [...oldArray, todo]);
                });
            }
        });
        const blogsRef = ref(db, `blogs`);
        onValue(blogsRef, (snapshot) => {
            setBlogs([]);
            const data = snapshot.val();
            if (data !== null) {
                Object.values(data).map((todo) => {
                    setBlogs((oldArray) => [...oldArray, todo]);
                });
            }
        });
    }, []);

    const writeToDatabase = () => {
        const uuid = uid();
        set(ref(db, `comments/${link}/${uuid}`), {
            comment: comment,
            author: author, // add author field
            uuid,
        }).then(r => console.log(r));
        setComment("");
        setAuthor(""); // clear author field after submitting
    }

    return (
        <>
            {
                // ничего лучше и быстрее я пока придумать не мог..
                blogs.length > 0 ?
                    <>
                        <h2> {blogs[link - 1].title}</h2>
                        <img
                            width={150}
                            height={150}
                            className="mr-3"
                            src={blogs[link - 1].img}
                            alt="photo"
                        />
                        <p> {blogs[link - 1].body}</p>

                        <h1>Comments:</h1>
                        {
                            comments.map((comment) => (
                                <>
                                    <h3>{comment.comment}</h3>
                                    <p>Author: {comment.author}</p>
                                    <button onClick={() => handleUpdate(comment)}>update</button>
                                    <button onClick={() => handleDelete(comment)}>delete</button>
                                </>
                            ))
                        }

                        <div className="form">
                            <p>Author:</p>
                            <input type="text" value={author} onChange={(e) => setAuthor(e.target.value)}/>
                            <p>Comment: </p>
                            <input type="text" value={comment} onChange={(e) => setComment(e.target.value)}/>
                            <br/>
                            {
                                isEdit ? (
                                        <>
                                            <button onClick={handleSubmitChange}>Submit Change</button>
                                            <button onClick={() => {
                                                setIsEdit(false);
                                                setComment("");
                                                setAuthor("");
                                            }}>X
                                            </button>
                                        </>
                                    ) :
                                    (
                                        <>
                                            <button onClick={writeToDatabase}>Submit</button>
                                        </>
                                    )
                            }
                        </div>
                    </>
                    :
                    <>
                        Loading
                    </>
            }
        </>
    );
}

export default Blog;