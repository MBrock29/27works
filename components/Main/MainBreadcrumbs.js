import Link from "next/link";
import React from "react";

export const MainBreadcrumbs = () => {
  return (
    <div className="flex text-yellow gap-1 opacity-70 mb-3 text-sm">
      <Link href="/">Home</Link>
      <p>/</p>
      <Link href="/">Latest News</Link>
    </div>
  );
};
