import CamperCard from '../CamperCard/CamperCard';
import Grid from '../Grid/Grid';
import GridItem from '../GridItem/GridItem';
import { toast } from 'react-hot-toast';
import { useEffect } from 'react';
import ErrorMessage from '../ErrorMessage/ErrorMessage';

const Catalog = ({ campers, location }) => {

  useEffect(() => {
    if (campers.length === 0) {
      toast.error('Nothing found for the selected filters');
    }
  }, [campers]);

  if (campers.length === 0) {
    return <ErrorMessage/>; 
  }

  return (
    <>
      <Grid>
        {campers.map(item => (
          <GridItem key={item.id}>
            <CamperCard item={item} location={location}/>
          </GridItem>
        ))}
      </Grid>
    </>
  );
};

export default Catalog;
