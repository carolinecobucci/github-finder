import { useState } from "react";
import { UserProps } from "../types/user";
import Search from "../components/Search";
import User from "../components/User";
import Error from "../components/Error";
import Loader from "../components/Loader";

const Home = () => {
  const [user, setUser] = useState<UserProps | null>(null);
  const [error, setError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const loadUser = async (userName: string) => {
    setIsLoading(true);
    setError(false);
    setUser(null);

    const response = await fetch(`https://api.github.com/users/${userName}`);
    const data = await response.json();

    setIsLoading(false);

    if (response.status === 404) {
      setError(true);
      return;
    }

    const { avatar_url, login, location, followers, following } = data;
    const userData: UserProps = { avatar_url, login, location, followers, following };

    setUser(userData);
  };

  return (
    <div>
      <h1 className="text-2xl font-semibold mb-4 text-center">GitHub Finder</h1>
      <Search loadUser={loadUser} />
      {isLoading && <Loader />}
      {user && <User {...user} />}
      {error && <Error />}
    </div>
  );
};

export default Home;
