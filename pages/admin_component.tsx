import { Text, useTheme } from "@chakra-ui/react";
import Box_1 from "../public/components/Box/Box_1";
import Box_2 from "../public/components/Box/Box_2";
import Box_3 from "../public/components/Box/Box_3";
import Box_4 from "../public/components/Box/Box_4";
import Box_5 from "../public/components/Box/Box_5";
import Box_6 from "../public/components/Box/Box_6";
import Box_7 from "../public/components/Box/Box_7";
import Box_8 from "../public/components/Box/Box_8";
import { getAllAnalytics } from "../public/services/network";
import { useState, useEffect, useContext } from "react";
import { UserRoleContext } from "../public/context/user.context";
import AsyncStorage from "@react-native-async-storage/async-storage";

const AdminComponent = (props: any): JSX.Element => {
  const theme = useTheme();
  const {
    colors: {
      brand: { black, white, yoda },
    },
  } = theme;
  const [data, setData] = useState<object | any>({});
  const { userRole } = useContext(UserRoleContext);
  const [role, setRole] = useState<string | null>("");

  const handleGetAnalytics = async () => {
    const response = await getAllAnalytics();
    setData(response);
    console.log(response);
  };

  useEffect(() => {
    handleGetAnalytics();
  }, []);

  const getRole = async () => {
    const role = await AsyncStorage.getItem("accountType");
    setRole(role);
    return role;
  };

  useEffect(() => {
    getRole();
  }, []);

  const Admin = () => (
    <>
      <Box_1 data={data} />
      <Box_2 data={data} />
      <Box_3 data={data} />
      <Box_4 />
      <Box_5 />
      <Box_6
        data={{
          moneyin: data?.alldata?.money_in?.totalMoneyIn,
          moneyout: data?.alldata?.money_out?.totalMoneyOut,
        }}
      />
      <Box_7
        data={{
          moneyin: data?.alldata?.money_in?.totalMoneyIn,
          overhead: data?.alldata?.overhead?.totalOverhead,
          direct_labour: data?.alldata?.money_in?.DirectLabour,
          direct_materials: data?.alldata?.money_in?.DirectMaterials,
        }}
      />
      <Box_8
        data={{
          moneyin: data?.alldata?.money_in?.totalMoneyIn,
          overhead: data?.alldata?.overhead?.totalOverhead,
          direct_labour: data?.alldata?.money_in?.DirectLabour,
          direct_materials: data?.alldata?.money_in?.DirectMaterials,
        }}
      />
    </>
  );

  const Consultant = () => (
    <>
      <Box_5 />
      <Box_6
        data={{
          moneyin: data?.alldata?.money_in?.totalMoneyIn,
          moneyout: data?.alldata?.money_out?.totalMoneyOut,
        }}
      />
      <Box_7
        data={{
          moneyin: data?.alldata?.money_in?.totalMoneyIn,
          overhead: data?.alldata?.overhead?.totalOverhead,
          direct_labour: data?.alldata?.money_in?.DirectLabour,
          direct_materials: data?.alldata?.money_in?.DirectMaterials,
        }}
      />
      <Box_8 
         data={{
          moneyin: data?.alldata?.money_in?.totalMoneyIn,
          overhead: data?.alldata?.overhead?.totalOverhead,
          direct_labour: data?.alldata?.money_in?.DirectLabour,
          direct_materials: data?.alldata?.money_in?.DirectMaterials,
        }}
      />
    </>
  );

  return (
    <>
      <Text pt={10} fontWeight={400} fontSize={27} color={black}>
        Welcome back, Edward 👋
      </Text>
      <Text fontWeight={300} fontSize={14} color={black}>
        Your current status and analytics are here
      </Text>
      {role == "Consultant" && <Consultant />}
      {role == "Admin" && <Admin />}
    </>
  );
};

export default AdminComponent;
