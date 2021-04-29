import Item from '../Item/';

const Form = ({ listDate }) => {
  console.log('listDate', listDate);
  return (
    <div className="list">
      {listDate.map((item) => (
        <Item />
      ))}
    </div>
  );
};

export default Form;
