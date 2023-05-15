import styles from "./index.module.css";
import { type NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import { useState } from "react";
import ExpenseFilter from "~/components/ExpenseFilter";
import ExpenseForm from "~/components/ExpenseForm";
import ExpenseList from "~/components/ExpenseList";

import { api } from "~/utils/api";

export const categories = [
  { id: 1, name: "Utilities" },
  { id: 2, name: "Entertainment" },
  { id: 3, name: "Groceries" },
  { id: 4, name: "Others.." },
];

const Home: NextPage = () => {
  const hello = api.example.hello.useQuery({ text: "from tRPC" });

  const [expenses, setExpenses] = useState([
    { id: 1, description: "aaa", amount: 1, category: { id: 1, name: "util" } },
    {
      id: 3,
      description: "baa",
      amount: 1,
      category: { id: 2, name: "Entertainment" },
    },
    { id: 2, description: "caa", amount: 1, category: { id: 3, name: "food" } },
    { id: 4, description: "daa", amount: 1, category: { id: 1, name: "util" } },
  ]);

  const [selectedCategory, setSelectedCategory] = useState(0);

  return (
    <>
      <Head>
        <title>Paisa Tracker</title>
        <meta name="description" content="Created by Shrikant Kalar" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <div className="mb-5">
          <ExpenseForm />
        </div>
        <ExpenseFilter
          onSelectCategory={(categoryId) => setSelectedCategory(categoryId)}
        />
        <ExpenseList
          expenses={
            selectedCategory
              ? expenses.filter((e) => e.category.id === selectedCategory)
              : expenses
          }
          onDelete={(id) => setExpenses(expenses.filter((e) => e.id !== id))}
        />
      </main>
    </>
  );
};

export default Home;
