import React from "react";
import { Chip } from "./Chip";
import { DateParser } from "~/utils/dateParser";

interface CommentsProps {
  name: string;
  date: string;
  content: string;
}

export const Comments: React.FC<CommentsProps> = ({ name, date, content }) => {
  return (
    <article className="p-6 mb-3 text-base rounded-xl bg-white border-t border-gray-200">
      <footer className="flex justify-between items-center mb-2">
        <div className="flex items-center  mb-2 ">
          <p className="inline-flex items-center  mr-3 text-sm text-gray-900 ">
            <Chip text={name} />
          </p>
          <p className="text-sm text-gray-500 ">
            <time dateTime={date}>{DateParser(date)}</time>
          </p>
        </div>
      </footer>
      <p className="text-gray-900 ">{content}</p>
    </article>
  );
};
