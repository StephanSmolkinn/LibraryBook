import {$authHost, $host} from "./index";
import jwt_decode from "jwt-decode";

export const createGenre = async (genre) => {
    const {data} = await $authHost.post('api/genre', genre)
    return data
}

export const fetchGenres = async () => {
    const {data} = await $host.get('api/genre')
    return data
}

export const createAuthor = async (author) => {
    const {data} = await $authHost.post('api/author', author)
    return data
}

export const fetchAuthors = async () => {
    const {data} = await $host.get('api/author', )
    return data
}

export const createBook = async (book) => {
    const {data} = await $authHost.post('api/book', book)
    return data
}

export const fetchBooks = async (genreId, authorId, page, limit= 5) => {
    const {data} = await $host.get('api/book', {params: {
            genreId, authorId, page, limit
        }})
    return data
}

export const fetchOneBook = async (id) => {
    const {data} = await $host.get('api/book/' + id)
    return data
}