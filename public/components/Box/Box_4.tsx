import { useState, useEffect } from "react";
import ConsultantTable from "../../../pages/consultant/consultant_table";
import TableSkeleton from "../Skelotons/Table.skeleton";
import {
  getAllConsultants,
  getPartnerConsultants,
} from "../../services/network";

import { Box, useTheme } from "@chakra-ui/react";
import Image from "next/image";
import getRole, { getUser } from "../../utils/utils";

const Box_4 = () => {
  const theme = useTheme();
  const [value, setValue] = useState("");
  const [data, setData] = useState([]);
  const [userRole, setUserRole] = useState<string | null>("");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    (async () => {
      const role = await getRole();
      const user = await getUser();
      setIsLoading(true);

      const userId = user?._id;
      if (role === "Partner") {
        const res = await getPartnerConsultants(userId);
        console.log('Partner consultant', res)
        setData(res);
      } else {
        const res = await getAllConsultants();
        setData(res);
      }
      setIsLoading(false);
    })();
  }, []);

  // <Image src="/imgs/svgs/verido_logo.svg" width={150} height={40} />;
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
