import { useParams } from "react-router-dom"
import { Header } from "../Header/Header"
import { useEffect, useState } from "react";
import { fetchStoriesDataById } from "../../api";
import { Batch } from "../Batch/Batch";
import { WordExplorerCard } from "./FutureEarth";
import Spinner from 'react-bootstrap/Spinner';
export const StoreDetail = () => {
    const { id } = useParams();
    const [storieDetail, setStoryDetail] = useState();
    const [bigStory, setBigStory] = useState();
    console.log("Big Story data is ", bigStory);
    
    const data = [
        {
            title: "World Explorer",
            bgColor: "linear-gradient(90deg,rgb(48, 48, 207),rgb(11, 180, 248))"
        }, {
            title: "Story Adventure",
            bgColor: "#2b2d48"
        }, {
            title: "Brain Quest",
            bgColor: "rgb(103, 255, 83)",
            className: "btn-outline-custom"
        }
    ];
    useEffect(() => {
        async function func() {
            const data = await fetchStoriesDataById(id);
            setStoryDetail(data);
            if (data?.Wordexplore?.length) {
                setBigStory(data?.Wordexplore?.[0]);
            }
            console.log("data is ", data)
        }
        if (id) {
            func();
        } else {
            console.log("NO id present")
        }
    }, [id]);


    return (
        <>
            <div className=" position-relative  pb-3 overflow-hidden" style={{ minHeight: "20vh" }}>
                <Header details={true} />
                {/* <img className=" position-absolute   w-100 h-100  " src={galaxy} style={{backgroundSize: "cover"}} alt="" /> */}
                <div style={{ backgroundColor: "#060922" }} className=" position-absolute   w-100 h-100  ">

                </div>
                <h1 className=" py-5 mt-5 text-gradient-custom position-relative z-1 text-center fw-bold">{storieDetail?.Title ?? "lorem Lipsum tiltle"}</h1>
                <h5 className="text-white"> {storieDetail?.Storyitext}</h5>
            </div>

            <div className=" container  py-5   z-1">
                <div className="row  d-flex justify-content-around flex-wrap ">

                    {data.map((value, index) => {
                        return <div key={index} className="col col-sm-6 col-md-4">
                            <Batch {...value} />
                        </div>
                    })
                    }
                </div>
            </div>

            {storieDetail?.Wordexplore?.length ? <div className=" row px-5  ">
                <div className="col-12 col-lg-4 p-2">
                    <div className=" p-3 rounded-3" style={{ border: "2px dashed rgb(48, 48, 207)", backgroundColor: "#242344" }}>
                        <div className=" py-2 d-flex justify-content-around text-white"> <h3 style={{ color: "rgb(48, 48, 207)", }}>{bigStory?.Storytitle} <sup className="text-white">(Noun)</sup></h3> </div>

                        <div className=" text-white text-wrap text-break">
                            <p>{bigStory?.Storyitext}</p>
                        </div>

                        <div className=" pb-3 w-100 d-flex justify-content-center">
                            <img src={`https://ik.imagekit.io/dev24/${bigStory?.Storyimage?.[0]}`} className=" img-fluid rounded-3" alt="" />
                        </div>

                        <div className="synonyms d-flex justify-content-around">
                            <span className=" d-inline-block pe-3" style={{ color: "green" }}> Synonyms :</span>
                            <span className="text-white">{bigStory?.Synonyms ?? "not present"}</span>

                        </div>

                        <div className="anonyms d-flex justify-content-around">
                            <span className=" d-inline-block pe-3" style={{ color: "pink" }}> antnonyms :</span>
                            <span className=" text-white">{bigStory?.Antonyms ?? "not present"}</span>

                        </div>

                    </div>
                </div>
                <div className="col-12 col-lg-8 row p-2 ps-3 overflow-y-auto">
                    {storieDetail?.Wordexplore?.length && storieDetail?.Wordexplore?.map((value, index) => {
                        return <div key={index} className="col-12  col-sm-6 col-md-4 col-lg-3" onClick={() => {
                            setBigStory(value);
                        }}>
                            <WordExplorerCard {...value} />
                        </div>
                    })
                    }

                </div>
            </div> :
                <div className=" row d-flex justify-content-center align-items-center w-100 h-100">
                    <div className="row d-flex justify-content-center align-items-center w-100 h-100">
                        <Spinner style={{ color: "white", width: 50, height: 50 }} animation="border" role="status">
                            <span className="visually-hidden">Loading...</span>
                        </Spinner>
                    </div>
                </div>}
        </>
    )
}
