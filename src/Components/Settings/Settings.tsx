import React from "react";
import Sidebar from "../Sidebar/Sidebar";
import { useState } from "react";

import Navbar from "../Navbar/Navbar";

import white from "./Image/white.png";
import green from "./Image/green.png";
import { FaChevronDown } from "react-icons/fa";
import {
  SettingRapper,
  Setting,
  SettingDiv,
  SettingContainer,
  Div,
  SettingDetails,
  SettingDetails1,
  SettingDetailsContainer,
  SettingDetailsDiv1,
  SettingDetailsDiv2,
  Button,
  Select,
} from "./Style";
import { format } from "date-fns";

function Settings() {
  const [load, setLoad] = useState<number>(0);
  const [load2, setLoad2] = useState<number>(0);
  const [load3, setLoad3] = useState<number>(0);

  function handleClick() {
    // alert(`Clicked index: ${index}`);
    if (load === 0) {
      setLoad(1); // Light On
    } else if (load === 1) {
      setLoad(2); // Light Off
    } else {
      setLoad(1); // Light On
    }
  }
  function handleClick2() {
    // alert(`Clicked index: ${index}`);
    if (load2 === 0) {
      setLoad2(1); // Light On
    } else if (load2 === 1) {
      setLoad2(2); // Light Off
    } else {
      setLoad2(1); // Light On
    }
  }
  function handleClick3() {
    // alert(`Clicked index: ${index}`);
    if (load3 === 0) {
      setLoad3(1); // Light On
    } else if (load3 === 1) {
      setLoad3(2); // Light Off
    } else {
      setLoad3(1); // Light On
    }
  }
  const currentDate = format(Date.now(), "dd/MM/yy");

  return (
    <>
      <SettingRapper>
        <Sidebar></Sidebar>

        <SettingContainer>
          <Navbar></Navbar>
          <Setting>
            <SettingDiv>
              <Div>
                <h2>Settings</h2>
                <p>{currentDate}</p>
              </Div>
              <SettingDetails>
                <SettingDetailsContainer>
                  <SettingDetails1>
                    <SettingDetailsDiv1>
                      <h3>Notifications</h3>
                      <p>
                        Allow Pennywise send transaction notifications and
                        updates.
                      </p>
                    </SettingDetailsDiv1>
                    <SettingDetailsDiv2>
                      {load === 0 ? (
                        <img
                          src={green}
                          width={50}
                          onClick={() => handleClick()}
                          alt="Green Light"
                        />
                      ) : load === 1 ? (
                        <img
                          src={white}
                          width={50}
                          onClick={() => handleClick()}
                          alt="White Light"
                        />
                      ) : (
                        <img
                          src={green}
                          width={50}
                          onClick={() => handleClick()}
                          alt="Green Light"
                        />
                      )}
                      <Div style={{ color: "green" }}>Allow</Div>
                    </SettingDetailsDiv2>
                  </SettingDetails1>

                  <SettingDetails1>
                    <SettingDetailsDiv1>
                      <h3>Currency</h3>
                      <p>Select pennywise default Currency</p>
                    </SettingDetailsDiv1>
                    <SettingDetailsDiv2>
                      <Button>
                        <p style={{ color: "green" }}>
                          NGN (#) <FaChevronDown />
                        </p>
                      </Button>
                    </SettingDetailsDiv2>
                  </SettingDetails1>

                  <SettingDetails1>
                    <SettingDetailsDiv1>
                      <h3>Frequency</h3>
                      <p>Select pennywise default update frequency</p>
                    </SettingDetailsDiv1>
                    <SettingDetailsDiv2>
                      <Select>
                        <option>Monthly</option>
                        <option>Daily</option>
                        <option>Yearly</option>
                      </Select>
                    </SettingDetailsDiv2>
                  </SettingDetails1>

                  <SettingDetails1>
                    <SettingDetailsDiv1>
                      <h3>2-Factor autentications</h3>
                      <p>
                        Set-up 2-factor authentication on pennywise account for
                        extra security
                      </p>
                    </SettingDetailsDiv1>
                    <SettingDetailsDiv2>
                      {load2 === 0 ? (
                        <img
                          src={green}
                          width={50}
                          onClick={() => handleClick2()}
                          alt="Green Light"
                        />
                      ) : load2 === 1 ? (
                        <img
                          src={white}
                          width={50}
                          onClick={() => handleClick2()}
                          alt="White Light"
                        />
                      ) : (
                        <img
                          src={green}
                          width={50}
                          onClick={() => handleClick2()}
                          alt="Green Light"
                        />
                      )}
                      <Div style={{ color: "green" }}>Activate</Div>
                    </SettingDetailsDiv2>
                  </SettingDetails1>

                  <SettingDetails1>
                    <SettingDetailsDiv1>
                      <h3>Deactivate Account</h3>
                      <p>
                        Temporarily or permanently suspend Pennywise account.
                      </p>
                    </SettingDetailsDiv1>
                    <SettingDetailsDiv2>
                      {load3 === 0 ? (
                        <img
                          src={green}
                          width={50}
                          onClick={() => handleClick3()}
                          alt="Green Light"
                        />
                      ) : load3 === 1 ? (
                        <img
                          src={white}
                          width={50}
                          onClick={() => handleClick3()}
                          alt="White Light"
                        />
                      ) : (
                        <img
                          src={green}
                          width={50}
                          onClick={() => handleClick3()}
                          alt="Green Light"
                        />
                      )}
                      <Div style={{ color: "green" }}>Deactivate</Div>
                    </SettingDetailsDiv2>
                  </SettingDetails1>

                  <SettingDetails1>
                    <SettingDetailsDiv1>
                      <h3 style={{ color: "blue" }}>Change Password</h3>
                      <p>Change Pennywise account password</p>
                    </SettingDetailsDiv1>
                    <SettingDetailsDiv2></SettingDetailsDiv2>
                  </SettingDetails1>

                  <SettingDetails1>
                    <SettingDetailsDiv1>
                      <h3 style={{ color: "red" }}>Delete Account</h3>
                      <p>
                        Permanently delete pennywise account along with all
                        entered details and transactions.
                      </p>
                    </SettingDetailsDiv1>
                    <SettingDetailsDiv2></SettingDetailsDiv2>
                  </SettingDetails1>
                </SettingDetailsContainer>
              </SettingDetails>
            </SettingDiv>
          </Setting>
        </SettingContainer>
      </SettingRapper>
    </>
  );
}

export default Settings;
