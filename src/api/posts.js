import axios from 'axios';

export const baseUrl = 'http://localhost:5000';

export const url = `${baseUrl}/posts`;

export const fetchPosts = () => axios.get(url);
export const createPost = (newPost) => axios.post(url, newPost);
export const likePost = (id) => axios.patch(`${url}/${id}/likePost`);
export const dislikePost = (id) => axios.patch(`${url}/${id}/dislikePost`);
export const updatePost = (id, updatedPost) => axios.patch(`${url}/${id}`, updatedPost);
export const deletePost = (id) => axios.delete(`${url}/${id}`);
