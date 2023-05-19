import { forwardRef, useEffect, useRef } from "react";

import {
  useTable,
  useRowSelect,
  TableToggleCommonProps,
  UseRowSelectHooks,
} from "react-table";

import { useHotkeys } from "react-hotkeys-hook";

import "./styles.css";

const IndeterminateCheckbox = forwardRef(
  ({ indeterminate, ...rest }: TableToggleCommonProps, ref) => {
    const defaultRef = useRef();
    const resolvedRef = ref || defaultRef;

    useEffect(() => {
      resolvedRef.current.indeterminate = indeterminate;
    }, [resolvedRef, indeterminate]);

    return (
      <>
        <input type="checkbox" ref={resolvedRef} {...rest} />
      </>
    );
  }
);

function Table({ columns, data }) {
  const headerToggleRef = useRef();

  const tableInstance = useTable({ columns, data }, useRowSelect, (hooks) => {
    hooks.visibleColumns.push((columns) => [
      // Let's make a column for selection
      {
        id: "selection",
        // The header can use the table's getToggleAllRowsSelectedProps method
        // to render a checkbox
        Header: ({ getToggleAllRowsSelectedProps }: UseRowSelectHooks) => (
          <div>
            <IndeterminateCheckbox
              {...getToggleAllRowsSelectedProps()}
              ref={headerToggleRef}
            />
          </div>
        ),
        // The cell can use the individual row's getToggleRowSelectedProps method
        // to the render a checkbox
        Cell: ({ row }) => (
          <div>
            <IndeterminateCheckbox {...row.getToggleRowSelectedProps()} />
          </div>
        ),
      },
      ...columns,
    ]);
  });
  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    tableInstance;

  useHotkeys("ctrl+a", () => headerToggleRef.current.click(), {
    preventDefault: true,
  });

  return (
    <table {...getTableProps()}>
      <thead>
        {headerGroups.map((headerGroup) => (
          <tr {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map((column) => (
              <th {...column.getHeaderProps()}>{column.render("Header")}</th>
            ))}
          </tr>
        ))}
      </thead>

      <tbody {...getTableBodyProps()}>
        {rows.map((row) => {
          prepareRow(row);

          return (
            <tr {...row.getRowProps()}>
              {row.cells.map((cell) => {
                return <td {...cell.getCellProps()}>{cell.render("Cell")}</td>;
              })}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}

export default Table;
