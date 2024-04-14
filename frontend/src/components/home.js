// import { Link } from 'react-router-dom';

import Featured from './Featured';
import Content from './Content';

function home() {
    return (
        <div className="container mt-4" >

            <div>
                <Featured />
            </div>
            <div>
                <Content />
            </div>



        </div>


    );
}

export default home;
