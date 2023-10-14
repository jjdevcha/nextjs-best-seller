export default function About() {
  return (
    <div className="container">
      <h1>ABOUT US</h1>
      <p>
        Welcome to the official explorer for The New York Times Best Seller list
        explorer.
      </p>
      <p>We hope you enjoy your exploring! :)</p>
      <style jsx>{`
        .container {
          width: 80vw;
          height: 100vh;
          margin: 0 auto;
          box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
          background-image: url("https://images.unsplash.com/photo-1586075010923-2dd4570fb338?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1287&q=80");
          background-size: cover;
          padding: 30px;
        }
        p {
          font-size: 20px;
        }
      `}</style>
    </div>
  );
}
