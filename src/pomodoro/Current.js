import React from "react";
import ProgressBar from "./ProgressBar";

const Current = ({ session, focusDuration, breakDuration }) => {
  if (!session) {
    return null;
  }
  return (
      <>
        <div className="row mb-2">
          <div className="col">
            {/* TODO: Update message below to include current session (Focusing or On Break) total duration */}
            <h2 data-testid="session-title">
              {session.label === "Focusing"
                ? `${session.label} for ${new Date(focusDuration * 60 * 1000)
                    .toISOString()
                    .substr(14, 5)} minutes`
                : `${session.label} for ${new Date(breakDuration * 60 * 1000)
                    .toISOString()
                    .substr(14, 5)} minutes`}
            </h2>
            {/* TODO: Update message below correctly format the time remaining in the current session */}
            <p className="lead" data-testid="session-sub-title">
              {session
                ? new Date(session.timeRemaining * 1000)
                    .toISOString()
                    .substr(14, 5) + " remaining"
                : ""}
            </p>
          </div>
        </div>
        <div className="row mb-2">
          <ProgressBar
            session={session}
            breakDuration={breakDuration}
            focusDuration={focusDuration}
          />
        </div>
      </>
    );
};
export default Current;
