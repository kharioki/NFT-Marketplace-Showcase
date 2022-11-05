import { Download, Features, SectionWrapper } from "./components";
import assets from "./assets";

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
    </>
  );
}

export default App;
