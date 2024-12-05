/* eslint-disable @typescript-eslint/no-explicit-any */

const Issue = ({ issue }: any) => {
  return (
    <div className="border-2 px-2 py-2 mb-2 rounded-md border-orange-300">
      <a href={issue.html_url} className="text-blue-600">
        {issue.title}
      </a>
    </div>
  );
};

export default Issue;
