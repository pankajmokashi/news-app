import React from "react";

function timeSincePublished(publishedAt) {
  const diffInSeconds = Math.floor((new Date() - new Date(publishedAt)) / 1000);
  const units = [
    { name: "day", seconds: 86400 },
    { name: "hour", seconds: 3600 },
    { name: "minute", seconds: 60 },
  ];

  for (const unit of units) {
    const count = Math.floor(diffInSeconds / unit.seconds);
    if (count >= 1) return `${count} ${unit.name}${count > 1 ? "s" : ""} ago`;
  }

  return "just now";
}

const NewsList = ({ articles }) => {
  return (
    <>
      <div className="news-list grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 xl:gap-x-8">
        {articles.map((article, index) => (
          <div
            key={index}
            className="mx-auto max-w-md w-full xl:max-w-full xl:flex border border-gray-400 rounded-md"
          >
            <div className="h-52 xl:h-auto xl:w-72 flex-none">
              <img
                loading="lazy"
                src={article.image}
                alt={article.title}
                className="w-full h-full object-cover rounded-t-md xl:rounded-l-md xl:rounded-r-none"
              ></img>
            </div>
            <div className="bg-white p-4 flex flex-col justify-between leading-normal rounded-md">
              <div className="mb-4">
                <div className=" mb-1 text-sm text-gray-600 flex items-center justify-between">
                  <div className="flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="size-4 mr-2"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M13.19 8.688a4.5 4.5 0 0 1 1.242 7.244l-4.5 4.5a4.5 4.5 0 0 1-6.364-6.364l1.757-1.757m13.35-.622 1.757-1.757a4.5 4.5 0 0 0-6.364-6.364l-4.5 4.5a4.5 4.5 0 0 0 1.242 7.244"
                      />
                    </svg>

                    <a
                      href={article.source.url}
                      target="_blank"
                      rel="noreferrer"
                    >
                      {article.source.name}
                    </a>
                  </div>
                  <div>{timeSincePublished(article.publishedAt)}</div>
                </div>
                <div className="text-gray-900 font-bold text-xl mb-2">
                  {article.title}
                </div>
                <p className="text-gray-700 text-base line-clamp-5">
                  {article.description}
                </p>
              </div>
              <div className="">
                <p className="text-sm text-gray-900 leading-none">
                  <a
                    href={article.url}
                    target="_blank"
                    rel="noreferrer"
                    className="hover:underline"
                  >
                    Read More At {article.source.name}
                  </a>
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default NewsList;
