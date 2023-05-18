import { type NextPage } from "next";
import Head from "next/head";
// import Link from "next/link";
import { useState } from "react";
import ExpenseFilter from "~/components/ExpenseFilter";
import ExpenseForm from "~/components/ExpenseForm";
import ExpenseList from "~/components/ExpenseList";

// import { api } from "~/utils/api";

const Home: NextPage = () => {
  // const hello = api.example.hello.useQuery({ text: "from tRPC" });

  const [expenses, setExpenses] = useState([
    { id: 1, description: "dummy1", amount: 1, category: "Utilities" },
    { id: 2, description: "dummy2", amount: 1, category: "Food & Dining" },
    {
      id: 3,
      description: "dummy3",
      amount: 1,
      category: "Entertainment",
    },
    { id: 4, description: "dummy4", amount: 1, category: "Utilities" },
  ]);

  const [selectedCategory, setSelectedCategory] = useState("");

  return (
    <>
      <Head>
        <title>Paisa Tracker</title>
        <meta name="description" content="Created by Shrikant Kalar" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="container py-5 px-3">
        <h1 className="mb-4 text-center">Paisa-Tracker</h1>
        <div className="mb-5">
          <ExpenseForm
            onSubmit={(expense) =>
              setExpenses([
                { ...expense, id: expenses.length + 1 },
                ...expenses,
              ])
            }
          />
        </div>
        <ExpenseFilter
          onSelectCategory={(category) => setSelectedCategory(category)}
        />
        <ExpenseList
          expenses={
            selectedCategory
              ? expenses.filter((e) => e.category === selectedCategory)
              : expenses
          }
          onDelete={(id) => setExpenses(expenses.filter((e) => e.id !== id))}
        />
      </main>
    </>
  );
};

export default Home;
