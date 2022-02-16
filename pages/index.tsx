import React from "react";
import { MetaTags } from "../src/seo/MetaTags";
import { SomeComponent } from "../src/SomeComponent";

const Index = () => {
  return (
    <div>
      <MetaTags title="Startseite" />
      <p className="bg-gray-300 p-6 font-semibold text-blue-800">Hello Next.js</p>
      <SomeComponent />
    </div>
  );
};

export default Index;
