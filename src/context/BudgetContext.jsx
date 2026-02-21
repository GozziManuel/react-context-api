import { createContext, useContext, useState } from "react";

const BudgetContext = createContext();

function BudgetProvider({ children }) {
  const [CheckValue, setCheckValue] = useState({
    public: false,
  });
  console.log(CheckValue);

  const FormCheck = (e) => {
    const { name, checked } = e.target;
    setCheckValue({ ...CheckValue, [name]: checked });
  };
  const ContextValue = { FormCheck, CheckValue, setCheckValue };
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
