import CatalogCard from '../CatalogCard/CatalogCard';
import Grid from '../Grid/Grid';
import GridItem from '../GridItem/GridItem';

const Catalog = ({ campers }) => {
  return (
    <>
      <Grid>
        {campers.map(item => (
          <GridItem key={item.id}>
            <CatalogCard item={item} />
          </GridItem>
        ))}
      </Grid>
    </>
  );
};

export default Catalog;
