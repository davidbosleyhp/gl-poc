import React from 'react'
import { Link } from 'react-router-dom'

const NotFound = () => {
    return (
        <div>
            <h2>Page not found!</h2>
            <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laudantium deserunt quo
                exercitationem soluta voluptatum quidem eum perferendis aliquam quisquam pariatur,
                minus vitae qui modi consectetur praesentium error sint ipsa voluptates.
            </p>

            <p>
                Go to the <Link to="/">Homepage</Link>
            </p>
        </div>
    )
}

export default NotFound
