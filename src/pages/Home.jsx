import SlideShow from '../components/SlideShow';
import TabsSlider from '../components/TabsSlider';

export default function Home() {
  return (
    <div className="home">
      <div className='section section-slideshow page-width'>
        <SlideShow />
      </div>
      <div className='section section-tabslider page-width'>
        <TabsSlider title="In Theater" />
      </div>
      <div className='section section-tabslider page-width'>
        <TabsSlider title="Latest Movies" />
      </div>

    </div>
  );
} 