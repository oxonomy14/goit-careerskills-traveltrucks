import CamperCard from '../CamperCard/CamperCard';
import Grid from '../Grid/Grid';
import GridItem from '../GridItem/GridItem';

const Catalog = ({ campers }) => {

  if (campers.length === 0) {
    return <p>Nothing found for the selected filters</p>;
  }

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
