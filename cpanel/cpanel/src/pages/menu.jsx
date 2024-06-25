import { useRef } from "react";

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
        <div class="col-md-2 text-center">
            <div class="d-none d-md-block text-dark fs-1 fw-bold mt-5 mb-5">پنل مدیریت</div>
            <div class="text-light bg-dark fs-6 fw-bold rounded-start-4 p-4 mobile-menu d-md-flex flex-md-column align-items-end justify-content-around shadow-menu position-md-sticky">
                <div class="d-flex align-items-center justify-content-center mt-md-3" ref={postRef} data-choose="0" onClick={(e) => WhatIsee(e)}>
                    <span class="d-none d-md-block">نوشته ها</span>
                    <span class="material-symbols-outlined fs-1">edit_note</span>
                </div>
                <div class="d-flex align-items-center justify-content-center mt-md-5" ref={galleryRef} data-choose="1" onClick={(e) => WhatIsee(e)} >
                    <span class="d-none d-md-block">گالری</span>
                    <span class="material-symbols-outlined fs-1">photo_library</span>
                </div>
                <div class="d-flex align-items-center justify-content-center mt-md-5 mb-md-3" ref={usersRef} data-choose="2" onClick={(e) => WhatIsee(e)}>
                    <span class="d-none d-md-block">کارفرما ها</span>
                    <span class="material-symbols-outlined fs-1">person_edit</span>
                </div>
            </div>
        </div>
    )

}