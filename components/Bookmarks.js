import { useSelector } from "react-redux";
import Head from "next/head";
import styles from "../styles/Bookmarks.module.css";
import Article from "./Article";

function Bookmarks() {
  const bookmarks = useSelector((state) => state.bookmarks.value);
  const hiddenArticles = useSelector((state) => state.hiddenArticles.value);

  let articles = <p>No article</p>;
  if (bookmarks.length > 0) {
    articles = bookmarks.map((data, i) => {
      const isHidden = hiddenArticles.some((element) => element === data.title);
      return <Article key={i} {...data} isBookmarked isHidden={isHidden} />;
    });
  }

  return (
    <div>
      <Head>
        <title>Morning News - Bookmarks</title>
      </Head>
      <div className={styles.container}>
        <h2 className={styles.title}>Bookmarks</h2>
        <div className={styles.articlesContainer}>{articles}</div>
      </div>
    </div>
  );
}

export default Bookmarks;
