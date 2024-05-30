import "./App.css";
import { useQuery } from "@tanstack/react-query";
import Form from "./components/Form/Form";
function App() {
  const { data } = useQuery({
    queryKey: ["todos"],
    queryFn: async () =>
      await (await fetch("http://localhost:8000/todo")).json(),
  });
  console.log("Data--", data);
  return <div className="App">

    <Form />
    {data && data.data &&  data.data.map(todo=> <li key={todo.id}>
      {todo.title}
    </li>)}
  </div>;
}

export default App;
