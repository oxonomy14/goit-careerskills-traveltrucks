import CatalogCard from '../CatalogCard/CatalogCard';
import Grid from '../Grid/Grid';
import GridItem from '../GridItem/GridItem';

const Catalog = () => {
  return (
    <Grid>
      <GridItem>
        <CatalogCard />
      </GridItem>
    </Grid>
  );
};

export default Catalog;
