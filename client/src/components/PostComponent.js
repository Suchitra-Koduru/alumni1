import DropDown from "./DropDown";
import axios from "axios";
import {useEffect ,UseState } from "react";
import {Button , Card ,Col , Container , Row }  from "react-bootstrap";
import {useNavigate} from "react-router-dom";
function PostComponent(){
    const navigate = useNavigate();
    const[posts,setMovies]=useState([]);
    useEffect(()=>{
        async function fetchPosts() {
            try{  
            const response = await axios.get("http://localhost:5000/posts/");
              setPosts(response.data);
            } 
            catch(err){
                console.log(err);
            }
        }
        fetchPosts();
    },[]);
    function handleSinglePost(id){
        try{
            navigate(`/getPost/${id}`);
        }
        catch(err){
            console.log(err);
        }
    }
    return (
        <div>
            <Container className="container-custom">
                <Row className="custom-row">
                    {posts.map((post,index) =>(
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

                    ))}
                </Row>
            </Container>
        </div>
    );
};
export default PostComponent;