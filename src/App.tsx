import { useState } from "react";
import DraggableItem from "./components/DraggableItem";
import EditableText from "./components/EditableText";
import Navbar from "./layout/Navbar";

enum COLOR {
  WHITE = "white",
  BLACK = "black",
  GREEN = "green",
  YELLOW = "yellow",
}

interface ArrayType {
  type: string;
  value: string;
}

function App() {
  const [array, setArray] = useState<ArrayType[]>([]);
  const [background, setBackground] = useState<COLOR>(COLOR.WHITE);

  const handleAddText = () => {
    setArray((prev) => [
      ...prev,
      {
        type: "text",
        value: "",
      },
    ]);
  };

  const handleAddImage = () => {
    setArray((prev) => [
      ...prev,
      {
        type: "image",
        value:
          "https://images.rawpixel.com/image_800/czNmcy1wcml2YXRlL3Jhd3BpeGVsX2ltYWdlcy93ZWJzaXRlX2NvbnRlbnQvbHIvdjU0NmJhdGNoMy1teW50LTM0LWJhZGdld2F0ZXJjb2xvcl8xLmpwZw.jpg",
      },
    ]);
  };

  const handleChangeBackground = () => {
    setBackground(COLOR.YELLOW);
  };

  return (
    <div className="flex h-screen max-w-screen max-h-screen">
      <div className="w-[30%]">
        <Navbar />
      </div>
      <div className="flex-1 bg-yellow-100 flex items-center justify-center">
        <div
          className="w-1/2 h-1/2 rounded-3xl overflow-hidden"
          style={{ background: background }}
        >
          {array.map((item: ArrayType, index: number) => (
            <DraggableItem key={index}>
              {item.type === "text" ? (
                <EditableText />
              ) : (
                <img
                  className="max-w-[200px] max-h-[200px]"
                  alt=""
                  src={item.value}
                />
              )}
            </DraggableItem>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
