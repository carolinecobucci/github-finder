import { Link } from "react-router-dom";
import { UserProps } from "../types/user";
import { MdOutlineLocationOn } from "react-icons/md";

const User = ({ avatar_url, login, location, followers, following }: UserProps) => {
  return (
    <div className="flex flex-col gap-3 justify-center items-center bg-white rounded-lg shadow-md px-12 py-6 mt-4">
      <img src={avatar_url} alt={login} className="w-28 rounded-full border-4 border-gray-300 " />
      <h2 className="font-semibold text-lg">{login}</h2>
      {location && (
        <p className="flex gap-1 justify-center items-center">
          <MdOutlineLocationOn />
          <span className="text-sm">{location}</span>
        </p>
      )}
      <div className="flex gap-6">
        <div className="flex flex-col gap-1 items-center text-sm font-semibold">
          <p>Seguidores:</p>
          <p className="border bg-green-200 rounded-lg py-1 px-3">{followers}</p>
        </div>
        <div className="flex flex-col gap-1 items-center text-sm font-semibold">
          <p>Seguindo:</p>
          <p className="border bg-green-200 rounded-lg py-1 px-3">{following}</p>
        </div>
      </div>
      <Link
        to={`/repos/${login}`}
        className="border bg-blue-200  border-blue-200 rounded-lg py-2 px-4 text-sm font-semibold"
      >
        Ver melhores projetos
      </Link>
    </div>
  );
};

export default User;
