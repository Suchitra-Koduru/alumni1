import axios from "axios";
import { useEffect, useState } from "react";
import { Button, Card, Col, Container, Row, Spinner } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

function PostComponent() {
    const navigate = useNavigate();
    const [posts, setPosts] = useState([]);  // Ensure initial state is an empty array
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function fetchPosts() {
            try {
                const response = await axios.get("http://localhost:5000/posts/");
                // Check if response.data is an array before setting it to posts
                if (Array.isArray(response.data)) {
                    setPosts(response.data);
                } else {
                    console.error("Unexpected response data:", response.data);
                }
                setLoading(false);
            } catch (err) {
                console.error("Error fetching posts:", err);
                setLoading(false);  // Ensure loading stops even on error
            }
        }
        fetchPosts();
    }, []);

    function handleSinglePost(id) {
        navigate(`/getPost/${id}`);
    }

    return (
        <div>
            <Container className="container-custom">
                {loading ? (
                    <div className="text-center my-5">
                        <Spinner animation="border" variant="primary" />
                        <p>Loading posts...</p>
                    </div>
                ) : (
                    <Row className="custom-row">
                        {posts.length > 0 ? (
                            posts.map((post) => (
                                <Col key={post._id} xs={12} sm={6} md={4} lg={12} className="custom-col mb-4">
                                    <Card className="card-custom">
                                        <Card.Img variant="top" src={post.selectedFile} />
                                        <Card.Body className="card-body-custom">
                                            <div className="card-content">
                                                <Card.Title className="card-title-custom fs-6">{post.postName}</Card.Title>
                                            </div>
                                            <div className="button-group-custom p-1">
                                                <Button className="custom-button" onClick={() => handleSinglePost(post._id)} variant="primary" size="sm">See More</Button>
                                            </div>
                                        </Card.Body>
                                    </Card>
                                </Col>
                            ))
                        ) : (
                            <p>No posts available.</p>
                        )}
                    </Row>
                )}
            </Container>
        </div>
    );
}

export default PostComponent;
