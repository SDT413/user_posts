import axios from "axios";

export default class PostService {
    static async getAll(limit = 10, page = 1) {
        try {
            return (await axios.get('https://jsonplaceholder.typicode.com/posts', {params: {_limit: limit, _page: page}}));
        } catch (e) {
            console.log(e);
        }
    }
    static async getById(id) {
        try {
            return (await axios.get('https://jsonplaceholder.typicode.com/posts/' + id));
        } catch (e) {
            console.log(e);
        }
    }
    static async getCommentsByPostId(id) {
        try {
            return (await axios.get(`https://jsonplaceholder.typicode.com/posts/${id}/comments`));
        } catch (e) {
            console.log(e);
        }
    }
}