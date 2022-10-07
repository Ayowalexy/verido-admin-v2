import {
  List,
  ListItem,
  ListIcon,
  Box,
  Text,
  Icon,
  useTheme,
} from "@chakra-ui/react";
import admin_navigation, {
  consultant_navigation,
  partner_navigation,
  expert_navigation,
} from "./admin";
import Logo from "../imgs/svgs/verido_logo.svg";
import Image from "next/image";
import { useEffect, useState, useContext } from "react";
import { useRouter } from "next/router";
import { UserRoleContext } from "../context/user.context";
import AsyncStorage from "@react-native-async-storage/async-storage";

type NavigationProps = {
  activeElement: string;
};

type navProps = {
  label: string;
  link: string;
  icon: any;
};

const Navigation = ({ activeElement }: NavigationProps) => {
  const theme = useTheme();
  const router = useRouter();
  const [navigation, setNavigation] = useState<any>([]);
  const { userRole } = useContext(UserRoleContext);
  const {
    colors: {
      brand: { primary, black, primary_faded, text, white },
    },
  } = theme;

  useEffect(() => {
    (async () => {
      const role = await AsyncStorage.getItem("accountType");

      if (role === "Admin") {
        setNavigation(admin_navigation);
      } else if (role === "Consultant") {
        setNavigation(consultant_navigation);
      } else if (role === "Partner") {
        setNavigation(partner_navigation);
      } else if (role === "Experts") {
        setNavigation(expert_navigation);
      }
    })();
  }, []);

  return (
    <Box pos="relative">
      <Box
        pos="fixed"
        width="20%"
        height="100vh"
        overflow="scroll"
        p={30}
        bgColor={white}
      >
        <Image src="/imgs/svgs/verido_logo.svg" width={150} height={40} />
        <Text pt={70} pb={25} color={black}>
          MAIN
        </Text>
        <List spacing={3}>
          {navigation?.map((element: navProps, idx: string) => (
            <ListItem
              fontSize={16}
              fontWeight={300}
              color={activeElement == element.label ? primary : text}
              bgColor={activeElement == element.label ? primary_faded : white}
              borderRadius={10}
              cursor="pointer"
              transition="all ease 500ms"
              padding="14px 13px"
              onClick={() => {
                router.push(element.link);
              }}
              key={idx}
            >
              <ListIcon
                w={25}
                h={25}
                as={element.icon}
                color={activeElement == element.label ? primary : text}
              />
              {element.label}
            </ListItem>
          ))}
        </List>
      </Box>
    </Box>
  );
};

export default Navigation;
