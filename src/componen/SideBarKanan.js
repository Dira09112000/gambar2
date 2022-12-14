import {
  IoWallet,
  IoEllipsisHorizontalOutline,
  IoNotificationsOutline,
} from "react-icons/io5";
import { TbBrandMessenger, TbDiscount2 } from "react-icons/tb";
import { GiSuitcase } from "react-icons/gi";
import { CircularProgress, CircularProgressLabel } from "@chakra-ui/react";
import Button from "react-bootstrap/Button";
import {
  ProSidebar,
  Menu,
  MenuItem,
  SidebarHeader,
  SidebarFooter,
  SidebarContent,
} from "react-pro-sidebar";
import "../css/sidebarkanan.css";

import React from "react";

function SideBarKanan() {
  return (
    <>
      <div className="background" style={{paddingTop:"50px", width:"100%"}} >
        <div style={{width:"300px"}} className="container background">
          <SidebarHeader>
            <div className="">
              <div className="row">
                <div className="col-8"></div>
                <div className="d-flex icon-up col-4">
                  <div>
                    <IoNotificationsOutline />
                  </div>
                  &nbsp;&nbsp;
                  <div>
                    <IoEllipsisHorizontalOutline />
                  </div>
                  &nbsp;&nbsp;
                  <div
                    className="bg-not"
                    style={{
                      borderRadius: "20px",
                      width: "20px",
                      height: "20px",
                      alignItems: "center",
                      justifyContent: "center",
                      display: "flex",
                    }}
                  >
                    <TbBrandMessenger />
                  </div>
                </div>
              </div>
            </div>
            <div className="text-center">
              <div className="font-1">Your earnings this month</div>
              <div className="font-2">$2.309.68</div>
              <div className="font-3">05 jun 2021 at 11:00 PM</div>
              <div className="btn-1 mt-3 mb-3">Withdraw All Earning</div>
            </div>
          </SidebarHeader>
          <br />
          <SidebarContent>
            <Menu iconShape="square">
              <div className="container">
                <div className="row">
                  <div className="col-3">
                    <MenuItem
                      icon={<IoWallet />}
                      style={{
                        borderRadius: "20px",
                        width: "50px",
                        height: "50px",
                        alignItems: "center",
                        justifyContent: "center",
                        display: "flex",
                      }}
                      className="icon-wallet row"
                    ></MenuItem>
                  </div>
                  <div className="col-9 text-start">
                    <div className="text-1">Total earnings</div>
                    <div className="text-2">$2368.10</div>
                  </div>
                </div>
                <br />
                <div className="row">
                  <div className="col-3">
                    <MenuItem
                      icon={<GiSuitcase />}
                      style={{
                        borderRadius: "20px",
                        width: "50px",
                        height: "50px",
                        alignItems: "center",
                        justifyContent: "center",
                        display: "flex",
                      }}
                      className="icon-suitcase row"
                    ></MenuItem>
                  </div>
                  <div className="col-9 text-start">
                    <div className="text-1">Project earnings</div>
                    <div className="text-2">$2168.07</div>
                  </div>
                </div>
                <br />
                <div className="row">
                  <div className="col-3">
                    <MenuItem
                      icon={<TbDiscount2 />}
                      style={{
                        borderRadius: "20px",
                        width: "50px",
                        height: "50px",
                        alignItems: "center",
                        justifyContent: "center",
                        display: "flex",
                      }}
                      className="icon-discount row"
                    ></MenuItem>
                  </div>
                  <div className="col-9 text-start">
                    <div className="text-1">Tax whiled</div>
                    <div className="text--">$210.03</div>
                  </div>
                </div>
              </div>
            </Menu>
            <div className="text-center">
              <div className="container mt-1">
                <CircularProgress
                  value={70}
                  color="#4747F5"
                  size="200px"
                  thickness="5px"
                >
                  <CircularProgressLabel>
                    <CircularProgress
                      value={50}
                      color="#F9B035"
                      size="130px"
                      thickness="7px"
                    >
                      <CircularProgressLabel>
                        <CircularProgress
                          value={40}
                          color="#FE76C2"
                          size="60px"
                          thickness="9px"
                        ></CircularProgress>
                      </CircularProgressLabel>
                    </CircularProgress>
                  </CircularProgressLabel>
                </CircularProgress>
                <div className="text-center">
                  <h1 className="text-af mt-2 mb-2">Affiliate impressions</h1>
                  <div className="text-1">Update Your index</div>
                  <div className="text-1">Information in Setting</div>
                </div>
              </div>
            </div>
          </SidebarContent>
          <hr />
          <SidebarFooter>
            <div className="text-trio row mt-1">
              <div className="d-flex col-4">
                <div className="circle-1"></div>&nbsp; Marketing
              </div>
              <div className="d-flex col-4">
                <div className="circle-2"></div>&nbsp; Finance
              </div>
              <div className="d-flex col-4">
                <div className="circle-3"></div>&nbsp; Influence
              </div>
            </div>
            <div className="container mt-2 mb-2">
              <img
                className="img-dwn"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShr1lcCJeaUZiwkVeqeOABeoLgabVuGg-T0GOp97pUTa3cmgdc"
              ></img>
              <div className="text-center">
                <Button className="btn-2 mt-2">Invite User</Button>
              </div>
            </div>
          </SidebarFooter>
        </div>
      </div>
    </>
  );
}

export default SideBarKanan;
