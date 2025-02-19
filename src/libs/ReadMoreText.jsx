import { useState } from "react";

const ReadMoreText = ({ text, maxLength = 150 }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleReadMore = () => {
    setIsExpanded(!isExpanded);
  };

  if (text.length <= maxLength) {
    return <p>{text}</p>;
  }

  return (
    <div>
      <p>
        {isExpanded ? text : `${text.substring(0, maxLength)}...`}
        <button
          onClick={toggleReadMore}
          className="ml-2 text-blue-500 hover:underline"
        >
          {isExpanded ? "Đóng vào" : "Xem thêm >>"}
        </button>
      </p>
    </div>
  );
};

export default ReadMoreText;
