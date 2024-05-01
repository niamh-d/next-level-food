import MealsGrid from "@/components/meals/meals-grid";
import Link from "next/link";

export default function MealsPage() {
  return (
    <div>
      <header className={styles.header}>
        <h1>
          Delicious meals, created{" "}
          <span className={styles.highlight}>by you</span>
        </h1>
        <p>
          Choose your favouriterecipe and cook it yourself. It&apos;s easy and
          fun!
        </p>
        <p className={styles.cta}>
          <Link href="/meals/share">Share your favourite recipe</Link>
        </p>
      </header>
      <main className={styles.main}>
        <MealsGrid meals={[]} />
      </main>
    </div>
  );
}
