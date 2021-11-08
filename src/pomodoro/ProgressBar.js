import React from "react";

const ProgressBar= ({session,breakDuration,focusDuration})=> {
    function calcWidth(){
        return Math.abs(
                    (session.label === "Focusing"
                      ? focusDuration
                      : breakDuration) *
                      60 -
                      session.timeRemaining
                  ) /
                    ((session.label === "Focusing"
                      ? focusDuration
                      : breakDuration) *
                      60)) *
                  100
    }
    return (
      <div className="col">
        <div className="progress" style={{ height: "20px" }}>
          <div
            className="progress-bar"
            role="progressbar"
            aria-valuemin="0"
            aria-valuemax="100"
            aria-valuenow={
              session
                ? calcWidth()
                : "0"
            } // TODO: Increase aria-valuenow as elapsed time increases
            style={{
              width: session
                ? calcWidth()+"%"
                : "0%",
            }} // TODO: Increase width % as elapsed time increases
          />
        </div>
      </div>
    );
}
export default ProgressBar
