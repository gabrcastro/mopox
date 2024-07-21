import FooterComponent from "./footer/footer";
import { HeaderComponent } from "./header/header";

export default function LayoutDefault({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="relative flex flex-col w-full items-center h-screen overflow-x-hidden overflow-y-auto">
      <HeaderComponent />
      {children}
      <FooterComponent />
    </div>
  );
}
