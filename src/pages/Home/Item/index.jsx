import React from 'react';

const Item = ({ id, note, date, time, deleteData }) => {
  function deleteItem() {
    deleteData((preValue) => {
      console.log(preValue);
      return preValue.filter((item) => item.id !== id);
    });
  }

  return (
    <div className="item">
      <p>事件：{note}</p>
      <p>{`日期：${date} 时间：${time}`}</p>
      <button onClick={deleteItem} className="remove">
        删除
      </button>
    </div>
  );
};

export default Item;
