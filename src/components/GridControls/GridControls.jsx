import s from './GridControls.module.scss'

function GridControls(props) {
  return (
    <>
    <div className={s.GridControls}>
      <div className={s.AxisX}>
        <input className={s.input} placeholder='X axis' value={props.xAxis} onChange={(e) => {
          !isNaN(e.target.value) ? props.setXAxis(e.target.value) : ''
        }}/>
      </div>
      <div className={s.AxisY}>
        <input className={s.input} placeholder='Y axis' value={props.yAxis} onChange={(e) => {
          !isNaN(e.target.value) ? props.setYAxis(e.target.value) : ''
        }}/>
      </div>
    </div>
    </>
  );
}

export default GridControls;