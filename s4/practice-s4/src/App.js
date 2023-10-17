
import ExpenseItem from "./components/ExpenseItem";
import PracticeComp1 from "./components/PracticeComp1";
import PracticeComp2 from "./components/PracticeComp2";
import PracticeComp3 from "./components/PracticeComp3";
import ComplexJsx from "./components/ComplexJsx";
import ComplexJsx2 from "./components/ComplexJsx2";
import ComplexJsx3 from "./components/ComplexJsx3";

function App() {
  document.getElementById('root')
  return (
    <div>
      <h2>Let's get started!</h2>
      <p> This is Sohan & React Js </p>
      <ExpenseItem> </ExpenseItem>
      <PracticeComp1></PracticeComp1>
      <PracticeComp2></PracticeComp2>
      <PracticeComp3> </PracticeComp3>
      <ComplexJsx></ComplexJsx>
      <ComplexJsx2></ComplexJsx2>
      <ComplexJsx3></ComplexJsx3>
    </div>
  );
}

export default App;
