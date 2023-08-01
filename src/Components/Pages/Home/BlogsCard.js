import React from 'react';
import { useDispatch } from 'react-redux';
import fetchBlogByIDForViewDetails from '../../../Redux/Thunk/fetchBlogByIDForViewDetails';
import { Link } from 'react-router-dom';

const BlogsCard = ({ blog }) => {


    const dispatch = useDispatch();

    return (
        <div className=''>

            <div className="card card-compact w-96 bg-white shadow-2xl rounded-md">
                <figure><img src={blog.image} className="h-48 w-full" alt="Blog Pic" /></figure>
                <div className="card-body">
                    <h2 className=" text-lg font-bold text-blue-700">{blog.title.slice(0, 36)}
                        <Link onClick={(() => dispatch(fetchBlogByIDForViewDetails(blog._id)))} to='/blogDetails'>
                            <span className='text-blue-700 font-semibold cursor-pointer'>...</span>
                        </Link>
                    </h2>
                    <p className='text-sm text-gray-700 font-semibold text-left -mt-2'>Posted On: {blog.blogPostedTime}</p>
                    <h1 className='font-bold text-center mt-2 text-lg'>Category: <span className='text-orange-600 text-semibold'>{blog.category}</span></h1>
                    <p className='mt-2  font-semibold mb-3 text-justify'>{blog.description.slice(0, 186)}
                        <Link to='/blogDetails'>
                            <span className='text-blue-700 font-semibold cursor-pointer' onClick={(() => dispatch(fetchBlogByIDForViewDetails(blog._id)))}>... Read More</span>
                        </Link>
                    </p>

                    <Link to='/blogDetails'>
                        <div className='flex gap-2 mt-5 '>
                            <button
                                onClick={(() => dispatch(fetchBlogByIDForViewDetails(blog._id)))}
                                className='hover:bg-blue-800 bg-blue-700 w-full py-2 text-lg rounded-sm px-2 flex-1 text-white text-bold'
                            >
                                View Details
                            </button>
                        </div>
                    </Link>
                </div>
            </div>




        </div>
    );
};

export default BlogsCard;