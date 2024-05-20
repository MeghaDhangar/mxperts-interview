import {Batch} from "../Batch/Batch";
import {AllStories} from "../AllStories/AllStories";
import wave from '../../assets/waves.svg'
import galaxy from '../../assets/fiction.jpg'
import {Header} from "../Header/Header";
import {data} from '../Data/dataa'


export const Home = () => {
    return (
        <>
            <div className=" position-relative  pb-3 overflow-hidden" style={{minHeight: "70vh"}}>
                <Header />
                <img className=" position-absolute   w-100 h-100  " src={galaxy} style={{backgroundSize: "cover"}} alt="" />
                <div className=" container  py-5 position-relative  z-1">
                    <h1 className=" py-5 mt-5 text-white text-center fw-bold">Science Fiction Stories </h1>
                    <div className="row  d-flex justify-content-around flex-wrap ">

                        {data.map((value,index) => {
                            return <div key={index} className="col col-sm-6 col-md-3">
                                <Batch {...value} />
                            </div>
                        })
                        }
                    </div>
                </div>
                <div className=" w-100 position-absolute z-0 bottom-0">
                    <img src={wave} alt="" />
                </div>
            </div>
            <div style={{backgroundColor: "#00042a"}}>

                <div className="px-5 py-5 w-100">
                    <AllStories />
                </div>
            </div>
        </>
    )
}
