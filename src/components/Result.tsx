import Info from "../models/Info";
import "./Result.css";

interface Props {
  infos: Info;
}

const Result = ({ infos }: Props) => {
  return (
    <li className="Result">
      <h2>{infos.title}</h2>
      <img src={infos.images.u} alt={infos.title} />
      <a href={infos.url}> LINK to Original</a>
    </li>
  );
};

export default Result;
