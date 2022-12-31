import React, {useCallback, useEffect, useState} from "react";

import {Container, Flex, Icon, Tab, TabList, Tabs} from "@chakra-ui/react";
import {Info} from "phosphor-react";
import {Link, Outlet, useLocation} from "react-router-dom";

import {ROUTES} from "../../routes";
import {Header} from "../header";


const getRouteName = (route: string) => {
  switch (route) {
    case ROUTES.showcase: {
      return "Showcase";
    }
    case ROUTES.dashboard: {
      return "Dashboard";
    }
    case ROUTES.review: {
      return "Review / Approve / Apply";
    }
    case ROUTES.blueprints: {
      return "Blueprints";
    }

    default: {
      return "";
    }
  }
};

export const Kuttle: React.FC = () => {
  const [selectedTabIndex, setSelectedTabIndex] = useState(0);
  const location = useLocation();

  useEffect(() => {
    const newTabIndex = Object.values(ROUTES).findIndex(
      (route) => location.pathname.indexOf(route) !== -1
    );
    setSelectedTabIndex(newTabIndex);
  }, [location]);

  const handleTabClick = useCallback((index: number) => {}, []);

  return (
    <React.Fragment>
      <Header />
      <Tabs
        index={selectedTabIndex}
        onChange={handleTabClick}
        maxW="100vw"
        overflowX="auto">
        <Flex
          align="center"
          justify="space-between">
          <TabList>
            {Object.values(ROUTES).map((route) => (
              <Link
                to={route}
                key={`Tab_${route}`}>
                <Tab>{getRouteName(route)}</Tab>
              </Link>
            ))}
          </TabList>
          <Icon
            color="kuttle.black"
            w={6}
            h={6}
            mr={3}>
            <Info size="24px" />
          </Icon>
        </Flex>
      </Tabs>
      <Container
        m={0}
        py={2}
        px={0}
        maxW="full"
        bg="kuttle.gray"
        minH="calc(100vh - 2 * 48px)">
        <Outlet />
      </Container>
    </React.Fragment>
  );
};
