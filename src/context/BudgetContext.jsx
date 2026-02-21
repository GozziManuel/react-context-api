import { createContext, useContext } from "react";

const BudgetContext = createContext();

function BudgetProvider({ children }) {
  const ContextValue = {};
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
