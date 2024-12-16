import AsyncStorage from '@react-native-async-storage/async-storage';
import { Budget, Category, Transaction } from './types';
import { BUDGETS_KEY, CATEGORIES_KEY, TRANSACTIONS_KEY } from './constants';
import * as Crypto from 'expo-crypto';

export async function createTransaction(transaction: Partial<Transaction>) {
  const transactions = await getTransactions();
  const newTransaction = {
    id: Crypto.randomUUID(),
    ...transaction,
  };
  transactions.push(newTransaction as Transaction);
  AsyncStorage.setItem(TRANSACTIONS_KEY, JSON.stringify(transactions));
  return newTransaction as Transaction;
}

export async function getTransactions(): Promise<Transaction[]> {
  const transactions = await AsyncStorage.getItem(TRANSACTIONS_KEY);
  return transactions ? JSON.parse(transactions) : [];
}

export async function deleteTransaction(transactionId: string) {
  const transactions = await getTransactions();
  const updatedTransactions = transactions.filter(
    (transaction: Transaction) => transaction.id !== transactionId
  );
  await AsyncStorage.setItem(
    TRANSACTIONS_KEY,
    JSON.stringify(updatedTransactions)
  );
}

export async function createCategory(category: Partial<Category>) {
  const categories = await getCategories();
  const newCategory = {
    id: Crypto.randomUUID(),
    ...category,
  };
  categories.push(newCategory as Category);
  await AsyncStorage.setItem(CATEGORIES_KEY, JSON.stringify(categories));
  return newCategory as Category;
}

export async function deleteCategory(categoryId: string) {
  const categories = await getCategories();
  const updatedCategories = categories.filter(
    (category: Category) => category.id !== categoryId
  );
  await AsyncStorage.setItem(CATEGORIES_KEY, JSON.stringify(updatedCategories));
}

export async function getCategories() {
  const categories = await AsyncStorage.getItem(CATEGORIES_KEY);
  return categories ? JSON.parse(categories) : [];
}

export async function getBudgets() {
  const budgets = await AsyncStorage.getItem(BUDGETS_KEY);
  return budgets ? JSON.parse(budgets) : [];
}

export async function createBudget(budget: Partial<Budget>) {
  const budgets = await getBudgets();
  const newBudget = {
    id: Crypto.randomUUID(),
    ...budget,
  };
  budgets.push(newBudget as Budget);
  await AsyncStorage.setItem(BUDGETS_KEY, JSON.stringify(budgets));
  return newBudget as Budget;
}

export async function deleteBudget(budgetId: string) {
  const budgets = await getBudgets();
  const updatedBudgets = budgets.filter(
    (budget: Budget) => budget.id !== budgetId
  );
  await AsyncStorage.setItem(BUDGETS_KEY, JSON.stringify(updatedBudgets));
}
