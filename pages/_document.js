import { Html, Head, Main, NextScript } from "next/document";
import TOC from "@/components/TOC";
export default function Document() {
  return (
    <Html lang="en" >
        
      <Head />
        <TOC/>
      <body class={"main"}>
        <Main/>
        <NextScript />
      </body>
    </Html>
  );
}
