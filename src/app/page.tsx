import Languages from "./Components/Languages";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-around p-24 min-h">
      <div>
        <h1 className="text-6xl font-bold text-center">
          Languages I have used:
        </h1>
        <div className="flex flex-wrap justify-center">
          <Languages />
        </div>
      </div>
    </main>
  );
}
