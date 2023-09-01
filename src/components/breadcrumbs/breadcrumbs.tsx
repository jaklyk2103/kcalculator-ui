import { useRouter, usePathname } from "next/navigation";

export default function Breadcrumbs() {
  const path = usePathname();

  console.log(path);

  return <div>{path}</div>;
}
