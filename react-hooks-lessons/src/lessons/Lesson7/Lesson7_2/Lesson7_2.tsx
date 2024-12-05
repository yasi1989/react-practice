import Issues from "./Issues";
import { usePageNumber } from "./hooks/usePageNumber";

const Lesson7_2 = () => {
  const { page, incrementPage, decrementPage } = usePageNumber();

  return (
    <div>
      <button
        onClick={decrementPage}
        className="border-2 rounded-md px-4 py-2 border-slate-600 mr-2"
      >
        Back
      </button>
      <button
        onClick={incrementPage}
        className="border-2 rounded-md px-4 py-2 border-slate-600"
      >
        Next
      </button>
      <Issues page={page} />
    </div>
  );
};

export default Lesson7_2;
