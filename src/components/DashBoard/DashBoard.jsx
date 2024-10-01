import { React } from "react";
import { useSelector } from "react-redux";
import { AiOutlinePlus } from "react-icons/ai";
import { FaRegCircle } from "react-icons/fa6";
import { PiCircleHalfFill } from "react-icons/pi";
import { TbCircleDashed } from "react-icons/tb";
import { MdCancel } from "react-icons/md";
import { IoMdCloseCircleOutline } from "react-icons/io";
import { DiCodeigniter } from "react-icons/di";
import { RxDotsHorizontal } from "react-icons/rx";
import {
  BsCheckCircleFill,
  BsFillExclamationSquareFill,
  BsFillCheckCircleFill,
} from "react-icons/bs";
import "./DashBoard.css";
import Card from "../Card/Card";
const DashBoard = () => {
  const isStatus = localStorage.getItem("group") === "status";
  const isPriority = localStorage.getItem("group") === "priority";
  console.log("stat", isStatus, "prio", isPriority);
  const { selectedData, user } = useSelector(
    (state) => state.SelectDataReducer
  );
  console.log("rere", user);
  return (
    selectedData && (
      <div className="dashContainer" style={{ display: "flex", justifyContent: "space-around" }}>
        {selectedData.map((element, index) => {
          const cardWidthPercentage = 18.7;
          return (
            <div key={index} className="dashCardContainer" style={{ width: `${cardWidthPercentage}%` }}>
              <div className="dashCardHeading flex-sb">
                <div className="leftView">
                  {user ? (
                    <div className="imageContainer relative">
                      <img class="CardFirstImage" src={`https://i.pravatar.cc/150?u=${index}`} alt="UserImage"/>
                    </div>
                  ) : isStatus ? (
                    <div className="cardTitle">
                      {element[index].title === "Backlog" ? (<TbCircleDashed  style={{ color: 'gray', fontSize: '16px' }}/>
                      )
                        : element[index].title === "Todo" ? ( <FaRegCircle style={{ color: 'gray', fontSize: '14px' }}/>
                        ) : element[index].title === "In progress" ? ( <PiCircleHalfFill style={{ color: 'rgb(241, 202, 73)', fontSize: '16px' }}/>
                        ) : element[index].title === "Done" ? ( <BsCheckCircleFill style={{ color: 'blue', fontSize: '16px' }}/>
                        ) : ( <IoMdCloseCircleOutline style={{ color: 'red', fontSize: '16px' }}/>)}
                    </div>
                  ) : isPriority ? (
                    <div className="tags color-grey priorityHeading">
                      {element[index].title === "Low" ||
                        element[index].title === "Medium" ||
                        element[index].title === "High" ? (
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-signal" viewBox="0 0 16 16" >
                          <rect x="1" y="10" width="3" height="2" />
                          <rect x="5" y="7" width="3" height="5" opacity=
                            {
                              element[index].title === "Medium" || element[index].title === "High" ? 1 : 0.25
                            }
                          />
                          <rect x="9" y="4" width="3" height="8" opacity={element[index].title === "High" ? 1 : 0.25} />
                        </svg>
                      ) : element[index].title === "Urgent" ? (
                          <BsFillExclamationSquareFill color="rgb(252, 120, 64)" />
                      ) : (
                        <RxDotsHorizontal/>
                      )}
                    </div>
                  ) : (
                    <DiCodeigniter />
                  )}{" "}
                  <span>
                    {element[index]?.title} {element[index].value?.length}
                  </span>
                </div>
                <div className="rightView rightViewOfDashboard">
                  <AiOutlinePlus />{" "}
                  <RxDotsHorizontal />
                </div>
              </div>
              <div className="dashList flex-gap-10">
                {element[index]?.value?.map((element, ind) => {
                  return (
                    <Card
                      id={element.id}
                      title={element.title}
                      tag={element.tag}
                      status={element.status}
                      priority={element.priority}
                    />
                  );
                })}
              </div>
            </div>
          );
        })}
        {isStatus && (
          <>
            <div className="dashCardHeading flex-sb">
              <div className="leftView" style={{ fontSize: "15px", marginRight: "70px", wordSpacing: "4px" }}>
                <div className="cardTitle">
                  <BsFillCheckCircleFill style={{ color: "rgb(94, 106, 210)" }} />
                </div>{" "}
                <span >Done 0</span>
              </div>
              <div className="rightView">
                <AiOutlinePlus />{" "}
                <RxDotsHorizontal />
              </div>
            </div>
            <div className="dashCardHeading flex-sb">
              <div className="leftView" style={{ fontSize: "15px", marginRight: "70px", wordSpacing: "4px" }}>
                <div className="cardTitle" >
                  <MdCancel style={{ color: "grey" }} />
                </div>{" "}
                <span>Canceled 0</span>
              </div>
              <div className="rightView">
                <AiOutlinePlus />{" "}
                <RxDotsHorizontal />
              </div>
            </div>
          </>
        )}
      </div>
    )
  );
};
export default DashBoard;
