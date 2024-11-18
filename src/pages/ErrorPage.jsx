import {Link} from 'react-router-dom'

export default function ErrorPage(){
    return(
        <section>
            <div className="error-center">
              <h2>404</h2>    
              <h3>This Page is not found</h3>
              <Link to={'/'} className='btn btn-primary'>Refresh</Link>
            </div>
        </section>
    )
}