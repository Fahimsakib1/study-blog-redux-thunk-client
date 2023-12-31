import { toast } from "react-hot-toast";
import { deleteBlogData} from "../Actions/blogAction";

const deleteBlog = (id) => {
    return async (dispatch, getState) => {
        const res = await fetch(`https://study-abroad-blogs-redux-server.vercel.app/deleteBlog/${id}`, {
            method: 'DELETE',
            headers: { 'Content-Type': 'application/json' }
        });
        const data = await res.json();
        if (data.deletedCount > 0) {
            dispatch(deleteBlogData(id));
            toast.success("Blog Deleted Successfully")
        }
    }
}

export default deleteBlog;