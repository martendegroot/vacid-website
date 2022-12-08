import * as React from "react";

type State = {
  subject?: "self" | "other";
  timeframe?: "recent" | "past";
};
type AdviceProviderProps = { children: React.ReactNode };

const AdviceContext = React.createContext<
  [State, React.Dispatch<React.SetStateAction<State>>] | undefined
>(undefined);

AdviceContext.displayName = "AdviceContext";

function AdviceProvider({ children }: AdviceProviderProps) {
  // NOTE: you *might* need to memoize this value
  // Learn more in http://kcd.im/optimize-context
  const value = React.useState<State>({});

  return (
    <AdviceContext.Provider value={value}>{children}</AdviceContext.Provider>
  );
}

function useAdvice() {
  const context = React.useContext(AdviceContext);
  if (context === undefined) {
    throw new Error("useCount must be used within a CountProvider");
  }
  return context;
}

export { AdviceProvider, useAdvice };
