import MapSection from '@/component/home/MapSection';
import { Fragment, useEffect } from 'react';
import { Store } from '@/types/store';
import useStores from '@/hooks/useStore';
import { NextPage } from 'next';
import Header from '@/component/home/Header';
import DetailSection from '@/component/home/DetailSection';

interface Props {
  stores: Store[];
}

const Home: NextPage<Props> = ({ stores }) => {
  const { initializeStores } = useStores();

  useEffect(() => {
    initializeStores(stores);
  }, [initializeStores, stores]);

  return (
    <>
      <Fragment>
        <Header />
        <main style={{ position: 'relative', width: '100%', height: '100%' }}>
          <MapSection />
          <DetailSection />
        </main>
      </Fragment>
    </>
  );
};

export default Home;

export async function getStaticProps() {
  const stores = (await import('../public/stores.json')).default;
  return {
    props: { stores },
    revalidate: 60 * 60,
  };
}
