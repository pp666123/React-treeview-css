import './scss.css';
import React, { useEffect, useState } from 'react';



function MyPassport() {

  const firstClasstype = ["實體上課", "2"]

  const firstData = [
    { title: "課程名稱：", html: <input type="text" /> },
    { title: "課程代號：", html: <input type="text" /> },
    { title: "課程時數：", html: <input type="text" /> },
    { title: "課程類型：", html: <select >{firstClasstype.map(item => (<option>{item}</option>))}</select> },
    { title: "課程簡介：", html: <input type="text" /> },
    { title: "課程大綱：", html: <input type="text" /> },
  ];

  // -----

  const secondData = [
    { title: "使用者帳號：", html: <div className='d-inline'>user@conpany.com</div> },
    { title: "開始時間：", html: <input type="text" /> },
    { title: "結束時間：", html: <input type="text" /> },
    { title: "完成狀態：", html: <input type="text" /> },
    { title: "證書連結：", html: <input type="text" /> },
  ];

  return (
    <>
      <ul className="b-train-tree">
        <div className='top-title'>LMS：<input type="text" /></div>
        <ul >
          {firstData.map(item => {
            return (
              <li>
                <div className="title">{item.title}
                  {item.html}
                </div>
              </li>
            )
          })}
          {secondData.map(item => {
            return (
              <li className='second'>
                <div className="title">{item.title}{item.html}</div>
              </li>
            )
          })}
          <li className='last'></li>
        </ul>
      </ul>
    </>
  );
}

export default MyPassport;