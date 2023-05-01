import React from "react";
import s from './GridField.module.scss'

function GridField(props) {
  const items = Array.from({ length: props.count }).map((_, index) => {
    return <div key={index} className={s.GridItem}></div> 
  })

  return (
    <>
      <div className={s.GridField} style={{
        gridTemplateColumns: `repeat(${props.xAxis}, 1fr)`,
        gridTemplateRows: `repeat(${props.yAxis}, 1fr)`
      }}>
        {items}
      </div>
    </>
  );
}

export default GridField;