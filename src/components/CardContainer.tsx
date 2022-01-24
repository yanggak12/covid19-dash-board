import NumCard from './NumCard';

interface Props {
  data: string;
}

const CardContainer: React.FC<Props> = ({ data }) => {
  return (
    <>
      <div className="container">
        <NumCard title="CASES" today={10} total={100} />
        <NumCard title="DEATHS" today={10} total={100} />
        <NumCard title="RECOVERED" today={10} total={100} />
      </div>
      <style jsx>{`
        .container {
          display: flex;
          flex-direction: row;
          justify-content: space-between;
        }
        @media (max-width: 950px) {
        }
      `}</style>
    </>
  );
};

export default CardContainer;
