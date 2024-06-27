import { Editor } from '@tinymce/tinymce-react';
import { useRef } from 'react';

export default function Tinyeditor({ id, setediting }){
    let editorRef = useRef(null)
    let titleRef = useRef()

    if (id) {
        async () => {
            let response = await fetch('../../backend/getarticle.php', { method: 'post', headers: { 'Accept': '*/*', 'Content-Type': 'application/json' }, body: JSON.stringify({ id: id }) })
            let result = await response.json();
            if (!result.ok) {
                alert('ارتباط با سرور بخش مقالات برقرار نشد');
            } else {
                titleRef.current.value = result.title;
                editorRef.current.setContent(result.text);
            }
        }
    }

    function HandleSave() {
        let title = titleRef.current.value;
        let text = editorRef.getContent();
        if (id) {
            async () => {
                let req = await fetch('updateArticle.php', { method: 'post', headers: { 'Accept': '*/*', 'Content-Type': 'application/json' }, body: JSON.stringify({ id: id, title: title, text: text }) })
                let res = await req.json()
                if (!res.ok) { alert('ارتباط با سرور برای تغییر مقاله ناموفق بود') }
            }
        } else {
            async () => {
                let req = await fetch('newArticle.php', { method: 'post', headers: { 'Accept': '*/*', 'Content-Type': 'application/json' }, body: JSON.stringify({ title: title, text: text }) })
                let res = await req.json()
                if (!res.ok) { alert('ارتباط با سرور برای ایجاد مقاله ناموفق بود') }
            }
        }
        setediting(null)
    }


    return (
        <>
            <input type="text" id='titr' ref={titleRef} placeholder="عنوان مقاله پرسشی" />
            <div className="container-editor">
                <Editor
                    onInit={(evt, editor) => editorRef.current = editor}
                    init={{
                        plugins: 'link image code lists advlist media',
                        toolbar: 'undo redo | fontsize fontfamily | bold italic underline | forecolor backcolor | alignleft aligncenter alignright alignjustify | outdent indent | link image media',
                        fontsize_formats: '8pt 10pt 12pt 14pt 18pt 24pt 36pt',
                        font_formats: 'Arial=arial,helvetica,sans-serif; Courier New=courier new,courier,monospace; Times New Roman=times new roman,times;',
                        link_title: true,
                        menubar: false,
                        automatic_uploads: true,
                        image_title: true,
                        images_upload_url: 'upload.php',
                        file_picker_types: 'image media',
                        file_picker_callback: (cb, value, meta) => {
                            const input = document.createElement('input')
                            input.setAttribute('type', 'file')
                            if (meta.filetype === 'image') {
                                input.setAttribute('accept', 'image/*')
                            } else if (meta.filetype === 'media') {
                                input.setAttribute('accept', 'video/*,audio/*')
                            }

                            input.onchange = () => {
                                const file = input.files[0];
                                const reader = new FileReader();
                                reader.onload = () => {
                                    const id = 'blobid' + (new Date()).getTime()
                                    const blobCache = tinymce.activeEditor.editorUpload.blobCache
                                    const base64 = reader.result.split(',')[1]
                                    const blobInfo = blobCache.create(id, file, base64)
                                    blobCache.add(blobInfo)
                                    cb(blobInfo.blobUri(), { title: file.name })
                                };
                                reader.readAsDataURL(file)
                            };

                            input.click()
                        },
                        content_style: 'body { font-family: Arial, sans-serif; direction: rtl; text-align: right; }',
                        language: 'fa',
                        directionality: 'rtl',
                        language_url: '/tinymce/langs/fa.js',
                        license_key: 'gpl',
                    }}
                />

                <button onClick={HandleSave} className="click-change">ثبت تغییرات</button>
            </div>
        </>
    )

}