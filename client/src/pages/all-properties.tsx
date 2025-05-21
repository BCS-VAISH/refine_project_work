import Add from "@mui/icons-material/Add";
//import { useTable } from "@refinedev/core";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
//import TextField from "@mui/material/TextField";
//import Select from "@mui/material/Select";
//import MenuItem from "@mui/material/MenuItem";

//import { useMemo } from "react";

import { PropertyCard, CustomButton } from "../components";
import { useNavigate } from "react-router-dom";

const AllProperties = () => {
  const navigate = useNavigate();

 /* const {
    tableQuery: { data, isLoading, isError },
    current,
    setCurrent,
    setPageSize,
    pageCount,
    sorter,
    setSorter,
    filters,
    setFilters,
  } = useTable();

  const allProperties = data?.data ?? [];

  const currentPrice = sorter.find((item) => item.field === "price")?.order;

  const toggleSort = (field: string) => {
    setSorter([{ field, order: currentPrice === "asc" ? "desc" : "asc" }]);
  };

  const currentFilterValues = useMemo(() => {
    const logicalFilters = filters.flatMap((item) =>
      "field" in item ? item : [],
    );

    return {
      title: logicalFilters.find((item) => item.field === "title")?.value || "",
      propertyType:
        logicalFilters.find((item) => item.field === "propertyType")?.value ||
        "",
    };
  }, [filters]);

  if (isLoading) return <Typography>Loading...</Typography>;
  if (isError) return <Typography>Error...</Typography>; */

  return (
    <Box>
      <Stack direction="row"
      justifyContent="space-between"
      alignItems="center">
        <Typography
        fontSize={25}
        fontWeight={700}
        color="#11142d"
        
        >
          All Properties
        </Typography>
        <CustomButton
        title="Add Property"
        handleClick={()=>navigate('/properties/create')}
        backgroundColor="#475be8"
        color="#fcfcfc"
        icon={<Add/>}
        ></CustomButton>

      </Stack>
    </Box>
      
  );
};

export default AllProperties;