import ScrollAnimation from "react-animate-on-scroll";

const Title = ({ animateIn }) => {
  const text = (
    <>
      <h1 className="title-head">Better Animals Plus</h1>
      <p className="title-low">Breathing new life into your worlds</p>
    </>
  );
  return (
    <div className="title-box title-holder">
      {animateIn ? (
        <ScrollAnimation animateIn={animateIn} animateOnce>
          {text}
        </ScrollAnimation>
      ) : (
        text
      )}
    </div>
  );
};

export default Title;
