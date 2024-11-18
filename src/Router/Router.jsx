import Header from "../components/Header"
import Footer from "../components/Footer"
//Components..................

//Pages.......................
import Home from '../pages/Home'
import Author from '../pages/Author'
import AuthorPost from '../pages/AuthorPost'
import CategoryPosts from '../pages/CategoryPosts'
import CreatePosts from '../pages/CreatePosts'
import DashBoard from '../pages/DashBoard'
import DeletePosts from '../pages/DeletePosts'
import EditPosts from '../pages/EditPosts'
import ErrorPage from '../pages/ErrorPage'
import Login from '../pages/Login'
import Logout from '../pages/Logout'
import PostDtail from '../pages/PostDtail'
import Register from '../pages/Register'
import UserProfile from '../pages/UserProfile'

//Router......................
import { BrowserRouter, Route, Routes } from "react-router-dom"

export default function Router(){
    return(
        <>
        <BrowserRouter >
        <Header />
        <Routes>
           <Route path="/" element={<Home />}/> 
           <Route path="/authors" element={<Author />}/> 
           <Route path="/posts/user/:id" element={<AuthorPost />}/> 
           <Route path="/posts/categories/:category" element={<CategoryPosts />}/> 
           <Route path="/create" element={<CreatePosts />}/> 
           <Route path="/myposts/:id" element={<DashBoard />}/> 
           {/*<Route path="/" element={<DeletePosts />}/>*/} 
           <Route path="/posts/:id/edit" element={<EditPosts />}/> 
           <Route path="*" element={<ErrorPage />}/> 
           <Route path="/login" element={<Login />}/> 
           <Route path="/logout" element={<Logout />}/> 
           <Route path="/post/:id" element={<PostDtail />}/> 
           <Route path="/register" element={<Register />}/> 
           <Route path="/profile/:id" element={<UserProfile />}/> 
           
        </Routes>
        <Footer />
        </BrowserRouter>
        
        </>
    )
}