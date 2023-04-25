import type { AppProps } from "next/app";
import { Button } from "ui";

export default function MyApp({ Component, pageProps }: AppProps) {
  return <>
    <Component {...pageProps} />
    <Button />
  </>;
}