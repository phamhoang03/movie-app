const RatingInput = ({ onChange, name }) => {
  return (
    <div>
      <select name={name} onChange={onChange} className="rounded border">
        <option className="text-black">ALL</option>
        <option className="text-black">0 - 49</option>
        <option className="text-black">50 - 69</option>
        <option className="text-black">70 - 100</option>
      </select>
    </div>
  );
};

export default RatingInput;
