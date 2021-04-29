import Item from '../Item/';

const Form = ({ listDate, deleteData }) => {
  return (
    <div className="list">
      {listDate.map((item) => {
        const { note, date, time, id } = item;

        return (
          <Item key={id} id={id} note={note} date={date} time={time} deleteData={deleteData} />
        );
      })}
    </div>
  );
};

export default Form;
