import React, { useState } from "react";
import Pagination from "@mui/material/Pagination";

export default function PaginationComponent({page,handleChange}) {


  return (
    <div
      className="mypagination_component"
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Pagination
        count={10}
        page={page}
        onChange={(event,value)=>handleChange(event,value)}
        sx={{
          color: "var(--white)",
          "& .Mui-selected": {
            backgroundColor: "var(--blue) !important",
            color: "var(--white) !important",
            borderColor: "var(--blue) !important",
          },
          "& .MuiPaginationItem-ellipsis": {
            border: "0px solid var(--gray) !important",
          },
          "& .MuiPaginationItem-text": {
            color: "var(--white)",
            border: "1px solid var(--gray)",
          },
        }}
      />
    </div>
  );
}
