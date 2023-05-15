import styles from "./index.module.css";
import { type NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import { useState } from "react";
import ExpenseList from "~/components/ExpenseList";

import { api } from "~/utils/api";

const Home: NextPage = () => {
  const hello = api.example.hello.useQuery({ text: "from tRPC" });

  const [expenses, setExpenses] = useState([
    { id: 1, description: "aaa", amount: 1, category: "util" },
    { id: 2, description: "baa", amount: 1, category: "util" },
    { id: 3, description: "caa", amount: 1, category: "util" },
    { id: 4, description: "daa", amount: 1, category: "util" },
  ]);

  return (
    <>
      <Head>
        <title>Paisa Tracker</title>
        <meta name="description" content="Created by Shrikant Kalar" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <ExpenseList
          expenses={expenses}
          onDelete={(id) => setExpenses(expenses.filter((e) => e.id !== id))}
        />
      </main>
    </>
  );
};

export default Home;
