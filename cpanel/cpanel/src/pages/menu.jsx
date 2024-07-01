import { useRef } from "react";
import "../../../../bootstrap/dist/css/bootstrap.min.css"
import "./css/cpanel.css"

export default function Menu({ setchoose }) {

    let postRef=useRef();
    let galleryRef=useRef();
    let usersRef=useRef();

    function WhatIsee(e) {
        switch (e.target.getAttribute('data-choose')) {
            case '0':
                setchoose('post');
                postRef.current.classList.add("text-warning-emphasis")
                galleryRef.current.classList.remove("text-warning-emphasis")
                usersRef.current.classList.remove("text-warning-emphasis")
                break
            case '1':
                setchoose('gallery');
                postRef.current.classList.remove("text-warning-emphasis")
                galleryRef.current.classList.add("text-warning-emphasis")
                usersRef.current.classList.remove("text-warning-emphasis")
                break
            case '2':
                setchoose('users');
                postRef.current.classList.remove("text-warning-emphasis")
                galleryRef.current.classList.remove("text-warning-emphasis")
                usersRef.current.classList.add("text-warning-emphasis")
                break
        }
    }

    return (
        <div className="col-md-2 text-center mt-xl-4">
            <div className="d-none d-md-block text-dark fs-1 fw-bold mt-xl-5 mb-5">پنل مدیریت</div>
            <div className="text-light bg-dark fs-6 fw-bold rs-4 p-4 mobile-menu d-md-flex flex-md-column align-items-end justify-content-around shadow-menu position-md-sticky">
                <div className="d-flex align-items-center justify-content-center mt-md-3" style={{cursor:'pointer'}} >
                    <span className="d-none d-md-block">نوشته ها</span>
                    <span className="material-symbols-outlined fs-1" ref={postRef} data-choose="0" onClick={(e) => WhatIsee(e)}>edit_note</span>
                </div>
                <div className="d-flex align-items-center justify-content-center mt-md-5" style={{cursor:'pointer'}} >
                    <span className="d-none d-md-block">گالری</span>
                    <span className="material-symbols-outlined fs-1" ref={galleryRef} data-choose="1" onClick={(e) => WhatIsee(e)}>photo_library</span>
                </div>
                <div className="d-flex align-items-center justify-content-center mt-md-5 mb-md-3" style={{cursor:'pointer'}} >
                    <span className="d-none d-md-block">کارفرما ها</span>
                    <span className="material-symbols-outlined fs-1" ref={usersRef} data-choose="2" onClick={(e) => WhatIsee(e)}>person_edit</span>
                </div>
            </div>
        </div>
    )

}