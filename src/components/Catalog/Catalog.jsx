import CamperCard from '../CamperCard/CamperCard';
import Grid from '../Grid/Grid';
import GridItem from '../GridItem/GridItem';

const Catalog = ({ campers }) => {
  return (
    <>
      <Grid>
        {campers.map(item => (
          <GridItem key={item.id}>
            <CamperCard item={item} />
          </GridItem>
        ))}
      </Grid>
    </>
  );
};

export default Catalog;
