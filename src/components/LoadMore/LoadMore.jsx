import css from './LoadMore.module.css';

const LoadMore = ({ page, pages, onLoadMore }) => {
  return (
    <div className={css.LoadMore}>
      <button
        className={css.btnLoadMore}
        type="button"
        onClick={onLoadMore}
        disabled={page >= pages}
      >
        <span>Load More</span>
      </button>
    </div>
  );
};

export default LoadMore;
