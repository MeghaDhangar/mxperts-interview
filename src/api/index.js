import axios from 'axios';

export async function fetchStoriesData() {
    try {
        let response = await axios.get("https://child.onrender.com/api/sciencefiction");
        console.log("data is :- ", response.data);
        return response.data;
    } catch (error) {
        console.error("Error fetching data: ", error);
        return error;
    }
}

export async function fetchStoriesDataById(id) {
    try {
        let response = await axios.get(`https://child.onrender.com/api/sciencefiction/${id}`);
        console.log("data by id is :- ", response.data);
        return response.data;
    } catch (error) {
        console.error("Error fetching data by ID: ", error);
        return error;
    }
}
