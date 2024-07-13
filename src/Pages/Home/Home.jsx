import Hero from './Hero/Hero';
import WhyChoose from './WhyChooseUs/WhyChoose';

const Home = () => {
    return (
        <div className='overflow-x-hidden' >
          <Hero/>
          <WhyChoose/>
        </div>
    );
};

export default Home;