import React, {useContext, useEffect, useState} from 'react';
import {Container, Col, Row, Card, ListGroup} from "react-bootstrap";
import BlogPost from "../Components/BlogPost";
import BlogReview from "../Components/BlogReview";
import {onValue, ref, update} from "firebase/database";
import {db} from "../firebase";
import LanguageContext from "../Components/LanguageContext";


// нужно для первоначальной инициализации (опять костыли, да да..)
const category = [
    {category: "Всі записи"}
];

//возможные типи сортировок: Дата (по порядку/убывание), заголовок по алфавиту (по порядку / убывание)
const options = [
    {value: 'UpNewestFirst', labelEN: '\u2193 Newest first', labelUA: '\u2193 Найновіші перші'},
    {value: 'DownNewestFirst', labelEN: '\u2191 Newest down', labelUA: '\u2191 Найновіші останні'},
    {value: 'UpAlphabetical', labelEN: '\u2193 In alphabetical order', labelUA: '\u2193 В алфавітному порядку'},
    {value: 'DownAlphabetical', labelEN: '\u2191 Out alphabetical order', labelUA: '\u2191Поза алфавітного порядку'}
]

function Blogs() {
    const {language} = useContext(LanguageContext);

    const slicePage = 5; // количество блогов на странице
    const [page, setPage] = useState(1);

    const [blogs, setBlogs] = useState([]);
    const [categories, setCategories] = useState(category);

    /* выбраная сортировка пользователём */
    const [userSortSelected, setUserSortSelected] = useState(options[0].value);

    /* на будущее если захотим создавать поиск по заголовкам этот стейт пригодится */
    const [countPage, setCountPage] = useState(Math.ceil(Object.keys(blogs).length / slicePage));

    const [activeBtn, setActiveBtn] = useState(category[0].category); // активная категория

    useEffect(() => {
        /* Фильтруем блоги */
        const filteredBlogs = blogs.filter(blog =>
            activeBtn === categories[0].category ? true : blog.category === activeBtn
        );
        setCountPage(Math.ceil(Object.keys(filteredBlogs).length / slicePage));

        if(blogs.length === 0) { // инициализация первый раз
            // вытягиваем json блогов с firebase
            const todoRef1 = ref(db, `blogs`);
            onValue(todoRef1, (snapshot) => {
                setBlogs([]);
                const data = snapshot.val();
                if (data !== null) {
                    Object.values(data).map((todo) => {
                        setBlogs((oldArray) => [...oldArray, todo]);
                    });
                }
            });
        }

        if(categories.length === 1) { // по умолчанию мы выше инициализировалии только 1 категорию (показать все)
            // вытягиваем json категорий с firebase
            const todoRef2 = ref(db, `categories`);
            onValue(todoRef2, (snapshot) => {
                    setCategories([]);
                    const data = snapshot.val();
                    if (data !== null) {
                        Object.values(data).map((category) => {
                            setCategories((oldArray) => [...oldArray, category]);
                        });
                    }
                }
            );
        }

    }, [blogs, activeBtn, slicePage]);

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
        updateBlogs.find(item => {
            if (item.id === id) {
                item.rating = newRating;
            }
        });
        setBlogs(updateBlogs);

        update(ref(db, `blogs/${id-1}`), {
            rating: newRating
        })
    }

    return (
        <Container>
            <Row>

                {/* Сортировка */}
                <select onChange={handleChange}>
                    {
                        options.map((item, index) => {
                            return <option key={index} value={item.value}>
                                {
                                    language === "uk" ? item.labelUA : item.labelEN
                                }
                            </option>
                        })
                    }
                </select>

                {/* Блоги */}
                <Col md="9">
                    {
                        blogs
                            // Фильтруем по категории (для вывода)
                            .filter((blog) =>
                                activeBtn === categories[0].category ? true : blog.category === activeBtn
                            )
                            // Сортировка по дате или алфавиту
                            .sort(sortParams())
                            // Режим на страницы
                            .slice((page - 1) * slicePage, page * slicePage)
                            // Выводим итог
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
                                {'<'} { language === "uk" ? "Назад" : "Previous"}
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
                                { language === "uk" ? "Вперед" : "Next"} >
                            </button>
                        </div>
                    </div>
                </Col>

                {/* Боковая панелька */}
                <Col md="3">
                    <h5 className="text-center mt-5">
                        {
                            language === "uk" ? "Категорії" : "Categories"
                        }
                    </h5>

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

                    {/*<Card className="mt-3 bg-light">*/}
                    {/*    <Card.Body>*/}
                    {/*        <Card.Title>Slide widget</Card.Title>*/}
                    {/*        <Card.Text>*/}
                    {/*            Lorem*/}
                    {/*        </Card.Text>*/}
                    {/*    </Card.Body>*/}
                    {/*</Card>*/}
                </Col>
            </Row>
        </Container>
    );
}

export default Blogs;