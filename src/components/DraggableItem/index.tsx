import React from "react";
import Draggable, { DraggableCore } from "react-draggable"; // Both at the same time
import "./styles.scss";

const DraggableItem = ({ children }: { children: React.ReactNode }) => {
  const nodeRef = React.useRef(null);

  return (
    <Draggable
      nodeRef={nodeRef}
      axis="both"
      defaultPosition={{ x: 0, y: 0 }}
      grid={[1, 1]}
      scale={1}
      allowAnyClick={true}
    >
      <div className="w-fit custom_draggable" ref={nodeRef}>
        {children}
      </div>
    </Draggable>
  );
};

export default DraggableItem;
