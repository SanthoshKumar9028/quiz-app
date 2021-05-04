import "./404.scss";

function PageNotFound() {
  return (
    <main className="page-not-found">
      <div className="page-not-found__content">
        <h1 className="page-not-found__404">404</h1>
        <h2 className="page-not-found__title">OOPS! PAGE NOT FOUND</h2>
        <p className="page-not-found__desc">
          Sorry, the page you're looking for doesn't exists.
        </p>
      </div>
    </main>
  );
}

export default PageNotFound;
