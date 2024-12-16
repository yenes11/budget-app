import {
  createBudget as createBudgetLocal,
  deleteBudget as deleteBudgetLocal,
  getBudgets,
} from '@/lib/helpers';
import { Budget } from '@/lib/types';
import { create } from 'zustand';

interface Store {
  budgets: Budget[];
  createBudget: (budget: Partial<Budget>) => void;
  deleteBudget: (budgetId: string) => void;
  initializeBudgets: () => void;
}

const useBudgetStore = create<Store>()((set) => ({
  budgets: [],
  createBudget: async (budget: Partial<Budget>) => {
    const newBudget = await createBudgetLocal(budget);
    set((state) => ({
      budgets: [...state.budgets, newBudget],
    }));
  },
  deleteBudget: async (budgetId: string) => {
    await deleteBudgetLocal(budgetId);
    set((state) => ({
      budgets: state.budgets.filter((budget) => budget.id !== budgetId),
    }));
  },
  initializeBudgets: async () => {
    const budgets = await getBudgets();
    set({ budgets });
  },
}));

useBudgetStore.getState().initializeBudgets();
export default useBudgetStore;
