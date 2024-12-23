import React, { memo } from "react";
import { DatabaseIcon, LinkIcon } from "./Icons";


const RepositoryListItem = memo(
  ({ repositoryName, language, databaseSize, modifiedAt, onHover, isPublic }) => {
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
                        {isPublic ? "Public" : "Private"}
                    </div>
                </div>
            </div>
            <div className="flex flex-row items-center gap-8">
                <div className="text-gray-500 flex flex-row gap-2">
                    {language}
                    {language && <LinkIcon />}
                </div>
                <div className="flex flex-row gap-1 text-gray-500">
                  <DatabaseIcon />
                    {databaseSize}
                </div>
                <div className="text-gray-500">Modified At: {modifiedAt}</div>
            </div>
        </div>
    );
  }
);

const RepositoryList = ({ repositories }) => {
  const handleHover = (repositoryName) => {
    console.log(`Hovering over repository: ${repositoryName}`);
  };

  return (
    <div className="w-full overflow-y-auto max-h-[calc(100vh-200px)]">
      {repositories.map((repository) => (
        <RepositoryListItem
          key={repository.repositoryName}
          repositoryName={repository.repositoryName}
          language={repository.language}
          databaseSize={repository.databaseSize}
          modifiedAt={repository.modifiedAt}
          onHover={() => handleHover(repository.repositoryName)}
          isPublic={repository.isPublic}
        />
      ))}
    </div>
  );
};

export default RepositoryList;