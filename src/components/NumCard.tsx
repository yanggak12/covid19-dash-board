import CountUp from 'react-countup';

interface Props {
  title: string;
  today: number;
  total: number;
}

const NumCard: React.FC<Props> = ({ title, today, total }) => {
  return (
    <div className="container">
      <div className="desc">
        <h3 id="title">{title}</h3>
        <span id="total">
          <CountUp end={total ? total : 0} duration={1} />
        </span>
      </div>

      <div id="count">
        <CountUp end={today ? today : 0} duration={1} />
      </div>

      <style jsx>{`
        .container {
          display: flex;
          justify-content: flex-start;
          width: 30%;
          height: 100px;
          border-radius: 1rem;
          background-color: #393939;
        }
        .desc {
          display: flex;
          align-items: center;
          justify-content: space-between;
          width: 90%;
        }

        #title {
          margin: 12px 0 10px 20px;
        }
        #count {
          font-size: 2rem;
          font-weight: 700;
          text-align: center;
        }
        @media (max-width: 700px) {
          .container {
            height: 70px;
          }
          #title {
            margin: 6px 0 8px 10px;
            font-size: 1rem;
          }
          #count {
            font-size: 1.5rem;
            font-weight: 700;
            text-align: center;
          }
          #total {
            display: none;
          }
        }
        @media (max-width: 400px) {
          #title {
            margin: 5px;
            font-size: 0.8rem;
          }
          #count {
            font-size: 1.2rem;
            font-weight: 700;
            text-align: center;
          }
        }
      `}</style>
    </div>
  );
};

export default NumCard;
