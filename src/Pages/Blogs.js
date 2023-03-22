import React, {useState} from 'react';
import {Container, Col, Row, Card, ListGroup} from "react-bootstrap";
import {Link} from "react-router-dom";
import {FaStar} from "react-icons/fa";
import BlogPost from "../Components/BlogPost";
import BlogReview from "../Components/BlogReview";

const categories = [
    {category: "Всі записи"},
    {category: "Тільки туризм"},
    {category: "Тільки програмування"},
];
//возможные типи сортировок: Дата (по порядку/убывание), заголовок по алфавиту (по порядку / убывание)
const options = [
    {value: 'UpNewestFirst', label: '\u2193 Newest first'},
    {value: 'DownNewestFirst', label: '\u2191 Newest first'},
    {value: 'UpAlphabetical', label: '\u2193 In alphabetical order'},
    {value: 'DownAlphabetical', label: '\u2191 In alphabetical order'}
]
// кастомный лист блогов (на самом деле нужен бек)
const blogList = [
    {
        id: "1",
        img: "https://emgotas.files.wordpress.com/2016/11/what-is-a-team.jpg",
        title: "Blogs post 1",
        body: "Test blog 2",
        category: categories[0].category,
        date: "15 June 2023",
        rating: 0
    },
    {
        id: "2",
        img: "https://emgotas.files.wordpress.com/2016/11/what-is-a-team.jpg",
        title: "Blogs post 2",
        body: "Test blog 2",
        category: categories[1].category,
        date: "15 July 2023",
        rating: 0
    },
    {
        id: "3",
        img: "https://emgotas.files.wordpress.com/2016/11/what-is-a-team.jpg",
        title: "Blogs post 3",
        body: "Test blog 3",
        category: categories[2].category,
        date: "15 January 2023",
        rating: 0
    },
    {
        id: "4",
        img: "https://emgotas.files.wordpress.com/2016/11/what-is-a-team.jpg",
        title: "ASD post 4",
        body: "Test blog 4",
        category: categories[0].category,
        date: "15 September 2023",
        rating: 3
    },
    {
        id: "5",
        img: "https://emgotas.files.wordpress.com/2016/11/what-is-a-team.jpg",
        title: "Blogs post 5",
        body: "Test blog 5",
        category: categories[1].category,
        date: "15 August 2023",
        rating: 2
    },
    {
        id: "6",
        img: "https://emgotas.files.wordpress.com/2016/11/what-is-a-team.jpg",
        title: "Blogs post 6",
        body: "Test blog 6",
        category: categories[2].category,
        date: "15 December 2023",
        rating: 0
    },
    {
        id: "7",
        img: "https://emgotas.files.wordpress.com/2016/11/what-is-a-team.jpg",
        title: "Blogs post 7",
        body: "Test blog 7",
        category: categories[0].category,
        date: "15 November 2023",
        rating: 0
    },
    {
        id: "8",
        img: "https://emgotas.files.wordpress.com/2016/11/what-is-a-team.jpg",
        title: "Blogs post 8",
        body: "Test blog 8",
        category: categories[1].category,
        date: "15 May 2023",
        rating: 0
    },
    {
        id: "9",
        img: "https://emgotas.files.wordpress.com/2016/11/what-is-a-team.jpg",
        title: "Blogs post 9",
        body: "Test blog 9",
        category: categories[2].category,
        date: "15 March 2023",
        rating: 0
    },
    {
        id: "10",
        img: "https://emgotas.files.wordpress.com/2016/11/what-is-a-team.jpg",
        title: "Blogs post 10",
        body: "Test blog 10",
        category: categories[0].category,
        date: "15 February 2023",
        rating: 0
    },
    {
        id: "11",
        img: "https://emgotas.files.wordpress.com/2016/11/what-is-a-team.jpg",
        title: "Blogs post 11",
        body: "Test blog 11",
        category: categories[1].category,
        date: "15 April 2023",
        rating: 0
    },
    {
        id: "12",
        img: "https://emgotas.files.wordpress.com/2016/11/what-is-a-team.jpg",
        title: "Blogs post 12",
        body: "Test blog 12",
        category: categories[2].category,
        date: "15 October 2023",
        rating: 0
    },
];

function Blogs() {
    const slicePage = 5; // количество блогов на странице
    const [page, setPage] = useState(1);

    const [blogs, setBlogs] = useState(blogList);

    /* выбраная сортировка пользователём */
    const [userSortSelected, setUserSortSelected] = useState(options[0].value);

    /* на будущее если захотим создавать поиск по заголовкам этот стейт пригодится */
    const [countPage, setCountPage] = useState(Math.ceil(Object.keys(blogList).length / 5));

    const [activeBtn, setActiveBtn] = useState(categories[0].category); // активная категория

    // Наши кастомные функции

    /* возвращает параметры при сортировке */
    function sortParams() {
        switch (userSortSelected) {
            case options[0].value:
                return ((a, b) => new Date(a.date) > new Date(b.date) ? 1 : -1);
            case options[1].value:
                return ((a, b) => new Date(a.date) < new Date(b.date) ? 1 : -1);
            case options[2].value:
                return ((a, b) => a.title.toLowerCase() > b.title.toLowerCase() ? 1 : -1);
            case options[3].value:
                return ((a, b) => a.title.toLowerCase() < b.title.toLowerCase() ? 1 : -1);
            default:
                return null;
        }
    }

    /* Обновление при select */
    const handleChange = (event) => {
        setUserSortSelected(event.target.value);
    };

    /* Обновление рейтинга с изменение в нашем листе блогов */
    function handleRatingChange(id, newRating) {
        const updateBlogs = blogs;
        updateBlogs.find((item, index) => {
            if (item.id === id) {
                item.rating = newRating;
            }
        });
        setBlogs(updateBlogs);
        // console.log("New rating:", newRating, " id", id);
    }

    return (
        <Container>
            <Row>

                {/* Сортировка */}
                <select onChange={handleChange}>
                    {
                        options.map((item, index) => {
                            return <option key={index} value={item.value}> {item.label} </option>
                        })
                    }
                </select>

                {/* Блоги */}
                <Col md="9">
                    {
                        blogs
                            .sort(sortParams())
                            .slice((page - 1) * slicePage, page * slicePage)
                            .map((item, index) => {
                                return (
                                    <div key={item.id}>
                                        <BlogPost
                                            img={item.img}
                                            id={item.id}
                                            title={item.title}
                                            body={item.body}
                                            date={item.date}
                                        />
                                        <BlogReview
                                            key={index}
                                            id={item.id}
                                            rating={item.rating}
                                            onRatingChange={handleRatingChange}
                                        />
                                    </div>
                                );
                            })
                    }
                    <div className="pagination">
                        <div>
                            <button
                                disabled={page === 1}
                                onClick={() => {
                                    setPage((prevState) => prevState - 1);
                                }}
                            >
                                {'<'} Previous
                            </button>
                        </div>
                        <div className="pagination_number">
                            {
                                [...Array(countPage)].map((x, i) => {
                                        return <button
                                            key={i}
                                            onClick={
                                                () => {
                                                    setPage((i + 1))
                                                }
                                            }
                                            style={{
                                                fontWeight:
                                                    i + 1 === page
                                                        ? "bold" : "normal",
                                                background: "none",
                                                outline: "none",
                                                border: "none"
                                            }}
                                        >{(i + 1)}
                                        </button>
                                    }
                                )
                            }
                        </div>
                        <div>
                            <button
                                disabled={page === countPage}
                                onClick={() => {
                                    setPage((prevState) => prevState + 1);
                                }}
                            >
                                Next >
                            </button>
                        </div>
                    </div>
                </Col>

                {/* Боковая панелька */}
                <Col md="3">
                    <h5 className="text-center mt-5">Категорії</h5>

                    <Card>
                        <ListGroup variant="flush">
                            {
                                categories.map((item, index) => {
                                    return <>
                                        <ListGroup.Item style={{textAlign: "left"}}>
                                            <button
                                                key={index}
                                                style={{
                                                    fontWeight:
                                                        activeBtn === item.category
                                                            ? "bold" : "normal",
                                                    background: "none",
                                                    outline: "none",
                                                    border: "none"
                                                }}
                                                onClick={
                                                    () => {
                                                        setActiveBtn(item.category);
                                                    }
                                                }
                                            >
                                                {item.category}
                                            </button>
                                        </ListGroup.Item>
                                    </>
                                })
                            }

                        </ListGroup>
                    </Card>

                    <Card className="mt-3 bg-light">
                        <Card.Body>
                            <Card.Title>Slide widget</Card.Title>
                            <Card.Text>
                                Lorem
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
}

export default Blogs;