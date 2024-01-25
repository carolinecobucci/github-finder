import { RepoProps } from "../types/repo";
import { IoCodeSlash } from "react-icons/io5";
import { FaRegStar } from "react-icons/fa6";
import { TbGitFork } from "react-icons/tb";
import { HiMiniArrowTopRightOnSquare } from "react-icons/hi2";

const Repo = ({ name, language, html_url, forks_count, stargazers_count }: RepoProps) => {
  return (
    <div className="flex flex-col gap-2 bg-white rounded-lg shadow-md px-8 py-6">
      <h3 className="text-lg font-semibold">{name}</h3>
      <p className="flex gap-2 items-center text-sm font-semibold">
        <IoCodeSlash />
        <span>{language}</span>
      </p>
      <div className="flex gap-2">
        <div className="flex justify-center items-center">
          <FaRegStar className="bg-yellow-200 border rounded-l-md w-8 h-8 p-2" />
          <span className="flex justify-center items-center border rounded-r-md p-1 min-w-8 h-8">
            {stargazers_count}
          </span>
        </div>
        <div className="flex justify-center items-center">
          <TbGitFork className="bg-green-200 border rounded-l-md w-8 h-8 p-2" />
          <span className="flex justify-center items-center border rounded-r-md p-1 h-8 min-w-8">
            {forks_count}
          </span>
        </div>
      </div>
      <a
        href={html_url}
        target="_blank"
        className="flex gap-1 justify-center items-center border bg-blue-200 border-blue-200 rounded-lg w-32 py-2 px-2 text-sm font-semibold"
      >
        <span>Ver código</span>
        <HiMiniArrowTopRightOnSquare />
      </a>
    </div>
  );
};

export default Repo;
