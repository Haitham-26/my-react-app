import "./css/main.css";
import Form from "./components/Form";
import Name from "./components/Names";
import Counter from "./components/Counter";
import { useEffect, useState } from "react";
export default function Main() {
  /* API data showing */
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("	https://api.coinbase.com/v2/currencies")
      .then((r) => r.json())
      .then((data) => setData(data.data));
  });
  const dataShow = data.map((it) => <Name name={it.name} id={it.id} />);
  return (
    <main>
      <section>
        <Form />
      </section>
      <section>
        <Counter />
      </section>
      <section className="names-main">{dataShow}</section>
    </main>
  );
}
