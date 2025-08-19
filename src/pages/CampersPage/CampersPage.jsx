import Container from '../../components/Container/Container';
import css from './CampersPage.module.css';
import SideBar from '../../components/SideBar/SideBar';
import Catalog from '../../components/Catalog/Catalog';

const CampersPage = () => {
  return (
    <>
      <Container>
        <div className={css.wrapper}>
          <SideBar />
          <Catalog />
        </div>
      </Container>
    </>
  );
};

export default CampersPage;
