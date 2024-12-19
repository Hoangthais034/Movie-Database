import SlideShow from './SlideShow/SlideShow';
import TabsSlider from '../../components/TabsSlider';
import SlideTrailer from './SlideTrailer';

export default function Home() {
  return (
    <div className="home">
      <div className='section section-slideshow page-width'>
        <SlideShow dataType="movies" dataObject="trending" dataInterval="month" totalItems="5" />
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
      <div className='section page-width'>
        <SlideTrailer title="In Theater" dataType="movies" dataObject="all" dataInterval="month" totalItems="5" />
      </div>
    </div>
  );
}