import { Box, Paper, Tab, Tabs } from "@mui/material";
import { Link, matchPath, Outlet, useLocation } from "react-router-dom";

import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import ListIcon from "@mui/icons-material/List";

const usePathPattern = (): string | undefined => {
  const { pathname } = useLocation();
  return ["/shop", "/orders"].find((route) => matchPath(route, pathname));
};

export default function Layout() {
  const { hash, pathname, search } = useLocation();
  const result = usePathPattern();

  console.log(result);

  return (
    <Box sx={{ display: "flex", width: "100vw", height: "100vh" }}>
      <Paper square elevation={3} sx={{ width: 120 }}>
        <Tabs orientation="vertical" value="shop">
          <Tab
            component={Link}
            to="/shop"
            sx={{ justifyContent: "flex-start" }}
            icon={<ShoppingCartIcon />}
            iconPosition="start"
            label="Shop"
            value="shop"
          />
          <Tab
            component={Link}
            to="/orders"
            sx={{ justifyContent: "flex-start" }}
            icon={<ListIcon />}
            iconPosition="start"
            label="Orders"
            value="orders"
          />
        </Tabs>
      </Paper>
      <Box>
        <Outlet />
      </Box>
    </Box>
  );
}
