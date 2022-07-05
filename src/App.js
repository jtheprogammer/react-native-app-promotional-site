import './App.css';
import { Download, Features, SectionWrapper } from "./components"
import assets from "./assets"

const App = () => {
  return (
    <>
      <SectionWrapper
      title="Purchase NFTs. Start Selling & Growing."
      description="Buy, Store and Collect NFTs. Earn and Exchange Crypto. Join Now!"
      showBtn
      mockupImg={assets.homeHero}
      banner="banner"
      />
      <SectionWrapper
      title="Smart User Interface Marketplace"
      description="Experience the sleek UI design of this NFT Marketplace. Check out the vivid colors of this design"
      mockupImg={assets.homeCards}
      reverse
      />
      <Features />
      <SectionWrapper
      title="Deploy"
      description="This app is was built using Expo, which runs natively on all users' devices. Seeminglessly get your app into people's hands!"
      mockupImg={assets.feature}
      reverse
      />
      <SectionWrapper
      title="A creative way to showcase the store"
      description="This app contains 2 screens: one which lists all NFTs on display, while the other displays a page detailing a selected NFT."
      mockupImg={assets.mockup}
      banner="banner02"
      />
      <Download />
    </>
  );
}

export default App;
