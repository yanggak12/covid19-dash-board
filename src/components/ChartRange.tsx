interface Props {
  lastDays: number;
  lastDaysHandler: (arg: number) => void;
}

const ChartRange: React.FC<Props> = ({ lastDays, lastDaysHandler }) => {
  const btnData = [
    { days: '1 Week', count: 8 },
    { days: '1 Month', count: 31 },
    { days: '3 Month', count: 91 },
    { days: '1 Year', count: 366 },
  ];
  return (
    <div>
      <h3>확진 및 사망 추이</h3>
      <div className="chartDesc">
        <span className="chartRange">
          {btnData.map((val, idx) => (
            <div
              style={{ color: val.count === lastDays ? '#11cdef' : '#fff' }}
              key={idx}
              className="btn"
              onClick={() => lastDaysHandler(val.count)}>
              {val.days}
            </div>
          ))}
        </span>
      </div>
      <style jsx>{`
        h3 {
          text-align: center;
        }
        .chartDesc {
          display: flex;
          flex-direction: column;
          justify-content: center;
        }
        .chartRange {
          display: flex;
          align-items: center;
        }
        .btn {
          background-color: #393939;
          padding: 20px;
          border-radius: 12px;
          margin: 10px;
          cursor: pointer;
          font-weight: 700;
          font-size: 1.2rem;
        }
        .btn:hover {
          transform: translateY(-2px);
        }
      `}</style>
    </div>
  );
};

export default ChartRange;
