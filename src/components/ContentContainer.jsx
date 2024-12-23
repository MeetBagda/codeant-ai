import React, { useState } from "react";
import Button from "./Button";
import RepositoryList from "./ListComponent";

const ContentContainer = () => {
    const allRepositories = [
        {
            "repositoryName": "WeatherAppFrontend",
            "language": "React",
            "databaseSize": "85MB",
            "modifiedAt": "2024-12-20",
            "isPublic": true
        },
        {
            "repositoryName": "FinanceTrackerBackend",
            "language": "Node.js",
            "databaseSize": "1.5GB",
            "modifiedAt": "2024-12-15",
            "isPublic": false
        },
        {
            "repositoryName": "MachineLearningToolkit",
            "language": "Python",
            "databaseSize": "12.5GB",
            "modifiedAt": "2024-12-19",
            "isPublic": false
        },
        {
            "repositoryName": "PortfolioWebsite",
            "language": "React",
            "databaseSize": "75MB",
            "modifiedAt": "2024-12-18",
            "isPublic": true
        },
        {
            "repositoryName": "ECommercePlatform",
            "language": "JavaScript",
            "databaseSize": "1.2GB",
            "modifiedAt": "2024-12-22",
            "isPublic": false
        },
        {
            "repositoryName": "DataAnalyticsPipeline",
            "language": "Python",
            "databaseSize": "800MB",
            "modifiedAt": "2024-12-21",
            "isPublic": true
        },
        {
            "repositoryName": "TravelPlannerApp",
            "language": "React",
            "databaseSize": "120MB",
            "modifiedAt": "2024-12-23",
            "isPublic": true
        }
    ];

    const [searchTerm, setSearchTerm] = useState("");
    const [filteredRepositories, setFilteredRepositories] = useState(allRepositories);

    const handleSearch = (event) => {
        const term = event.target.value;
        setSearchTerm(term);

        const filtered = allRepositories.filter((repo) => {
            const nameMatch = repo.repositoryName.toLowerCase().includes(term.toLowerCase());
            const languageMatch = repo.language.toLowerCase().includes(term.toLowerCase());
            return nameMatch || languageMatch;
        });

        setFilteredRepositories(filtered);
    };

     const handleClearSearch = () => {
        setSearchTerm("");
         setFilteredRepositories(allRepositories);
     }

     const handleRefresh = () => {
        
        console.log("refreshing all repositories");
        setFilteredRepositories(allRepositories);
        setSearchTerm("");
     }

    return (
        <div className="w-full h-full p-3">
            <div className="flex flex-col p-4 bg-white w-full h-full rounded-xl border border-slate-300">
                <div className=" w-full h-40 p-2 flex flex-row">
                    <div className=" w-full flex flex-col gap-4">
                        <div>
                            <h1 className="font-semibold text-2xl">Repositories</h1>
                            <h5>{filteredRepositories.length} total repositories</h5>
                        </div>
                        <div className="w-80 border border-gray-300 flex flex-row justify-center items-center rounded-md px-3">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth="1.5"
                                stroke="currentColor"
                                className="size-6"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
                                />
                            </svg>
                             <input
                                type="text"
                                className=" rounded-md px-3 py-2 w-full focus:outline-none"
                                placeholder="Search repositories"
                                value={searchTerm}
                                onChange={handleSearch}
                            />

                            {searchTerm && (
                                 <button onClick={handleClearSearch} className="cursor-pointer">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        strokeWidth="1.5"
                                        stroke="currentColor"
                                        className="size-5"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M6 18L18 6M6 6l12 12"
                                        />
                                    </svg>
                                </button>
                            )}


                        </div>
                    </div>
                    <div className=" w-full h-10 flex flex-row justify-end gap-2">
                        <Button onClick={handleRefresh} className="flex flex-row justify-start gap-2 items-center focus:bg-slate-300 border border-slate-300">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth="1.5"
                                stroke="currentColor"
                                className="size-6"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0 3.181 3.183a8.25 8.25 0 0 0 13.803-3.7M4.031 9.865a8.25 8.25 0 0 1 13.803-3.7l3.181 3.182m0-4.991v4.99"
                                />
                            </svg>
                            Refresh All
                        </Button>
                        <Button className="flex flex-row justify-start gap-2 items-center bg-blue-600 text-white">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth="1.5"
                                stroke="currentColor"
                                className="size-6"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M12 4.5v15m7.5-7.5h-15"
                                />
                            </svg>
                            Add Repository
                        </Button>
                    </div>
                </div>
                <hr />
                <div className=" w-full h-auto">
                    <RepositoryList repositories={filteredRepositories} />
                </div>
            </div>
        </div>
    );
};

export default ContentContainer;