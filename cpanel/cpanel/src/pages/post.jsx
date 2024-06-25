import { useState } from "react"
import Articles from "./articles"


export default function Post() {
    let [title,settitle]=useState('پروژه ها')
    
    return (
        <>
            <div className="dropdown-custom">
                <button className="dropdown-button">
                    <span className="dropdown-icon ">&#9660;</span>
                    <span className="textBtn">دسته بندی ها</span>
                </button>
                <div className="dropdown-content">
                    <div onClick={settitle("پروژه ها")}>پروژه ها</div>
                    <div onClick={settitle("مقالات اضافه کردن و تغییر بنا")}>مقالات اضافه کردن و تغییر بنا</div>
                    <div onClick={settitle("مقالات گچ کاری")}>مقالات گچ کاری</div>
                    <div onClick={settitle("مقالات انواع سقف و نورپردازی")}>مقالات انواع سقف و نورپردازی</div>
                    <div onClick={settitle('مقالات انواع کفپوش')}>مقالات انواع کفپوش</div>
                    <div onClick={settitle('مقالات دیوار پوش')}>مقالات دیوار پوش</div>
                    <div onClick={settitle('مقالات کابینت و کمد دیواری')}>مقالات کابینت و کمد دیواری</div>
                    <div onClick={settitle('مقالات پتینه کاری و نقاشی')}>مقالات پتینه کاری و نقاشی</div>
                    <div onClick={settitle('مقالات انواع درب')}>مقالات انواع درب</div>
                    <div onClick={settitle('مقالات تاسیسات برقی و گازکشی')}>مقالات تاسیسات برقی و گازکشی</div>
                    <div onClick={settitle('مقالات لوله کشی آب و فاضلاب')}>مقالات لوله کشی آب و فاضلاب</div>
                </div>
            </div>
            <Articles title={title} />
        </>
    )
}