import React, { useCallback, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import classNames from "classnames";

interface PaginationProps {
  tableProps: any;
  sizePerPageList: {
    text: string;
    value: number;
  }[];
  PerPageList?: boolean;
  page?: boolean;
  goPage?: boolean;
  pageNumberSerial?: boolean;
}

const Pagination = ({
  tableProps,
  sizePerPageList,
  PerPageList,
  page,
  goPage,
  pageNumberSerial,
}: PaginationProps) => {
  /**
   * pagination count , index
   */
  const [pageCount, setPageCount] = useState<number>(tableProps.pageCount);
  const [pageIndex, setPageIndex] = useState<number>(
    tableProps.state.pageIndex
  );

  useEffect(() => {
    setPageCount(tableProps.pageCount);
    setPageIndex(tableProps.state.pageIndex);
  }, [tableProps.pageCount, tableProps.state.pageIndex]);

  /**
   * get filter pages
   */
  const filterPages = useCallback(
    (visiblePages: any, totalPages: number) => {
      return visiblePages.filter((page: any) => page <= pageCount);
    },
    [pageCount]
  );

  /**
   * handle visible pages
   */
  const getVisiblePages = useCallback(
    (page: number | null, total: number) => {
      if (total < 7) {
        return filterPages([1, 2, 3, 4, 5, 6], total);
      } else {
        if (page! % 5 >= 0 && page! > 4 && page! + 2 < total) {
          return [1, page! - 1, page!, page! + 1, total];
        } else if (page! % 5 >= 0 && page! > 4 && page! + 2 >= total) {
          return [1, total - 3, total - 2, total - 1, total];
        } else {
          return [1, 2, 3, 4, 5, total];
        }
      }
    },
    [filterPages]
  );

  /**
   * handle page change
   * @param page - current page
   * @returns
   */
  const changePage = (page: number) => {
    const activePage = pageIndex + 1;

    if (page === activePage) {
      return;
    }

    const visiblePages = getVisiblePages(page, pageCount);
    setVisiblePages(filterPages(visiblePages, pageCount));

    tableProps.gotoPage(page - 1);
  };

  useEffect(() => {
    const visiblePages = getVisiblePages(null, pageCount);
    setVisiblePages(visiblePages);
  }, [pageCount, getVisiblePages]);

  const [visiblePages, setVisiblePages] = useState<number[]>(
    getVisiblePages(null, pageCount)
  );
  const activePage: number = pageIndex + 1;

  return (
    <>
      <div className="d-lg-flex align-items-center text-center pb-1">
        {PerPageList && sizePerPageList.length > 0 && (
          <div className="d-inline-block me-3">
            <label className="me-1">Show :</label>
            <select
              value={tableProps.state.pageSize}
              onChange={(e: any) => {
                tableProps.setPageSize(Number(e.target.value));
              }}
              className="form-select d-inline-block w-auto"
            >
              {(sizePerPageList || []).map((pageSize, index) => {
                return (
                  <option key={index} value={pageSize.value}>
                    {pageSize.text}
                  </option>
                );
              })}
            </select>
          </div>
        )}

        {page && (
          <span className="me-3">
            Page{" "}
            <strong>
              {pageIndex + 1} of {tableProps.pageOptions.length}
            </strong>{" "}
          </span>
        )}

        {goPage && (
          <span className="d-inline-block align-items-center text-sm-start text-center my-sm-0 my-2">
            <label>Go to page : </label>
            <input
              type="number"
              value={pageIndex + 1}
              min="1"
              onChange={(e: any) => {
                const page = e.target.value ? Number(e.target.value) - 1 : 0;
                tableProps.gotoPage(page);
                setPageIndex(tableProps.state.pageIndex);
              }}
              className="form-control w-25 ms-1 d-inline-block"
            />
          </span>
        )}

        {pageNumberSerial && (
          <ul className="pagination pagination-rounded d-inline-flex ms-auto">
            <li
              key="prevpage"
              className={classNames(
                "page-item",
                "paginate_button",
                "previous",
                {
                  disabled: activePage === 1,
                }
              )}
              onClick={() => {
                if (activePage === 1) return;
                changePage(activePage - 1);
              }}
            >
              <Link to="#" className="page-link">
                <i className="uil uil-angle-left"></i>
              </Link>
            </li>
            {(visiblePages || []).map((page, index, array) => {
              return array[index - 1] + 1 < page ? (
                <React.Fragment key={page}>
                  <li className="page-item disabled d-none d-xl-inline-block">
                    <Link to="#" className="page-link">
                      ...
                    </Link>
                  </li>
                  <li
                    className={classNames(
                      "page-item",
                      "d-none",
                      "d-xl-inline-block",
                      {
                        active: activePage === page,
                      }
                    )}
                    onClick={(e: any) => changePage(page)}
                  >
                    <Link to="#" className="page-link">
                      {page}
                    </Link>
                  </li>
                </React.Fragment>
              ) : (
                <li
                  key={page}
                  className={classNames(
                    "page-item",
                    "d-none",
                    "d-xl-inline-block",
                    {
                      active: activePage === page,
                    }
                  )}
                  onClick={(e: any) => changePage(page)}
                >
                  <Link to="#" className="page-link">
                    {page}
                  </Link>
                </li>
              );
            })}
            <li
              key="nextpage"
              className={classNames("page-item", "paginate_button", "next", {
                disabled: activePage === tableProps.pageCount,
              })}
              onClick={() => {
                if (activePage === tableProps.pageCount) return;
                changePage(activePage + 1);
              }}
            >
              <Link to="#" className="page-link">
                <i className="uil uil-angle-right"></i>
              </Link>
            </li>
          </ul>
        )}
      </div>
    </>
  );
};

export default Pagination;
