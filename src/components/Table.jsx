/* eslint-disable react/prop-types */
import TableHead from "./TableHead";
import TableRow from "./TableRow";

export default function Table({ repos }) {
  return (
    <table>
      <TableHead />
      <tbody>
        {repos.map((repo, index) => {
          return <TableRow key={index} index={index} {...repo} />;
        })}
      </tbody>
    </table>
  );
}
