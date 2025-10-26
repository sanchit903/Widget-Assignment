import './App.css'
import Profile from './Components/Widgets/Profile/Profile';
import Gallery from './Components/Widgets/Gallery/Gallery';
import DetachedLine from './Components/DetachedLine/DetachedLine';

function App() {
  const profileData = {
    aboutMe: "Hello! I'm Dave, your sales rep here from Salesforce. I've been working at this awesome company for 3 years now.\n\nI was born and raised in Albany, NY & have been living in Santa Carla for the past 10 years my wife Tiffany and my 4 year old twin daughters- Emma and Ella. Both of them are just starting school, so my calender is usually blocked between 9–10 AM. This is...",
    experiences: "Past experience details will go here. This tab will list previous roles and accomplishments.",
    recommended: "Recommended content or testimonials will go here. This tab is for external validation.",
  };


  return (
    <>
      {/* Global container */}
      <div className="min-h-screen bg-[#282c31] text-white flex items-center justify-center p-4 sm:p-8 md:p-12 font-sans overflow-auto custom-scroll">
        {/* Outer Shell of application */}
        <div className='w-full max-w-7xl flex justify-center'>
          {/* Left half (Empty as per instruction) */}
          <div className='hidden md:block w-1/2 p-4'>
            <div className='h-full border-4 border-dashed border-gray-700 rounded-xl flex items-center justify-center'>
              <p className='text-gray-100 text-xl'>
                Left Half (Empty)
              </p>
            </div>
          </div>
          <div className="w-full md:w-1/2 p-4 flex flex-col space-y-8">
            {/* Widget 1: Profile and Tabs */}
            <div>
              <Profile data={profileData} />
              <DetachedLine />
            </div>

            {/* Widget 2: Gallery */}
            {/* Note: In a real app, galleryImages would likely come from state or an API, 
             and we would implement pagination/scrolling logic. Here we just mock the data. */}
            <div>
              <Gallery />
              <DetachedLine />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
