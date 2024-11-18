import PostAuthor from "../components/PostAuthor"
import { Link} from 'react-router-dom'
import postDtailImage from '../assets/vusi.jpg'



export default function PostDtail(){
    return(
        <section>
            <div className="container PostDtail-container">
                <div className="postdtail-top">
                    <PostAuthor />
                    <div className="postdtail-buttons">
                        <div className="post-dtail-button">
                            <Link to={'/posts/werwer/edit'} className="btn btn-sm btn-primary">
                            Edit
                            </Link>
                            <Link to={'/posts/werwer/delete'} className="btn btn-sm btn-primary">
                            Delete
                            </Link>
                        </div>
                    </div>
                </div>
                <h1>bridget takalani</h1>
                <div className="postdetail-image">
                    <img src={postDtailImage} alt="" />
                </div>
               <div className="postDtail-para">
               <p>dfgyujn fgjb fyhjkiuytfg ftugyjbhiy
                    frtuyghjuiygtfghjb ftugyhjbkjouiygtfg ftugyhjbkjouiygtfggfy
                    gfytguhjbuicfh
                </p>
                <p>dfgyujn fgjb fyhjkiuytfg ftugyjbhiy
                    frtuyghjuiygtfghjb ftugyhjbkjouiygtfg ftugyhjbkjouiygtfggfy
                    gfytguhjbuicfh
                </p>
               </div>
            </div>
        </section>
    )
}