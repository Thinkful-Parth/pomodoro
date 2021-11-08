import React from "react";

const Buttons = ({
  setfocusDuration,
  setbreakDuration,
  session,
  breakDuration,
  focusDuration}
) => {
  return (
    <>
      <div className="col">
        <div className="input-group input-group-lg mb-2">
          <span className="input-group-text" data-testid="duration-focus">
            {/* TODO: Update this text to display the current focus session duration */}
            Focus Duration:{""}
            {new Date((focusDuration || 0) * 60 * 1000)
              .toISOString()
              .substr(14, 5)}
          </span>
          <div className="input-group-append">
            {/* TODO: Implement decreasing focus duration and disable during a focus or break session */}
            <button
              onClick={() =>
                focusDuration > 5 && setfocusDuration((focusDuration) => focusDuration - 5)
              }
              disabled={session}
              type="button"
              className="btn btn-secondary"
              data-testid="decrease-focus"
            >
              <span className="oi oi-minus" />
            </button>
            {/* TODO: Implement increasing focus duration  and disable during a focus or break session */}
            <button
              disabled={session}
              onClick={() =>
                focusDuration < 60 && setfocusDuration((focusDuration) => focusDuration + 5)
              }
              type="button"
              className="btn btn-secondary"
              data-testid="increase-focus"
            >
              <span className="oi oi-plus" />
            </button>
          </div>
        </div>
      </div>
      <div className="col">
        <div className="float-right">
          <div className="input-group input-group-lg mb-2">
            <span className="input-group-text" data-testid="duration-break">
              {/* TODO: Update this text to display the current break session duration */}
              Break Duration:{" "}
              {new Date((breakDuration || 0) * 60 * 1000)
                .toISOString()
                .substr(14, 5)}
              
            </span>
            <div className="input-group-append">
              {/* TODO: Implement decreasing break duration and disable during a focus or break session*/}
              <button
                disabled={session}
                onClick={() =>
                  breakDuration > 1 && setbreakDuration((breakDuration) => breakDuration - 1)
                }
                type="button"
                className="btn btn-secondary"
                data-testid="decrease-break"
              >
                <span className="oi oi-minus" />
              </button>
              {/* TODO: Implement increasing break duration and disable during a focus or break session*/}
              <button
                disabled={session}
                onClick={() =>
                  breakDuration < 15 && setbreakDuration((breakDuration) => breakDuration + 1)
                }
                type="button"
                className="btn btn-secondary"
                data-testid="increase-break"
              >
                <span className="oi oi-plus" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Buttons
