import React, { useState } from "react";
import { Sidebar, Menu, MenuItem, SubMenu } from "react-pro-sidebar";

const SideBar = () => {
  const [collapsed] = useState(false);
  const [toggled, setToggled] = useState(false);

  const menuItemStyles = {
    root: {
      fontSize: "13px",
      fontWeight: 400,
    },
    SubMenuExpandIcon: {
      color: "#b6b7b9",
    },
    label: ({ open }) => ({
      fontWeight: open ? 600 : undefined,
    }),
  };

  return (
    <Sidebar
      collapsed={collapsed}
      toggled={toggled}
      onBackdropClick={() => setToggled(false)}
    //   breakPoint="md"
      width="full"
      
    >
      <div style={{ display: "flex", flexDirection: "column", height: "100%" }}>
        <div style={{ flex: 1, marginBottom: "32px" }}>
          <Menu menuItemStyles={menuItemStyles}>
            <SubMenu label="Charts" icon="">
              <MenuItem>Pie charts</MenuItem>
              <MenuItem>Line charts</MenuItem>
              <MenuItem>Bar charts</MenuItem>
            </SubMenu>
            <SubMenu label="Maps" icon="">
              <MenuItem>Google maps</MenuItem>
              <MenuItem>Open street maps</MenuItem>
            </SubMenu>
            <SubMenu label="Theme" icon="">
              <MenuItem>Dark</MenuItem>
              <MenuItem>Light</MenuItem>
            </SubMenu>
            <SubMenu label="Components" icon="">
              <MenuItem>Grid</MenuItem>
              <MenuItem>Layout</MenuItem>
              <SubMenu label="Forms">
                <MenuItem>Input</MenuItem>
                <MenuItem>Select</MenuItem>
                <SubMenu label="More">
                  <MenuItem>CheckBox</MenuItem>
                  <MenuItem>Radio</MenuItem>
                </SubMenu>
              </SubMenu>
            </SubMenu>
            <SubMenu label="E-commerce" icon="">
              <MenuItem>Product</MenuItem>
              <MenuItem>Orders</MenuItem>
              <MenuItem>Credit card</MenuItem>
            </SubMenu>
          </Menu>
          <Menu menuItemStyles={menuItemStyles}>
            <MenuItem icon="">Calendar</MenuItem>
            <MenuItem icon="">Documentation</MenuItem>
            <MenuItem disabled icon="">
              Examples
            </MenuItem>
          </Menu>
        </div>
      </div>
    </Sidebar>
  );
};

export default SideBar;
