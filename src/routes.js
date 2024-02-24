import Admin from "./pages/Admin";
import {ADMIN_ROUTE, BOOK_ROUTE, LOGIN_ROUTE, REGISTRATION_ROUTE, LIBRARY_ROUTE} from "./utils/consts";
import Library from "./pages/Library";
import Auth from "./pages/Auth";
import BookPage from "./pages/BookPage";

export const authRoutes = [
    {
        path: ADMIN_ROUTE,
        Component: Admin
    },
]

export const publicRoutes = [
    {
        path: LIBRARY_ROUTE,
        Component: Library
    },
    {
        path: LOGIN_ROUTE,
        Component: Auth
    },
    {
        path: REGISTRATION_ROUTE,
        Component: Auth
    },
    {
        path: BOOK_ROUTE + '/:id',
        Component: BookPage
    },
]