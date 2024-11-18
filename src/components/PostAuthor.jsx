import AuthorImage from '../assets/brie.jpg'
import { Link } from 'react-router-dom'

export default function PostAuthor() {
    return(
        <Link to={'/posts/user/:id'} className='post-author'>
            <div className="post-author-image">
                <img src={AuthorImage} alt="" />
            </div>
            <div className="post-author-info">
                <h5>bridget black</h5>
                <small>just now</small>
            </div>
        </Link>
    )
}