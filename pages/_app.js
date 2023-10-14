import Layout from "../components/Layout";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

export default function MyApp({ Component, pageProps }) {
  const queryClient = new QueryClient();
  return (
    <Layout>
      <QueryClientProvider client={queryClient}>
        <Component {...pageProps} />
      </QueryClientProvider>
      <style jsx global>{`
        @import url("https://fonts.googleapis.com/css2?family=Gloria+Hallelujah&display=swap");
        * {
          font-family: "Gloria Hallelujah", cursive;
          box-sizing: border-box;
          margin: 0;
          padding: 0;
        }
        a {
          color: #19231a;
          text-decoration: none;
        }
        ul {
          list-style: none;
        }
      `}</style>
    </Layout>
  );
}
