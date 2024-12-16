import { IconNames } from './icon-types';

export interface Transaction {
  id: string;
  title: string;
  description?: string;
  date: string;
  amount: number;
  recurring: boolean;
  recurringInterval: 'daily' | 'weekly' | 'monthly' | 'yearly';
  categoryId: string;
  budgetId: string;
}

export interface Category {
  id: string;
  name: string;
  icon: IconNames;
  type: 'income' | 'expense';
  bgColor: string;
  iconColor: string;
}

export interface Budget {
  id: string;
  name: string;
  amount: number;
  startDate: string;
  endDate: string;
  notificationLimit: number;
}
