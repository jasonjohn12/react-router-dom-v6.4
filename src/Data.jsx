import { useLoaderData, useNavigation } from "react-router-dom";

const Data = () => {
  const navigation = useNavigation();
  const todos = useLoaderData();
  console.log("todos", todos);

  console.log("navigation", navigation);
  if (navigation.state === "loading") return <h1>Loading...</h1>;
  if (navigation.state === "idle") return <h1>TODOS</h1>;
};

export default Data;

export const dataLoader = async () => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/todos`);
  const todos = await res.json();

  return todos;
};
