import {
  createTransaction as createTransactionLocal,
  deleteTransaction as deleteTransactionLocal,
  getTransactions,
} from '@/lib/helpers';
import { Transaction } from '@/lib/types';
import { create } from 'zustand';

interface Store {
  transactions: Transaction[];
  createTransaction: (transaction: Partial<Transaction>) => void;
  deleteTransaction: (transactionId: string) => void;
  initializeTransactions: () => void;
}

const useTransactionStore = create<Store>()((set) => ({
  transactions: [],
  createTransaction: async (transaction: Partial<Transaction>) => {
    const newTransaction = await createTransactionLocal(transaction);
    set((state) => ({
      transactions: [...state.transactions, newTransaction],
    }));
  },
  deleteTransaction: async (transactionId: string) => {
    await deleteTransactionLocal(transactionId);
    set((state) => ({
      transactions: state.transactions.filter(
        (transaction) => transaction.id !== transactionId
      ),
    }));
  },
  initializeTransactions: async () => {
    const transactions = await getTransactions();
    set({ transactions });
  },
}));

useTransactionStore.getState().initializeTransactions();
export default useTransactionStore;
