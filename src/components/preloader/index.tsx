import { useCallback, useEffect, useState } from "react";
import CircleLink from "../circle-link";

const Preloader = ({ onLoadComplete }: { onLoadComplete: () => void }) => {

  const [progress, setProgress] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  const incrementProgress = useCallback(() => {
    setProgress(prevProgress => {
      if (prevProgress >= 100) {
        return 100;
      }
      return Math.min(prevProgress + 1, 100);
    });
  }, []);

  useEffect(() => {
    const timer = setInterval(incrementProgress, 20);

    return () => clearInterval(timer);
  }, [incrementProgress]);

  useEffect(() => {
    if (progress === 100) {
      const delayTimer = setTimeout(() => {
        setIsLoading(false);
        onLoadComplete();
      }, 1000); // 1 second delay

      return () => clearTimeout(delayTimer);
    }
  }, [progress, onLoadComplete]);

  if (!isLoading) return null;

  return (
    <section className="h-screen w-screen bg-black">
      <div
        className="flex flex-col justify-center pb-8 pt-6 gap-[60px] max-w-[414px] mx-auto relative min-w-[414px] h-full overflow-hidden">
        <div className="absolute w-[535.812px] h-[310.28px] bg-[#C33D00] rounded-[535.812px] blur-[100px] top-0 -translate-y-1/2 left-1/2 transform -translate-x-1/2">
        </div>
        <img src="/images/preloader/bg.png" alt="Group_1" className="absolute inset-0 mix-blend-soft-light" />
        <div className="w-[560px] h-[280px] relative mx-auto">
          <img src="/images/preloader/Image.svg" alt="subtract" className="absolute" />
        </div>
        <div className="flex flex-col gap-8 px-5 relative z-10">
          <div className="flex flex-col px-4 gap-3 items-center">
            <h1 className="golden-text text-base font-semibold tracking-[-0.4px]">{progress}%</h1>
            <div className="w-full border-[#FEE45A] h-4 border rounded-lg mb-4">
              <div
                style={{ width: `${progress}%`, transition: 'width 0.5s ease-out' }}
                className="bg-[linear-gradient(90deg,#E75400_0%,#FFBC3D_100%)] h-[14px] rounded-lg shadow-[0px_-1px_1px_0px_#FEB86C_inset]" ></div>
            </div>
          </div>
          <div className="flex items-center gap-3 justify-center">
            <img src="/images/preloader/$foxie.svg" alt="subtract" className="w-12 h-12" />
            <h1 className="uppercase golden-text text-[42px] font-semibold">FOXIE</h1>
          </div>
          <div className="flex flex-col gap-6 items-center">
            <div className="flex flex-col gap-2 items-center">
              <h2 className="text-[#807C71] text-[14px] font-semibold">Stay tuned</h2>
              <h2 className="text-[#FFFFFF] text-[14px] font-bold">More info in official channels</h2>
            </div>
            <div className="flex items-center gap-4">
              <CircleLink link="http://google.com">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path d="M2.29745 3L9.82617 12.9282L2.25 21H3.95523L10.5883 13.9328L15.9474 21H21.75L13.7975 10.5135L20.8494 3H19.1442L13.0357 9.50852L8.1 3H2.29745ZM4.80506 4.23896H7.47073L19.2421 19.7614H16.5764L4.80506 4.23896Z" fill="white" />
                </svg>
              </CircleLink >
              <CircleLink link="http://google.com">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M12 22.5C17.799 22.5 22.5 17.799 22.5 12C22.5 6.20101 17.799 1.5 12 1.5C6.20101 1.5 1.5 6.20101 1.5 12C1.5 17.799 6.20101 22.5 12 22.5ZM16.2219 6.8115C16.7591 6.57566 17.3334 7.05249 17.2399 7.65659L15.8564 16.5946C15.7723 17.1379 15.1938 17.4212 14.7442 17.1392L10.7355 14.6254C10.3177 14.3634 10.2488 13.7566 10.5961 13.3985L14.1766 9.70697C14.3047 9.57485 14.1412 9.36157 13.9912 9.4652L9.01709 12.9017C8.64939 13.1558 8.19344 13.2251 7.77236 13.091L5.5661 12.3884C5.1666 12.2612 5.13842 11.6778 5.52361 11.5086L16.2219 6.8115Z" fill="white" />
                </svg>
              </CircleLink>
            </div>
          </div>
        </div>
        <video
          src="/images/preloader/fire.mp4"
          loop
          muted
          autoPlay
          preload="true"
          className="absolute bottom-0 z-0"
          playsInline
        />
      </div >
    </section>
  )
}

export default Preloader
