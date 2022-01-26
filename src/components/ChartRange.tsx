interface Props {
  lastDays: number;
  onPlusClick: () => void;
  onMinusClick: () => void;
}

const ChartRange: React.FC<Props> = ({ lastDays, onPlusClick, onMinusClick }) => {
  return (
    <div>
      <h3>확진 및 사망 추이</h3>
      <div className="chartDesc">
        <span className="chartRange">
          <button onClick={onMinusClick}>-</button>
          <h4>{lastDays - 1}</h4>
          <button onClick={onPlusClick}>+</button>
        </span>
      </div>
      <style jsx>{`
        .chartDesc {
          display: flex;
          flex-direction: column;
          justify-content: center;
        }
        .chartRange {
          display: flex;
          align-items: center;
        }
        button {
          background-color: #292929;
          width: 30px;
          height: 30px;
          border-radius: 30px;
          color: #fff;
          font-size: 20px;
          margin: 10px;
        }
      `}</style>
    </div>
  );
};

export default ChartRange;
