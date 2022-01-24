interface Props {
  title: string;
  today: number;
  total: number;
}

const NumCard: React.FC<Props> = ({ title, today, total }) => {
  return (
    <div className="container">
      <h3 id="title">{title}</h3>
      <div id="count">
        {today} / {total}
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
        #title {
          margin: 10px 0 10px 10px;
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
            font-size: 0.5rem;
          }
          #count {
            font-size: 1rem;
            font-weight: 700;
            text-align: center;
          }
        }
        @media (max-width: 400px) {
          #title {
            font-size: 1px;
          }
          #count {
            font-size: 5px;
            font-weight: 700;
            text-align: center;
          }
        }
      `}</style>
    </div>
  );
};

export default NumCard;
