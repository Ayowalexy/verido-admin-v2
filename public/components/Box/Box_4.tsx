import { useState, useEffect } from "react";
import ConsultantTable from "../../../pages/consultant/consultant_table";
import TableSkeleton from "../Skelotons/Table.skeleton";
import { getAllConsultants } from "../../services/network";

import { Box, useTheme } from "@chakra-ui/react";
import Image from "next/image";


const Box_4 = () => {
  const theme = useTheme();
  const [value, setValue] = useState("");
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const handleGetAllConsultants = async () => {
    setIsLoading(true);
    const res = await getAllConsultants();
    setData(res);
    console.log("consultants", res);
    setIsLoading(false);
  };

  useEffect(() => {
    handleGetAllConsultants();
  }, []);
  <Image
  src='/imgs/svgs/verido_logo.svg'
  width={150}
  height={40}
/>
  return (
    <Box>
      {!isLoading ? (
        <ConsultantTable data={data} />
      ) : (
        <TableSkeleton isLoading={isLoading} />
      )}
    </Box>
  );
};

export default Box_4;
