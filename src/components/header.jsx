import { Button } from "./button";

export function Header() {
  return (
    <header className="flex items-center justify-between h-14 px-6 lg:px-16 bg-white">
      <div className="flex items-center gap-4">
        <h3 className="text-2xl font-display text-[#005439]">NextGen</h3>
        <div className="space-x-3.5 [&>a]:text-green-700 [&>a]:text-sm lg:block hidden">
          <a href="#">Personal</a>
          <a href="#">Buisness</a>
        </div>
      </div>

      <div className="hidden lg:flex [&>a]:text-sm items-center gap-3.5">
        <a href="#">Features</a>
        <a href="#">Credit Cards</a>
        <a href="#">Check & Savings</a>
        <a href="#">Benifits & Tools</a>

      
        <div className="flex items-center gap-2 pl-3">
          <Button variant={'secondary'}>Log in</Button>
          <Button>Get Started</Button>
        </div>
      </div>
      <span className="lg:hidden">Menu</span>
    </header>
  );
}
