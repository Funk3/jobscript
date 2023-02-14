import useCreateNewJobApp from "__helpers__/hooks/useCreateNewJobApp";

export default function CreateNewJobApp() {
  const { handleAddNewJobClick } = useCreateNewJobApp();

  return (
    <button onClick={handleAddNewJobClick} className="new-btn">
      <i className="fa-solid fa-plus fa-lg"></i>
    </button>
  );
}
