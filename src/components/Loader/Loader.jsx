//import { ClipLoader } from 'react-spinners';
import { CircleLoader } from 'react-spinners';

import css from './Loader.module.css';

const Loader = () => {
  return (
    <div className={css.backdrop}>
      {/* <ClipLoader
        color="#e44848"
        loading
        size={60}
        aria-label="Loading Spinner"
        data-testid="loader"
      /> */}
      <CircleLoader
        color="#e44848"
        loading
        size={60}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
    </div>
  );
};

export default Loader;
