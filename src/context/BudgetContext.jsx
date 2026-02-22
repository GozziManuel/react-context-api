import { createContext, useContext, useState } from "react";

const BudgetContext = createContext();

function BudgetProvider({ children }) {
  // const [BudgetMode, setBudgetMode] = useState([1, 23, 4, 1, 3]);

  const [CheckValue, setCheckValue] = useState({
    public: false,
  });
  console.log(CheckValue);

  const FormCheck = (e) => {
    const { name, checked } = e.target;
    setCheckValue({ ...CheckValue, [name]: checked });
  };

  // Export List
  const ContextValue = {
    FormCheck,
    CheckValue,
    setCheckValue,
  };

  return (
    <BudgetContext.Provider value={ContextValue}>
      {children}
    </BudgetContext.Provider>
  );
}
function UseBudget() {
  return useContext(BudgetContext);
}

export { UseBudget, BudgetProvider };
