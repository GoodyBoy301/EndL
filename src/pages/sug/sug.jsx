/* import "./styles.css"
import Header from "../../components/header/index";
import Sugs from "./sugs"

function Sug(){



  return <div className="politicians">
  <Header transparent={false} />
  <main className="wrap" >
  <div className="gridContainer">
          {Sugs.map((item) => (
            <Politician
              key={prependUniqueLettersToId(item.id)}
              name={item.name}
              state={item.state}
              email={item.email}
              phone={item.phoneNo}
            />
          ))}
        </div>
  </main>
  </div>
  
}

export default Sug */