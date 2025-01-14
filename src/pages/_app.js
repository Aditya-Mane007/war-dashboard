import "@/styles/globals.css";
import HomeLayout from "@/UI/Layout/HomeLayout";
import "bootstrap/dist/css/bootstrap.min.css";
import { useRouter } from "next/router";

export default function App({ Component, pageProps }) {
  const router = useRouter();

  if (router.pathname == "/sign-in") {
    return <Component {...pageProps} />;
  } else {
    return (
      <HomeLayout>
        <Component {...pageProps} />
      </HomeLayout>
    );
  }
}
