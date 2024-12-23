import React from "react";

const RepositoryListItem = ({
  repositoryName,
  language,
  databaseSize,
  modifiedAt,
  onHover,
  isPublic, // Add this prop to receive public/private status
}) => {
  return (
    <div
      className="flex flex-col justify-around  p-2 h-24 border-b border-gray-200 hover:bg-gray-100 cursor-pointer"
      onMouseEnter={onHover}
      onMouseLeave={onHover}
    >
      <div>
        <div className="flex flex-row items-center gap-3 ">
          <div className="font-semibold text-lg">{repositoryName}</div>
          <div className="text-xs text-blue-700 rounded-full border bg-sky-50 border-sky-400 px-3">
            {isPublic ? "Public" : "Private"}{" "}
            {/* Display status based on isPublic */}
          </div>
        </div>
      </div>
      <div className="flex flex-row items-center gap-8">
        <div className="text-gray-500 flex flex-row gap-2">
          {language}
          <div className="text-blue-600">
            {" "}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              class="size-6"
            >
              <path
                fill-rule="evenodd"
                d="M3 6a3 3 0 0 1 3-3h12a3 3 0 0 1 3 3v12a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3V6Zm14.25 6a.75.75 0 0 1-.22.53l-2.25 2.25a.75.75 0 1 1-1.06-1.06L15.44 12l-1.72-1.72a.75.75 0 1 1 1.06-1.06l2.25 2.25c.141.14.22.331.22.53Zm-10.28-.53a.75.75 0 0 0 0 1.06l2.25 2.25a.75.75 0 1 0 1.06-1.06L8.56 12l1.72-1.72a.75.75 0 1 0-1.06-1.06l-2.25 2.25Z"
                clip-rule="evenodd"
              />
            </svg>
          </div>
        </div>
        <div className="flex flex-row gap-1 text-gray-500">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="size-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375m16.5 0v3.75m-16.5-3.75v3.75m16.5 0v3.75C20.25 16.153 16.556 18 12 18s-8.25-1.847-8.25-4.125v-3.75m16.5 0c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125"
            />
          </svg>
          {databaseSize}
        </div>
        <div className="text-gray-500">Modified At: {modifiedAt}</div>
      </div>
    </div>
  );
};

const RepositoryList = ({ repositories }) => {
  const handleHover = (item) => {
    console.log(`Hovering over repository: ${item.repositoryName}`);
  };

  return (
    <div className="w-full overflow-y-auto">
      <div className="max-h-[calc(100vh-200px)]">
        {repositories.map((repository) => (
          <RepositoryListItem
            key={repository.repositoryName}
            repositoryName={repository.repositoryName}
            language={repository.language}
            databaseSize={repository.databaseSize}
            modifiedAt={repository.modifiedAt}
            onHover={() => handleHover(repository)}
            isPublic={repository.isPublic}
          />
        ))}
      </div>
    </div>
  );
};

export default RepositoryList;
