import React from "react";
import "./Card.css";
import { FaRegCircle } from "react-icons/fa";
import { IoMdCloseCircleOutline } from "react-icons/io";
import { PiCircleHalfFill } from "react-icons/pi";
import { TbCircleDashed } from "react-icons/tb";
import { BsCheckCircleFill, BsFillExclamationSquareFill } from "react-icons/bs";
const Card = ({ id, title, tag, status, priority }) => {
  const isStatus = localStorage.getItem("group") === "status";
  const isPriority = localStorage.getItem("group") === "priority";
 
  return (
    <div className="cardContainer flex-gap-10">
      {/* first Section*/}
      <div className="cardHeading flex-sb cardFirst">
        <h1 class="cardFirst_h1">{id}</h1>
        <div className="CardFirstImageContainer">
          <img class="CardFirstImage" src={`https://i.pravatar.cc/150?u=${id}`} alt="UserImage"/>
          <div className="showStatus"></div>
        </div>
      </div>

      {/* second Section */}
      <div className="cardTitle cardSecond">
        <div style={{ margin: "0.2px", display:'flex'}}>
          <div class="cardSecondStatus">{!isStatus &&
            (
              status === "Backlog" ? (
                <TbCircleDashed  style={{ color: 'gray', fontSize: '16px' }}/>
                )
                : status === "Todo" ? (
                  <FaRegCircle style={{ color: 'gray', fontSize: '14px' }}/>
                ) : status === "In progress" ? (
                  <PiCircleHalfFill style={{ color: 'rgb(241, 202, 73)', fontSize: '16px' }}/>
                ) : status === "Done" ? (
                  <BsCheckCircleFill style={{ color: 'rgb(94, 106, 210)', fontSize: '16px' }}/>
                )
                  : (
                    <IoMdCloseCircleOutline style={{ color: 'red', fontSize: '16px' }}/>
                  ))}</div>
        
        {title}</div>
      </div>
      {/* third Section */}
      <div className="cardTags cardThird">
        {!isPriority ? (
          <div className="tags color-grey">
            {priority === 1 || priority === 2 || priority === 3 ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="15"
                fill="currentColor"
                className="bi bi-signal"
                viewBox="0 0 16 16"
              >
                <rect x="1" y="10" width="3" height="2" />
                <rect
                  x="5"
                  y="7"
                  width="3"
                  height="5"
                  opacity={priority === 2 || priority === 3 ? 1 : 0.25}
                />
                <rect
                  x="9"
                  y="4"
                  width="3"
                  height="8"
                  opacity={priority === 3 ? 1 : 0.25}
                />
              </svg>
            ) : priority === 4 ? (
              <BsFillExclamationSquareFill color="rgb(252, 120, 64)"/>
            ) : (
              <p>...</p>
            )}
          </div>
        ) : null}
        {tag?.map((element, index) => {
          return (
            <div key={index} className="tags color-grey">
              {" "}
              <span><div class="cardThirdCircle"></div></span> {element}
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default Card;
