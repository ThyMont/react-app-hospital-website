import { Carousel } from 'react-responsive-carousel';
import banner1 from '../img/banner1.png';
import banner2 from '../img/banner2.png';
import banner3 from '../img/banner3.png';
import banner4 from '../img/banner4.png';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import Section from '../components/Section';

export default function Home() {
  return (
    <div className="mx-0 bg-blue-100 flex-row items-center justify-center">
      <div className="xl:max-w-xl mx-auto">
        <Carousel
          autoPlay
          centerMode
          infiniteLoop
          swipeable
          centerSlidePercentage={100}
          renderThumbs={() => null}
        >
          <div>
            <img srcSet={banner1} alt="img1" width="100%" />
          </div>
          <div>
            <img srcSet={banner2} alt="img2" width="100%" />
          </div>
          <div>
            <img srcSet={banner3} alt="img3" width="100%" />
          </div>
          <div>
            <img srcSet={banner4} alt="img4" width="100%" />
          </div>
        </Carousel>
      </div>
      <Section>
        <h1 className="text-center text-blue-900 font-semibold text-md">
          Clinica Médica Senna Joy
        </h1>
        <hr />
        <p className=" text-center text-blue-900 font-light text-sm">
          At vero eos et accusamus et iusto odio dignissimos ducimus qui
          blanditiis praesentium voluptatum deleniti atque corrupti quos dolores
          et quas molestias excepturi sint occaecati cupiditate non provident.
        </p>
      </Section>
      <Section backgroundColor="bg-indigo-700"></Section>
    </div>
  );
}
