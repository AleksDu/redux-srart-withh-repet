import { useState, useEffect, useRef } from "react";
const styles = {
  code: {
    display: "inline-flex",
    padding: 4,
    borderRadius: 4,
    backgroundColor: "#ddd",
    fontWeight: 700,
  },
};
export default function SkipEffectOnFirstRender() {
  const [count, setCount] = useState(0);

  //   const [query] = useState("");
  const isFirstRender = useRef(true);

  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }

    console.log(`Выполняется useEffect - ${Date.now()}`);
  });

  // для фетча если есть запрос фетчим, если нет нет,
  //   типа пропустить первый рендер и все последуюющии
  //   где query пустой
  //   useEffect(() => {
  //     if (query === "") {
  //       return;
  //     }
  //     fetch();
  //   }, [query]);

  return (
    <div>
      <button onClick={() => setCount((c) => c + 1)}>{count}</button>
      <p>
        <code style={styles.code}>useEffect</code> этого компонента не
        выполняется на первом рендере
      </p>
    </div>
  );
}
