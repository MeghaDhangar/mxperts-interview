
import {useEffect,useState} from 'react';
import {fetchStoriesData} from '../../api';
import {Storie} from '../Storie/Storie';

export const AllStories = () => {
    const [stories,setStories] = useState([]);
    useEffect(() => {
        async function fun() {
            const data = await fetchStoriesData();
            setStories(data);
        }
        fun();
    },[]);
    return (
        <div className="container">
            <div className=" row">

                {
                    stories.length && stories.map((value,index) => {
                        return value?.Title && value?.Status && value?.Image?.[0] && (
                            <div key={index} className='col-12 col-sm-6 col-md-3 h-100 d-flex justify-content-center align-items-center  p-2'>
                                <Storie {...value} />
                            </div>)
                    })
                }
            </div>

        </div>
    )
}
