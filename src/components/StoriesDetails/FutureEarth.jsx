import {Card} from "react-bootstrap"

// eslint-disable-next-line react/prop-types
export const WordExplorerCard = ({Storyimage,Storyttext}) => {
    return (
        <div className=' py-1 cursor-pointer h-100  ' >
            <Card className='p-2 h-100' style={{width: '100%',background: "linear-gradient(90deg,rgb(48, 48, 207),rgb(11, 180, 248))"}}>
                <Card.Img variant="top" className=' rounded-2' src={`https://ik.imagekit.io/dev24/${Storyimage?.[0]}`} />

                <Card.Body style={{minHeight: "50px"}}>
                    <Card.Title style={{textAlign: "center"}}>{Storyttext} </Card.Title>
                </Card.Body>
            </Card>
        </div>
    )
}
