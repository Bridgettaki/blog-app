import {Link} from 'react-router-dom'

export default function Footer(){
    return(
        <footer>
       <div className=".container .footer-container">
       <ul className='footer-categories'>
                <li><link to={'/posts/categories/Life'}></link>Life</li>
                <li><link to={'/posts/categories/Investment'}></link>Investment</li>
                <li><link to={'/posts/categories/Fashion'}></link>Fashion</li>
                <li><link to={'/posts/categories/Discovery'}></link>Discovery</li>
                <li><link to={'/posts/categories/Entertainment'}></link>Entertainment</li>
            </ul>

    <div className="footer-copyright">
        <small> &copy; Copyright All Rights Reserved 
            (Covered With Bridget )
        </small>
    </div>
       </div>

        </footer>
    )
}