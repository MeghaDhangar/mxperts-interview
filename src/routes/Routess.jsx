import {Route,Routes} from "react-router-dom"
import {Home} from "../components/Home/Home"
import {StoreDetail} from "../components/StoriesDetails/StoreDetail"


export const Routess = () => {
    return (
        <div>
            <Routes>
                <Route path="/" element={ <Home />
                } />
                <Route path="/stories/:id" element={<StoreDetail />
                } />
            </Routes>
        </div>
    )
}
