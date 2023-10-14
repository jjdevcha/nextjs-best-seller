import Link from "next/link";
// import { useQuery } from "@tanstack/react-query";
import { useRouter } from "next/router";
import * as noiseImgUrl from "../image/noise_image.jpg";

export default function IndexPage({ results }) {
  const router = useRouter();
  // react query 사용하려고 했으나 getServerSideProps 사용해서 SSR하고 싶어서 쓰지 않음
  // const { data: bookCategory } = useQuery({
  //   queryKey: ["book-category"],
  //   queryFn: getCategory,
  // });
  const onClick = (id) => {
    router.push(`/list/${id}`);
  };

  return (
    <div className="container">
      <h1>THE NEW YORK TIMES BEST SELLER EXPLORER</h1>
      <div className="category-list">
        {results?.map((category) => (
          <div
            className="category"
            key={category.list_name_encoded}
            onClick={() => onClick(category.list_name_encoded)}
          >
            {category.list_name_encoded ? (
              <Link href={`/list/${category.list_name_encoded}`} legacyBehavior>
                <a>{category.list_name}</a>
              </Link>
            ) : (
              <span>{category.list_name}</span>
            )}
          </div>
        ))}
      </div>
      <style jsx>{`
        .container {
          width: 80vw;
          margin: 0 auto;
          box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
          background-image: url("https://images.unsplash.com/photo-1586075010923-2dd4570fb338?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1287&q=80");
          background-size: cover;
          padding: 30px;
        }

        h1 {
          margin: 50px;
        }

        .category-list {
          display: flex;
          flex-wrap: wrap;
          gap: 30px;
        }

        .category {
          font-weight: bold;
          padding: 10px;
          border: solid 2px;
          box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
          border-top-left-radius: 37px 140px;
          border-top-right-radius: 23px 130px;
          border-bottom-left-radius: 110px 19px;
          border-bottom-right-radius: 120px 24px;
          transition: ease-in-out 0.2s;
          cursor: pointer;
          position: relative;
        }

        .category:hover {
          background: #cc3f0c;
          box-shadow: rgba(0, 0, 0, 0.8) 0px 3px 8px;
          top: 3px;
        }

        a {
        }
      `}</style>
    </div>
  );
}

export async function getServerSideProps() {
  const { results } = await (
    await fetch(`https://books-api.nomadcoders.workers.dev/lists`)
  ).json();
  return {
    props: {
      results,
    },
  };
}
