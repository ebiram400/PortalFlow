import Category from "./category"
import Projects from "./projects"



export default function Articles({ title }) {


    if (title != "پروژه ها") {
        return (
            <>
                <table>
                    <thead>
                        <tr>
                            <th>ویرایش/حذف</th>
                            <th>عنوان مقاله</th>
                            <th>شماره</th>
                        </tr>
                    </thead>
                    <tbody>
                        <Category title={title} />
                    </tbody>
                </table>
                <div className="newArticle">
                    <button className="add">&#x2B;</button>
                    <input type="text" name="inputObject" id="inputObject" placeholder="عنوان مقاله" />
                </div>
            </>
        )
    } else {
        return (
            <>
                <table>
                    <thead>
                        <tr>
                            <th>حذف</th>
                            <th>سرویس ها</th>
                            <th>آدرس پروژه</th>
                            <th>شماره</th>
                        </tr>
                    </thead>
                    <tbody>
                        <Projects />
                    </tbody>
                </table>
                <div className="newProject">
                    <button className="add">&#x2B;</button>
                    <input type="text" name="inputServices" id="inputServices" placeholder="سرویس ها" />
                    <input type="text" name="inputAddres" id="inputAddres" placeholder="آدرس پروژه جدید" />
                </div>
            </>
        )
    }
}