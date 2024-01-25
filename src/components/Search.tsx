import { useState, KeyboardEvent } from "react";
import { MdSearch } from "react-icons/md";

type SearchProps = {
  loadUser: (userName: string) => Promise<void>;
};

const Search = ({ loadUser }: SearchProps) => {
  const [userName, setUserName] = useState("");

  const handleKeyDown = (e: KeyboardEvent) => {
    if (e.key === "Enter") {
      loadUser(userName);
    }
  };

  return (
    <div className="flex flex-col gap-3 justify-center items-center bg-white rounded-lg shadow-md px-12 py-6">
      <h2 className="text-lg font-semibold">Busque por um usuário</h2>
      <p className="text-sm">Conheça seus melhores repositórios</p>
      <div className="flex gap-2">
        <input
          type="text"
          placeholder="Digite o nome do usuário"
          onChange={(e) => setUserName(e.target.value)}
          onKeyDown={handleKeyDown}
          className="border px-3 py-2 w-52 rounded-md bg-gray-50"
        />
        <button
          onClick={() => loadUser(userName)}
          className="border px-3 py-2 rounded-md  bg-gray-200 hover:bg-gray-300 hover:border-gray-200"
        >
          <MdSearch size={22} />
        </button>
      </div>
    </div>
  );
};

export default Search;
