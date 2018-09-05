import axios from 'axios';

export const FETCH_POSTS = 'fetch_posts';
export const FETCH_POST = 'fetch_post';
export const CREATE_POST = 'create_post';
export const DELETE_POST = 'delete_post'


const ROOT_URL = /* 'https://everyday-rest.herokuapp.com/' */
'https://awl-everyday-api.herokuapp.com'

export async function fetchPosts() {
    const request = await axios.get(`${ROOT_URL}/posts`);

    return {
        type: FETCH_POSTS,
        payload: request
    }
}

export function createPost(values, callback) {
    const request = axios.post(`${ROOT_URL}/post`, values)
        .then(() => callback());

    return {
        type: CREATE_POST,
        payload: request
    }
}

export async function fetchPost(id) {
    const request = await axios.get(`${ROOT_URL}/post/${id}`)
    console.log(request);

    return {
        type: FETCH_POST,
        payload: request
    };
}

export function deletePost(id, callback) {
    const request = axios.delete(`${ROOT_URL}/post/${id}`)
        .then(() => callback());

    return {
        type: DELETE_POST,
        payload: id
    }
}
