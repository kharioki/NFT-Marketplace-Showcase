import { Download, Features, SectionWrapper } from "./components";
import assets from "./assets";
import styles from './styles/Global'

const App = () => {
  return (
    <>
      <SectionWrapper
        title="Your own store of Awesome NFTs. Start selling today!"
        description="Buy, Store, collect NFTs, exchange & earn crypto. Join 25+ million users on the world's largest NFT marketplace."
        showBtn
        mockupImg={assets.homeHero}
        banner="banner"
      />
      <SectionWrapper
        title="Smart User Interface Marketplace"
        description="Experience a buttery UI of an NFT Marketplace. Smooth constant colors of a fluent UI with a touch of modern design."
        mockupImg={assets.homeCards}
        reverse
      />
      <Features />
      <SectionWrapper
        title="Deployment"
        description="Built using Expo, this app is ready to be deployed to the App Store and Play Store. You can get it into your user's hands quickly."
        mockupImg={assets.feature}
        reverse
      />
      <SectionWrapper
        title="Creative way to showcase your store"
        description="The app contains two screens, one for the store and one for the NFT. You can easily customize the app to fit your needs."
        mockupImg={assets.mockup}
        banner="banner02"
      />
      <Download />

      <div className="px-4 py-2 justify-center items-center bg-primary text-center banner04">
        <p className={`${styles.whiteText} ${styles.pText}`}>
          Made with love by {' '}
          <span className="bold">Kharioki</span>
        </p>
      </div>
    </>
  );
}

export default App;
