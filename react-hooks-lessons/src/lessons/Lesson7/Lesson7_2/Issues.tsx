/* eslint-disable @typescript-eslint/no-explicit-any */
import useSWR from "swr";
import Issue from "./Issue";

const fetcher = (args: string) => fetch(args).then((res) => res.json());

const Issues = ({ page }: { page: number | boolean | (() => void) }) => {
  const { data: issues } = useSWR(
    `https://api.github.com/repos/facebook/react/issues?per_page=10&state=all&page=${page}`,
    fetcher
  );
  return (
    <div className="mt-2">
      {issues?.map((issue: any) => (
        <Issue key={issue.id} issue={issue} />
      ))}
    </div>
  );
};

export default Issues;
