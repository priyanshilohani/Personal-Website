import ResearchList from "../../components/ResearchList";

export default function ResearchPage() {
  return (
    <main>
      <h1 style={{ textAlign: "center", fontSize: "2.5rem", marginBottom: "2rem" }}>
        My Research Papers
      </h1>
      <ResearchList />
    </main>
  );
}
