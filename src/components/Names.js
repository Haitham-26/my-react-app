import "../css/names.css";
export default function Name(props) {
  return (
    <div>
      <p className="names-par">
        The ID is <span className="names-span">{props.id}</span>, and the name
        is
        <span className="names-span"> {props.name}</span>
      </p>
    </div>
  );
}
