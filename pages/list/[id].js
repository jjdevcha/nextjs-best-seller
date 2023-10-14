import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Link from "next/link";
import * as noImageUrl from "../../image/no_image.png";

export default function Books() {
  const router = useRouter();
  const [books, setBooks] = useState();
  const [category, setCategory] = useState();
  useEffect(() => {
    (async () => {
      const { results } = await (
        await fetch(
          `https://books-api.nomadcoders.workers.dev/list?name=${router.query.id}`
        )
      ).json();
      setBooks(results.books);
      setCategory(results.list_name);
    })();
  }, []);

  return (
    <div className="container">
      {books && category ? (
        <>
          <h1>{category}</h1>
          <div className="books">
            {books.map((book) => (
              <div className="book" key={book.primary_isbn13}>
                {book.book_image ? (
                  <img src={book.book_image} />
                ) : (
                  <img src={noImageUrl} />
                )}
                <div className="book-detail">
                  <h3>{book.title}</h3>
                  <p className="book-author">{book.author}</p>
                  <div className="buy-button">
                    {book.amazon_product_url ? (
                      <Link href={book.amazon_product_url} legacyBehavior>
                        <a>Buy now →</a>
                      </Link>
                    ) : (
                      <span>No Amazon link available</span>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </>
      ) : (
        <p className="loading">Loading...</p>
      )}
      <style jsx>{`
        .loading {
          position: absolute;
          top: 50%;
          left: 50%;
          font-weight: bold;
          font-size: 30px;
          transform: translate(-50%, -50%);
        }
        .container {
          margin: 0 auto;
          width: 90vw;
          text-align: center;
        }
        h1 {
          margin: 40px;
        }
        .books {
          display: grid;
          grid-template-columns: repeat(4, 300px);
          gap: 50px;
          justify-items: center;
          justify-content: center;
        }
        .book {
          box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
          background-image: url("https://images.unsplash.com/photo-1586075010923-2dd4570fb338?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1287&q=80");
        }
        .book:nth-child(odd) {
          border-bottom-left-radius: 130px 10px;
          border-bottom-right-radius: 70px 20px;
        }
        .book:nth-child(even) {
          border-bottom-left-radius: 90px 30px;
          border-bottom-right-radius: 150px 10px;
        }

        .book img {
          width: 100%;
        }
        .book-detail {
          display: flex;
          flex-direction: column;
          align-items: start;
          padding: 15px;
        }
        .book-author {
          color: #cc3f0c;
          font-weight: bold;
        }
        .buy-button {
          border: solid 2px #19231a;
          border-top-left-radius: 37px 140px;
          border-top-right-radius: 23px 130px;
          border-bottom-left-radius: 110px 19px;
          border-bottom-right-radius: 120px 24px;
          padding: 5px 10px;
          margin-top: 10px;
          margin-bottom: 10px;
          transition: ease-in-out 0.2s;
          position: relative;
        }
        .buy-button:hover {
          top: 3px;
          background-color: #cc3f0c;
        }
      `}</style>
    </div>
  );
}

// export async function getServerSideProps() {
//     const { results } = await (
//         await fetch(`https://books-api.nomadcoders.workers.dev/list?name=hardcover-fiction`)
//     )
// }
