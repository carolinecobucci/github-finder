import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { RepoProps } from "../types/repo";

import BackBtn from "../components/BackBtn";
import Loader from "../components/Loader";
import Repo from "../components/Repo";

const Repos = () => {
  const { username } = useParams();

  const [repos, setRepos] = useState<RepoProps[] | [] | null>(null);

  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const loadRepos = async function (username: string) {
      setIsLoading(true);
      const response = await fetch(`https://api.github.com/users/${username}/repos`);

      const data = await response.json();

      setIsLoading(false);

      let orderedRepos = data.sort(
        (a: RepoProps, b: RepoProps) => b.stargazers_count - a.stargazers_count
      );
      orderedRepos = orderedRepos.slice(0, 5);

      setRepos(orderedRepos);
    };

    if (username) {
      loadRepos(username);
    }
  }, []);

  if (!repos && isLoading) return <Loader />;

  return (
    <div className="flex flex-col items-center">
      <BackBtn />
      <h2 className="text-lg mb-1">Explore os repositórios do usuário:</h2>
      <p className="font-semibold mb-2">{username}</p>
      {repos && repos.length === 0 && <p>Não há repositórios.</p>}
      {repos && repos.length > 0 && (
        <div className="flex flex-col gap-3">
          {repos.map((repo: RepoProps) => (
            <Repo {...repo} key={repo.name} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Repos;
