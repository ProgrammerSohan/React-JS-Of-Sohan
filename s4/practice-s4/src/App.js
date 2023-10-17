
import ExpenseItem from "./components/ExpenseItem";
import PracticeComp1 from "./components/PracticeComp1";
import PracticeComp2 from "./components/PracticeComp2";
import PracticeComp3 from "./components/PracticeComp3";
import ComplexJsx from "./components/ComplexJsx";

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
    </div>
  );
}

export default App;
