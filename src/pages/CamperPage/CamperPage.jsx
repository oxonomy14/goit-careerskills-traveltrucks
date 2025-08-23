import Container from '../../components/Container/Container';
import css from './CamperPage.module.css';
import { useParams, Outlet, NavLink } from "react-router-dom";
import { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import Loader from "../../components/Loader/Loader";
import { fetchByIdCamper } from "../../redux/operations";
import { selectCamper, selectCamperLoading, selectCamperError } from "../../redux/selectors";
import clsx from "clsx";
import CardDetails from '../../components/CardDetails/CardDetails';



const CamperPage = () => {

  const activeLink = ({ isActive }) => {
    return clsx(css.navLink, isActive && css.activeLink);
  };

    const { id } = useParams(); // беремо id з URL
    const dispatch = useDispatch();
    const camper = useSelector(selectCamper);
    const loading = useSelector(selectCamperLoading);
    const error = useSelector(selectCamperError);

    useEffect(() => {
        if (id) {
            dispatch(fetchByIdCamper(id));
        }
    }, [id, dispatch]);

    console.log("Camper:", camper);



    if (error) return <p>Error: {error}</p>;
    if (!camper) return null;

    return (
        <section>
            <Loader loading={loading} />
            <Container>
                <div className={css.wrapper}>
             <CardDetails camper={camper}/>
             <nav className={css.navBar}>
        <NavLink className={activeLink} to="features">Features</NavLink>
        <NavLink className={activeLink} to="reviews">Reviews</NavLink>
      </nav>

             <Outlet/>
                </div>
            </Container>
        </section>
    )
}

export default CamperPage;