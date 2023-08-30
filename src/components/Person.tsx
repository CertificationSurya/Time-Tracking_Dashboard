import { jeremy } from "../assets";

interface PersonProps{
  active: string,
  setActive: React.Dispatch<React.SetStateAction<string>>;
}

const Person: React.FC<PersonProps> = ({active, setActive}) => {
  const list = ["Daily", "Weekly", "Monthly"];

  return (
    <>
      <div className="top-card bg-blue pl-4 pt-3">
        <div className="flex-wrapper card-wrapper">
            <img src={jeremy} alt="Photo of Jeremy" className="jeremy-photo mt-2" />
          <div className="mb-4">
            <span>
              Report for <br />
            </span>
            <span className="fs-xl fw-reg">Jeremy Robson</span>
          </div>
        </div>
      </div>

      <div className="bottom-card bg-blue-20 pbl-1 p-4">
        <ul style={{ listStyle: "none" }}>
          {list.map((item, index) => (
            <li
              onClick={() => setActive(item.toLowerCase())}
              className={`${
                active === item.toLowerCase() ? "active" : "inactive"
              } mt-2 `}
              key={index}
            >
              {item}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Person;
