import Container from '../../components/Container/Container';
import css from './CampersPage.module.css';
import SideBar from '../../components/SideBar/SideBar';
import Catalog from '../../components/Catalog/Catalog';
import Loader from '../../components/Loader/Loader';
import LoadMore from '../../components/LoadMore/LoadMore';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAllCampers } from '../../redux/operations';

import {
  selectAllCampers,
  selectLoading,
  selectError,
  selectPage,
  selectPages,
  selectTotal,
  selectFilter,
} from '../../redux/selectors';

const CampersPage = () => {
  const dispatch = useDispatch();
  const campers = useSelector(selectAllCampers);
  const loading = useSelector(selectLoading);
  const error = useSelector(selectError);
  const filters = useSelector(selectFilter);
    const page = useSelector(selectPage);
  const pages = useSelector(selectPages);

 const handleFilterChange = newFilters => {
  // Відправляємо на бекенд лише активні фільтри
  const activeFilters = Object.fromEntries(
    Object.entries(newFilters).filter(([key, value]) => value && key !== 'location')
  );

  dispatch(fetchAllCampers({ page: 1, limit: 4, filters: { ...activeFilters, location: newFilters.location } }));
};

  const handleLoadMore = () => {
    dispatch(fetchAllCampers({ page: page + 1, limit: 4, filters }));
  };

  useEffect(() => {
    dispatch(fetchAllCampers({ page: 1, limit: 4, filters }));
  }, [dispatch, filters]);


  if (!campers) return null;
  if (error) return <p>Error: {error}</p>;

  console.log('Campers:', campers);

  return (
    <section>
      <Loader loading={loading} />
      <Container>
        <div className={css.wrapper}>
          <div className={css.compersPage}>
            <SideBar onFilterChange={handleFilterChange} />
            <Catalog campers={campers} />
          </div>
<div className={css.loadMore}>
           {page < pages && (
        <LoadMore page={page} pages={pages} onLoadMore={handleLoadMore} />
      )}
          </div>
        </div>
      </Container>
    </section>
  );
};

export default CampersPage;
