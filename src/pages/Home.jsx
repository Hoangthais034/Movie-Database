import SlideShow from '../components/SlideShow';
import TabsSlider from '../components/TabsSlider';

export default function Home() {
  return (
    <div className="home">
      <div className='section section-slideshow page-width'>
        <SlideShow dataType="movies" dataObject="trending" dataInterval="week" totalItems="5" />
      </div>
      <div className='section section-tabslider page-width'>
        <TabsSlider title="In Theater" dataType="movies" dataObject="trending" dataInterval="week" totalItems="10" />
      </div>
      <div className='section section-tabslider page-width'>
        <TabsSlider title="TV Shows" dataType="tv" dataObject="best,trending" dataInterval="week" totalItems="10" />
      </div>
      <div className='section section-tabslider page-width'>
        <TabsSlider title="Anime" dataType="anime" dataObject="best,trending" dataInterval="week" totalItems="10" />
      </div>
    </div>
  );
}