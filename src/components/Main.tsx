import { useEffect, useState } from "react";
import Info from "../models/Info";
import { getRedditResults } from "../services/RedditService";
import "./Main.css";
import ResultList from "./ResultList";

const Main = () => {
  const [info, setInfo] = useState<Info[]>([]);

  useEffect(() => {
    getRedditResults().then((response) => {
      //console.log(response);
      setInfo(response.data); //Need to send the Gifs to ResultsList as er instruction sheet
    });
  }, []);

  return (
    <div className="Main">
      <ResultList infos={info} />
    </div>
  );
};

export default Main;
