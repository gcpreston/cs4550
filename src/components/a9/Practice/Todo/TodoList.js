import TodoItem from "./TodoItem";
import todos from "./todos.json";
const TodoList = () => {
  return (
    <ul>
      {
        todos.map((todo, i) => {
          return (<TodoItem todo={todo} key={i} />);
        })
      }
    </ul>
  );
}
export default TodoList;
