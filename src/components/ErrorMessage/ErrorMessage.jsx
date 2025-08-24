import css from "./ErrorMessage.module.css"
import { Link } from 'react-router-dom';
import Container from '../../components/Container/Container';



const ErrorMessage = () => {

  return (
    <>
       <Container>
      <div className={css.wrapper}>
      <div>
        <h3 className={css.subTitle}>Nothing found </h3>
        <p className={css.text}>Nothing found for the selected filters, try use another options. Befor press button - "Reset"</p>
        </div>
        
      </div>
      </Container>
    </>
  );
};

export default ErrorMessage;
