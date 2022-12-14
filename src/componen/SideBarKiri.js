import React, { useState } from "react";
import {
  ProSidebar,
  Menu,
  MenuItem,
  SidebarHeader,
  SidebarFooter,
  SidebarContent,
} from "react-pro-sidebar";
import {
  IoNewspaperOutline,
  IoGridOutline,
  IoStatsChartSharp,
  IoChatbubbleEllipsesOutline
} from "react-icons/io5";
import {
  VscThreeBars,
  VscRepoPush,
} from "react-icons/vsc";
import { TbLogout } from "react-icons/tb";
import { GoSettings } from "react-icons/go";
import {MdOutlineSchedule, MdWork, MdForwardToInbox} from "react-icons/md";
import {FaMoneyBillAlt} from "react-icons/fa";
import {GrNotification} from "react-icons/gr";
import "react-pro-sidebar/dist/css/styles.css";
import { BsArrowRight } from "react-icons/bs";
import "../css/sidebarkiri.css";
import { CgProfile } from "react-icons/cg";

const SideBarKiri = () => {
  const [menuCollapse, setMenuCollapse] = useState(false);
  const menuIconClick = () => {
    menuCollapse ? setMenuCollapse(false) : setMenuCollapse(true);
  };

  return (
    <>
      <div id="header">
        <ProSidebar collapsed={menuCollapse}>
          <SidebarHeader className="background">
            <div className="logotext" onClick={menuIconClick}>
              {menuCollapse ? (
                <VscThreeBars />
              ) : (
                <div className="text py-3">
                  <div className="font-trade">
                    <div style={{color:"orange"}}><VscRepoPush size={30}/></div>
                  </div>
                  <div className="font-trade">Tom</div>
                  <div className="font-mask">Max</div>
                </div>
              )}
            </div>
          </SidebarHeader>
          <SidebarContent className="background">
            <Menu iconShape="square">
              <MenuItem
                className="active"
                active={true}
                icon={<IoGridOutline />}
              >
                Dashboard
              </MenuItem>
              <MenuItem icon={<IoStatsChartSharp />}>Campaigns</MenuItem>
              <MenuItem icon={<IoNewspaperOutline />}>Statement</MenuItem>
              <MenuItem icon={<MdOutlineSchedule />}>Schedule</MenuItem>
              <MenuItem icon={<MdWork />}>Project</MenuItem>
              <MenuItem icon={<FaMoneyBillAlt />}>Payouts</MenuItem>
            </Menu>
          </SidebarContent>
          <Menu iconShape="square">
            <MenuItem>Insights</MenuItem>
            <MenuItem icon={<MdForwardToInbox />}>Inbox</MenuItem>
            <MenuItem icon={<GrNotification />}>Notifications</MenuItem>
            <MenuItem icon={<IoChatbubbleEllipsesOutline />}>Chat</MenuItem>
          </Menu>

          <SidebarContent className="background"></SidebarContent>
          <SidebarFooter>
            <div className="wraper">
              <div className="row kotak" style={{ alignItems : "center", color: "white"}}>
                <div className="col-3"></div>
                <div className="col-9">
                    <div style={{fontSize : "14px" }}>
                      Get Free Moonths
                    </div>
                    <div style={{fontSize : "14px" }}>
                      of Premium
                    </div>
                    <div style={{display: "flex"}}>
                      <div>
                        Get Pro Now<BsArrowRight/>
                      </div>
                    </div>
                </div>
              </div>
            </div>
            <div className="wraper">
              <div className="footer-item">
                <div>
                  <CgProfile size={25} />
                </div>
                <div
                  style={{
                    display: "flex",
                    width: "100px",
                    justifyContent: "space-between",
                  }}>
                  <div>
                    <GoSettings size={25} />
                  </div>
                  <div>
                    <TbLogout size={25} />
                  </div>
                </div>
              </div>
            </div>
          </SidebarFooter>
        </ProSidebar>
      </div>
    </>
  );
};

export default SideBarKiri;
