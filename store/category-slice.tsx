import {
  createCategory as createCategoryLocal,
  deleteCategory as deleteCategoryLocal,
  getCategories,
} from '@/lib/helpers';
import { Category } from '@/lib/types';
import { create } from 'zustand';

interface Store {
  categories: Category[];
  createCategory: (category: Partial<Category>) => void;
  deleteCategory: (categoryId: string) => void;
  initializeCategories: () => void;
}

const useCategoryStore = create<Store>()((set) => ({
  categories: [],
  createCategory: async (category: Partial<Category>) => {
    const newCategory = await createCategoryLocal(category);
    set((state) => ({
      categories: [...state.categories, newCategory],
    }));
  },
  deleteCategory: async (categoryId: string) => {
    deleteCategoryLocal(categoryId);
    set((state) => ({
      categories: state.categories.filter(
        (category) => category.id !== categoryId
      ),
    }));
  },
  initializeCategories: async () => {
    const categories = await getCategories();
    set({ categories });
  },
}));

useCategoryStore.getState().initializeCategories();
export default useCategoryStore;
