import Hello from "@/app/components/hello"
const page = () => {
  return (
    <main>
      console.log("exaple log")
      <div className="text-blue-400 text-5xl">Welcome to next.js</div>;
      <Hello />
    </main>
  );
};

export default page;
