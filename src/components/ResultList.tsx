import { info } from "console";
import Info from "../models/Info";
import Result from "./Result";
import "./ResultList.css";

interface Props {
  infos: Info[];
}

const ResultList = ({ infos }: Props) => {
  return (
    <div className="ResultsList">
      <ul>
        {infos.map((info) => (
          <Result infos={info} key={info.linkFlairTemplateId} />
        ))}
      </ul>
    </div>
  );
};

export default ResultList;
