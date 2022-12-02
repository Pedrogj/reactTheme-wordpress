import { Header } from "../src/components/header";
import { Footer } from "../src/components/footer";

export default function Home() {
  return (
    <div>
      <Header />
      <main>
        <h1>
          Welcome to <a href="https://nextjs.org">Next.js!</a>
        </h1>

        <p className="text-blue-400">Hello</p>
      </main>

      <Footer />
    </div>
  );
}
