import { Link } from "react-router-dom"

const MyPage = () => {
    return ( 
        <div>
            <h3>Let's go to &nbsp;
                <Link to="/another-page">Another Page</Link>
            </h3>
        </div>
     );
}
 
export default MyPage;