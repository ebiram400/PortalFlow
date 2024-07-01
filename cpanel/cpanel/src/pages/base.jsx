import { useState } from 'react'
import Post from './post'
import Gallery from './gallery'
import Users from './users'
import Menu from './menu'
import "./css/cpanel.css"

export default function Base() {
    let [choose, setchoose] = useState('gallery');

    function Chaise({ choose }) {
        switch (choose) {
            case 'post':
                return <Post />
            case 'gallery':
                return <Gallery />
            case 'users':
                return <Users />
        }
    }
    return (
        <>
            <div className='d-flex'>
                <div className="col-md-9 col-11 text-center ms-auto me-auto main">
                    <img className="col-2 mt-3 mb-3" src="../../public/logo-novin.png" />
                    <div id="main" className="border border-1 rounded-4 border-dark p-4 main mb-6">
                        <Chaise choose={choose} />
                    </div>
                </div>
                <Menu setchoose={setchoose} />
            </div>
        </>
    )
}
