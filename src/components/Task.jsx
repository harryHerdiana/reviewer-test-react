const Task = ({ task, onDelete }) => {
  const handleDelete = () => {
    onDelete(task.id);
  };

  return (
/* Can be better: This wrapper is superfluous.
   I advise you to refer to the documentation for examples of using fragments: https://reactjs.org/docs/fragments.html */
    <>
      <article className="todolist-item">
        <span className="todolist-item__text">{task.content}</span>
        <button className="todolist-item__del" onClick={handleDelete}></button>
      </article>
    </>
  );
};

export default Task;
