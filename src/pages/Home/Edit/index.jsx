import React, { useState } from 'react';
import { v4 } from 'uuid';
const Edit = ({ addItem }) => {
  const [note, setNote] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');

  const handleChange = (e) => {
    setNote(e.target.value);
  };

  const changeDate = (e) => {
    setDate(e.target.value);
  };

  const changeTime = (e) => {
    setTime(e.target.value);
  };

  function addEve() {
    addItem(function (preValue) {
      return [
        {
          id: v4(),
          note,
          date,
          time,
        },
        ...preValue,
      ];
    });
  }

  return (
    <>
      <h1>备忘录</h1>
      <p>事件 :</p>
      <input type="text" value={note} placeholder="请输入" onChange={handleChange} />
      <p>日期 :</p>
      <input type="date" value={date} onChange={changeDate} />
      <p>时间 :</p>
      <input type="time" value={time} onChange={changeTime} />
      <button onClick={addEve} className="add">
        新增
      </button>
    </>
  );
};

export default Edit;
