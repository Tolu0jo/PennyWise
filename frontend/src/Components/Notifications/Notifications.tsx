import { styled } from "styled-components";
import "./style.css";
import {
  SettingRapper,
  Setting,
  SettingDiv,
  SettingContainer,
  Div,
  ImageDiv,
  SettingDetails,
  SettingDetails1,
  SettingDetailsContainer,
  SettingDetailsDiv1,
  SettingDetailsDiv2,
  Button,
} from "../Settings/Style";
import Navbar from "../Navbar/Navbar";
import image from "./document.png";
import { FaChevronDown } from "react-icons/fa";

function Notifications() {
  return (
    <>
      <SettingRapper>
        <SettingContainer>
          <Setting>
            <SettingDiv>
              <Div>
                <h2>Notifications</h2>
              </Div>
              <SettingDetails>
                <SettingDetailsContainer style={{ width: "100%" }}>
                  <SettingDetails1 className="sett main">
                    <ImageDiv>
                      <div>
                        <img src={image} alt="" width={25} />
                      </div>
                    </ImageDiv>
                    <SettingDetailsDiv1 className="sett">
                      <div>
                        <h3>Budget Update</h3>
                      </div>
                      <p>
                        You have spent 80% of your food budget for this month,
                        20% more to go You have spent 80% of your food budget
                        for this month, 20% more to go You have spent 80%
                      </p>
                    </SettingDetailsDiv1>
                    <SettingDetailsDiv2 className="settingDiv">
                      <Button>
                        <span>4 hours ago</span>
                      </Button>
                    </SettingDetailsDiv2>
                  </SettingDetails1>
                  <SettingDetails1 className="sett main">
                    <ImageDiv>
                      <div>
                        <img src={image} alt="" width={25} />
                      </div>
                    </ImageDiv>
                    <SettingDetailsDiv1 className="sett">
                      <div>
                        <h3>Budget Update</h3>
                      </div>
                      <p>
                        You have spent 80% of your food budget for this month,
                        20% more to go You have spent 80% of your food budget
                        for this month, 20% more to go You have spent 80%
                      </p>
                    </SettingDetailsDiv1>
                    <SettingDetailsDiv2 className="settingDiv">
                      <Button>
                        <span>4 hours ago</span>
                      </Button>
                    </SettingDetailsDiv2>
                  </SettingDetails1>
                  <SettingDetails1 className="sett main">
                    <ImageDiv>
                      <div>
                        <img src={image} alt="" width={25} />
                      </div>
                    </ImageDiv>
                    <SettingDetailsDiv1 className="sett">
                      <div>
                        <h3>Budget Update</h3>
                      </div>
                      <p>
                        You have spent 80% of your food budget for this month,
                        20% more to go You have spent 80% of your food budget
                        for this month, 20% more to go You have spent 80%
                      </p>
                    </SettingDetailsDiv1>
                    <SettingDetailsDiv2 className="settingDiv">
                      < Button>
                        <span>4 hours ago</span>
                      </Button>
                    </SettingDetailsDiv2>
                  </SettingDetails1>

                  <SettingDetails1 className="sett main">
                    <ImageDiv>
                      <div>
                        <img src={image} alt="" width={25} />
                      </div>
                    </ImageDiv>
                    <SettingDetailsDiv1 className="sett">
                      <div>
                        <h3>Budget Update</h3>
                      </div>
                      <p>
                        You have spent 80% of your food budget for this month,
                        20% more to go You have spent 80% of your food budget
                        for this month, 20% more to go You have spent 80%
                      </p>
                    </SettingDetailsDiv1>
                    <SettingDetailsDiv2 className="settingDiv">
                      <Button>
                        <span>4 hours ago</span>
                      </Button>
                    </SettingDetailsDiv2>
                  </SettingDetails1>
                  <SettingDetails1 className="sett main">
                    <ImageDiv>
                      <div>
                        <img src={image} alt="" width={25} />
                      </div>
                    </ImageDiv>
                    <SettingDetailsDiv1 className="sett">
                      <div>
                        <h3>Budget Update</h3>
                      </div>
                      <p>
                        You have spent 80% of your food budget for this month,
                        20% more to go You have spent 80% of your food budget
                        for this month, 20% more to go You have spent 80%
                      </p>
                    </SettingDetailsDiv1>
                    <SettingDetailsDiv2 className="settingDiv">
                      < Button>
                        <span>4 hours ago</span>
                      </  Button>
                    </SettingDetailsDiv2>
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

export default Notifications;
