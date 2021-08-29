import React from "react";
import { MetaTags } from "../src/seo/MetaTags";
import { SomeComponent } from "../src/SomeComponent";

const Index = () => {
  return (
    <div>
      <MetaTags title="Startseite" />
      <p className="text-blue-800 font-semibold bg-gray-300 p-6">Hello Next.js</p>
      <SomeComponent />
    </div>
  );
};

export default Index;
