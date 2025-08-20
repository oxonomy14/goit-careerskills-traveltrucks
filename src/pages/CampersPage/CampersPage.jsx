import Container from '../../components/Container/Container';
import css from './CampersPage.module.css';
import SideBar from '../../components/SideBar/SideBar';
import Catalog from '../../components/Catalog/Catalog';
import Loader from '../../components/Loader/Loader';
import LoadMore from '../../components/LoadMore/LoadMore';
import { useEffect, useState, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAllCampers } from '../../redux/operations';
import { setFilter } from '../../redux/filterSlice';
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
  const filterValue = useSelector(selectFilter);

  const handleFilterChange = value => {
    dispatch(setFilter(value)); // обновляем фильтр в отдельном reducer
    dispatch(fetchAllCampers({ page: 1, limit: 4, filter: value })); // перезагружаем кемперы
  };

  useEffect(() => {
    dispatch(fetchAllCampers({ page: 1, limit: 4, filter: filterValue }));
  }, [dispatch, filterValue]);

  if (!campers) return <Loader />;
  if (error) return <p>Error: {error}</p>;

  console.log('Campers:', campers);

  return (
    <section>
      <Container>
        <div className={css.wrapper}>
          <div className={css.compersPage}>
            <SideBar onFilterChange={handleFilterChange} />
            <Catalog campers={campers} />
          </div>
<div className={css.loadMore}>
          <LoadMore />
          </div>
        </div>
      </Container>
    </section>
  );
};

export default CampersPage;
