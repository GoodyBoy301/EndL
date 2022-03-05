import Typewriter from "typewriter-effect";

const stoppables = [
  "7 O'clock Lectures",
  "8 O'clock Lectures",
  "17 O'Clock Lectures",
  "GS Lectures",
  "Non-Departmental Lectures",
  "Lectures!!",
  "L;",
];

function Type(props) {
  return (
    <Typewriter
      options={{
        strings: stoppables,
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
        wrapperClassName: "sars_tags"
      }}
    />
  );
}

export default Type;
