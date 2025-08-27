import React from "react";
import { MoreVertical, User, Calendar } from "lucide-react";

const BookCard = ({
  title,
  author,
  genre,
  coverUrl,
  borrowedBy,
  borrowDate,
  showActions = false,
}) => {
  return (
    <div className="book-stripe">
      <img
        src={coverUrl}
        alt={title}
        className="w-16 h-20 rounded-md object-cover shadow-sm"
      />
      <div className="flex-1">
        <h3 className="title">{title}</h3>
        <div className="author">
          <p>By {author}</p>
          {genre && (
            <>
              <div></div>
              <p>{genre}</p>
            </>
          )}
        </div>

        {borrowedBy && borrowDate && (
          <div className="user">
            <div className="avatar">
              <User className="size-3 text-dark-200" />
              <p>{borrowedBy}</p>
            </div>
            <div className="borrow-date">
              <Calendar className="size-3 text-dark-200" />
              <p>{borrowDate}</p>
            </div>
          </div>
        )}
      </div>

      {showActions && (
        <button className="p-2 hover:bg-light-300 rounded-lg transition-colors duration-200">
          <MoreVertical className="text-light-500" />
        </button>
      )}
    </div>
  );
};

export default BookCard;
