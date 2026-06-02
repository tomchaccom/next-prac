import Practice01 from "../answers/practice_01/App";
import Practice02 from "../answers/practice_02/App";
import Practice03 from "../answers/practice_03/App";
import App from "../useState_practice/App";
import TimeLoopMission from "../useEffect_practice/App";

const answer = new URLSearchParams(window.location.search).get("answer");

export default function Root() {
  return (
    <>
      <nav className="mode-nav">
        <a href="/" className={!answer ? "active" : ""}>
          실습 1·2
        </a>
        <a href="?answer=p3" className={answer === "p3" ? "active" : ""}>
          실습 3
        </a>
        <a href="?answer=1" className={answer === "1" ? "active" : ""}>
          정답 1
        </a>
        <a href="?answer=2" className={answer === "2" ? "active" : ""}>
          정답 2
        </a>
        <a href="?answer=3" className={answer === "3" ? "active" : ""}>
          정답 3
        </a>
      </nav>
      {!answer && <App />}
      {answer === "p3" && <TimeLoopMission />}
      {answer === "1" && <Practice01 />}
      {answer === "2" && <Practice02 />}
      {answer === "3" && <Practice03 />}
    </>
  );
}
