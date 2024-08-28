// app/settings/layout.js
import Sidebar from "./Sidebar";

export default function SettingsLayout({ children }) {
  return (
    <div className="flex">
      <Sidebar />
      <main className="p-4 pl-8 pt-10 md:pl-20 w-1/2 flex-grow">
        {children}
      </main>
    </div>
  );
}
