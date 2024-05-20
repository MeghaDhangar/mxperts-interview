
import {Card} from 'react-bootstrap'
import {useNavigate} from 'react-router-dom';

// eslint-disable-next-line react/prop-types
export const Storie = ({_id,Image,Title,Status}) => {
    const navigate = useNavigate();
    const ClickCard = () => {
        navigate("/stories/" + _id);
    };
    return (
        <div className='w-100  py-1 cursor-pointer ' style={{height: "350px"}} onClick={ClickCard}  >
            <Card className='p-2 h-100' style={{width: '100%',background: "linear-gradient(90deg,rgb(48, 48, 207),rgb(11, 180, 248))"}}>
                <Card.Img variant="top" className=' rounded-2 h-50' src={`https://ik.imagekit.io/dev24/${Image?.[0]}`} />
                <Card.Body style={{minHeight: "50px"}}>
                    <Card.Title style={{textAlign: "unset"}}>{Title}</Card.Title>
                </Card.Body>
                <Card.Body className=' w-100'>
                    <div className=' w-100 py-2 bg-white rounded-4 text-center fw-bold '  > <span style={{color: Status == "Completed" ? "green" : Status == "In Progress" ? "#FFCE51" : Status == "New" ? "#318FFF" : ""}}>{Status}</span> </div>
                </Card.Body>
            </Card>
        </div>
    )
}
