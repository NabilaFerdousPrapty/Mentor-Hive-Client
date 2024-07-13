import { Button } from "@/components/ui/button";

const Navbar = () => {
  const links = [
    {
      label: "Home",
      path: "/",
    },
    {
      label: "All Tutors",
      path: "/all-tutors",
    },
    {
      label: "Posted Tuitions",
      path: "/posted-tuitions",
    },
    {
      label: "Dashboard",
      path: "/dashboard",
    },
    {
      label: "About Us",
      path: "/about-us",
    },
  ];

  return (
    <nav className="container mx-auto flex justify-between items-center mt-10">
      <div>
        <h1 className="text-4xl font-bold">Mentor Hive</h1>
      </div>
      <div className="flex gap-16 items-center">
        <div className="flex gap-8">
          <p>Home </p>
          <p>All Tutors </p>
          <p>Posted Tuitions </p>
          <p>Dashboard </p>
          <p>About Us </p>
        </div>
        <Button>Login</Button>
      </div>
    </nav>
  );
};

export default Navbar;
