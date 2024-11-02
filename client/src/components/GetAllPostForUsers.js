import axios from "axios";
import { useEffect, useState } from "react";
import { Button, Card, Col, Container, Row, Spinner, Pagination } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import "../styles/PostsList.css"; // Assuming you have a separate CSS file for custom styles

function GetAllPostForUsers() {
    const navigate = useNavigate();
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);

    useEffect(() => {
        async function fetchPosts() {
            try {
                const response = await axios.get("http://localhost:5000/posts/"); // Fixed quotation marks
                if (response.data.data && Array.isArray(response.data.data)) {
                    setPosts(response.data.data);
                    setTotalPages(response.data.numberOfPages);
                } else {
                    console.error("Unexpected response data:", response.data);
                }
                setLoading(false);
            } catch (err) {
                console.error("Error fetching posts:", err);
                setLoading(false);
            }
        }
        fetchPosts();
    }, [currentPage]);

    function handleSinglePost(id) {
        navigate(`/posts/${id}`); // Fixed quotation marks
    }

    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
    };
    return (
        <Container fluid className="container-custom bg-lavender" style={{ minHeight: '100vh', paddingTop: '80px' }}>
            {loading ? (
                <div className="text-center my-5">
                    <Spinner animation="border" variant="primary" />
                    <p>Loading posts...</p>
                </div>
            ) : (
                <>
                    <Row className="justify-content-center">
                        {posts.length > 0 ? (
                            posts.map((post) => (
                                <Col key={post._id} xs={12} sm={6} md={4} lg={3} className="mb-4">
                                    <Card className="card-custom">
                                        <Card.Img 
                                            variant="top" 
                                            src={`http://localhost:5000/${post.selectedFile}`} // Fixed template literal
                                            alt={post.title} 
                                            className="card-img-custom"
                                        />
                                        <Card.Body className="card-body-custom">
                                            <Card.Title className="card-title-custom">{post.title}</Card.Title>
                                            <Button 
                                                className="see-more-button" 
                                                onClick={() => handleSinglePost(post._id)} 
                                                size="sm"
                                            >
                                                See More
                                            </Button>
                                        </Card.Body>
                                    </Card>
                                </Col>
                            ))
                        ) : (
                            <p>No posts available.</p>
                        )}
                    </Row>
                    <Pagination className="justify-content-center">
                        {Array.from({ length: totalPages }, (_, index) => (
                            <Pagination.Item
                                key={index}
                                active={index + 1 === currentPage}
                                onClick={() => handlePageChange(index + 1)}
                            >
                                {index + 1}
                            </Pagination.Item>
                        ))}
                    </Pagination>
                </>
            )}
        </Container>
    );
}

export default GetAllPostForUsers;
