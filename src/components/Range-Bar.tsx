import * as React from "react";
import { Range, getTrackBackground } from "../index";

const STEP = 1;
const MIN = 0;
const MAX = 500;

const LabeledTwoThumbs: React.FC<{
  rtl: boolean;
  values: [number, number];
  setValues: Function;
}> = ({ rtl, values, setValues }) => {
  return (
    <div
      style={{
        width: "100%",
        position: "relative",
        top: "55px",
      }}
    >
      <Range
        values={values}
        step={STEP}
        min={MIN}
        max={MAX}
        rtl={rtl}
        onChange={(values) => setValues(values)}
        renderThumb={({ index, props, isDragged }) => (
          <div
            {...props}
            key={props.key}
            style={{
              ...props.style,
              position: "absolute",
              top: "0px",
              height: "20px",
              width: "20px",
              borderRadius: "50%",
              backgroundColor: "#2EB0BA",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              boxShadow: "0px 2px 6px #AAA",
            }}
          >
            <div
              style={{
                position: "absolute",
                height: "25px",
                width: "40px",
                top: "-28px",
                color: "#fff",
                textAlign: "center",
                fontWeight: "bold",
                fontSize: "12px",
                fontFamily: "Arial,Helvetica Neue,Helvetica,sans-serif",
                padding: "4px",
                borderRadius: "4px",
                backgroundColor: "#2EB0BA",
              }}
            >
              {values[index]} €
            </div>
          </div>
        )}
        renderTrack={({ props, children }) => (
          <div
            onMouseDown={props.onMouseDown}
            onTouchStart={props.onTouchStart}
            style={{
              ...props.style,
              height: "36px",
              display: "flex",
              width: "100%",
            }}
          >
            <div
              ref={props.ref}
              style={{
                height: "5px",
                width: "100%",
                borderRadius: "4px",
                background: getTrackBackground({
                  values,
                  colors: ["#ccc", "#2EB0BA", "#ccc"],
                  min: MIN,
                  max: MAX,
                  rtl,
                }),
                alignSelf: "center",
              }}
            >
              {children}
            </div>
          </div>
        )}
      />
    </div>
  );
};

export default LabeledTwoThumbs;
