import { loadBlogs } from "../Actions/blogAction";

const fetchBlogData = () => {
    return async (dispatch, getState) => {
        const res = await fetch('http://localhost:5000/blogs');
        const data = await res.json();
        if (data.length) {
            dispatch(loadBlogs(data))
        }
    }
}

export default fetchBlogData;