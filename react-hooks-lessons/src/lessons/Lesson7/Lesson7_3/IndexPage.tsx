/* eslint-disable @typescript-eslint/no-explicit-any */
export default function IndexPage({ navigate }: any) {
  return (
    <button
      onClick={() => navigate("/the-beatles")}
      className="border-2 px-4 py-4 rounded-md"
    >
      Open The Beatles artist page
    </button>
  );
}
