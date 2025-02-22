

import { Link } from "react-router-dom";

function Error () {

    return (
        <div>
            <h1>Error 404</h1>
            <p>Page no found</p>
            <Link to={'/'}>Volver</Link>
        </div>
    )

}

export default Error;