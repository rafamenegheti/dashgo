import { Flex, useBreakpointValue,Icon, IconButton } from "@chakra-ui/react";
import { RiMenuLine } from "react-icons/ri";
import { useSidebarDrawer } from "../../contexts/SidebarDrawerContext";
import { Logo } from "./Logo";
import { NotificatonsNav } from "./NotificationsNav";
import { Profile } from "./Profile";
import { Search } from "./Search";

export function Header() {

  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true
  })

  const { onOpen   } = useSidebarDrawer()

  return (
    <Flex
      as="header"
      w="100%"
      maxW={1480}
      h="20"
      mx="auto"
      mt="4"
      align="center"
      px="6"
    >
      { !isWideVersion && ( 
        <IconButton aria-label="open navigation" fontSize="24" variant="unstyled" onClick={onOpen} mr="2" icon={<Icon as={RiMenuLine} />} >

        </IconButton>
      )}
      <Logo />
      <Search />
      <Flex align="center" ml="auto">
        <NotificatonsNav />
        <Profile showProfileData={isWideVersion}/>
      </Flex>
    </Flex>
  );
}
