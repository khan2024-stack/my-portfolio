import { basicLayout } from "@/lib/styles";

export default function BasicLayout({ children }) {
  return (
    <div className={basicLayout.main}>
      <div className={basicLayout.childrenWrapper}>
        {children}
      </div>
    </div>
  );
}