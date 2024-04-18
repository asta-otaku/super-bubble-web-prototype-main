import Header from "../components/Header";
import chain from "../assets/chain.svg";
import imageIcon from "../assets/imageIcon.svg";
import PreviewBox from "../components/PreviewBox";
import Waitlist from "../components/Waitlist";
import { useEffect, useLayoutEffect, useState } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

function Jobs() {
  const [open, setOpen] = useState(false);
  const [selectedToken1, setSelectedToken1] = useState("token1");
  const [selectedToken3, setSelectedToken3] = useState("token1");
  const [selectedToken4, setSelectedToken4] = useState("token1");

  const handleTokenClick = (token: string, bubble: number) => {
    if (bubble === 1) {
      setSelectedToken1(token);
    } else if (bubble === 3) {
      setSelectedToken3(token);
    } else if (bubble === 4) {
      setSelectedToken4(token);
    }
  };

  useEffect(() => {
    // This function sets a CSS variable with the window height
    function setWindowHeight() {
      const vh = window.innerHeight * 0.01;
      document.documentElement.style.setProperty("--vh", `${vh}px`);
    }
    // Initialize AOS
    Aos.init({
      duration: 800, // or your desired configuration
    });

    // Run the function on load and resize
    setWindowHeight();
    window.addEventListener("resize", setWindowHeight);

    // Cleanup function to remove the event listener when the component unmounts
    return () => {
      window.removeEventListener("resize", setWindowHeight);
    };
  }, []); // Empty dependency array means this effect runs once on mount

  useLayoutEffect(() => {}, []);

  return (
    <div>
      <div
        onClick={() => setOpen(false)}
        className={`pt-8 bg-white ${open && "blur-[2px]"}`}
      >
        <Header />
        <div className="max-w-xs w-full px-3 mx-auto flex flex-col gap-3 pt-8 min-h-[100vh]">
          <p className="bg-secondary text-white p-3 rounded-2xl">
            If you're excited by our vision to reshape communication for
            creation then we want to hear from you
          </p>
          <article className="bg-secondary pt-3 rounded-2xl">
            <p className="text-white px-3">
              We work together IRL in Soho, NYC. Our office doubles as an art
              studio, film set, and all-round creative space
            </p>
            <div
              data-aos-once="false"
              data-aos="fade-up"
              className="flex gap-1 items-center flex-wrap px-3"
            >
              <button
                onClick={() => handleTokenClick("token1", 1)}
                className={`inline-flex items-center gap-0.5 text-xs py-1 px-2 rounded-3xl w-fit cursor-pointer ${
                  selectedToken1 === "token1"
                    ? "bg-white text-primary"
                    : "bg-[#FFFFFF33] text-white"
                }`}
              >
                <div className="tokenPill">
                  <div className="thumbnail">
                    <img
                      src={imageIcon}
                      alt="Token Thumbnail"
                      className="thumbnailImg"
                    ></img>
                  </div>

                  <span>Studio.jpg</span>
                </div>
              </button>
              <button
                onClick={() => handleTokenClick("token2", 1)}
                className={`inline-flex items-center gap-0.5 text-xs py-1 px-2 rounded-3xl w-fit cursor-pointer ${
                  selectedToken1 === "token2"
                    ? "bg-white text-primary"
                    : "bg-[#FFFFFF33] text-white"
                }`}
              >
                <div className="tokenPill">
                  <div className="thumbnail">
                    <img
                      src={imageIcon}
                      alt="Token Thumbnail"
                      className="thumbnailImg"
                    ></img>
                  </div>

                  <span>vibes.jpg</span>
                </div>
              </button>
              <button
                onClick={() => handleTokenClick("token3", 1)}
                className={`inline-flex items-center gap-0.5 text-xs py-1 px-2 rounded-3xl w-fit cursor-pointer ${
                  selectedToken1 === "token3"
                    ? "bg-white text-primary"
                    : "bg-[#FFFFFF33] text-white"
                }`}
              >
                <div className="tokenPill">
                  <div className="thumbnail">
                    <img
                      src={imageIcon}
                      alt="Token Thumbnail"
                      className="thumbnailImg"
                    ></img>
                  </div>

                  <span>art.jpg</span>
                </div>
              </button>
              <button
                onClick={() => handleTokenClick("token4", 1)}
                className={`inline-flex items-center gap-0.5 text-xs py-1 px-2 rounded-3xl w-fit cursor-pointer ${
                  selectedToken1 === "token4"
                    ? "bg-white text-primary"
                    : "bg-[#FFFFFF33] text-white"
                }`}
              >
                <div className="tokenPill">
                  <div className="thumbnail">
                    <img
                      src={imageIcon}
                      alt="Token Thumbnail"
                      className="thumbnailImg"
                    ></img>
                  </div>

                  <span>standing on business.jpg</span>
                </div>
              </button>
            </div>
            <div className="bubble-bottom mt-2">
              {selectedToken1 === "token1" && (
                <img
                  src="https://typowebsitevideo.s3.amazonaws.com/whiteboarding.webp "
                  alt="Whiteboarding"
                  style={{
                    width: "100%",
                    borderRadius: "16px",
                  }}
                />
              )}
              {selectedToken1 === "token2" && (
                <img
                  src="https://typowebsitevideo.s3.amazonaws.com/lockedin.webp"
                  alt="Locked in"
                  style={{
                    width: "100%",
                    borderRadius: "16px",
                  }}
                />
              )}
              {selectedToken1 === "token3" && (
                <img
                  src="https://typowebsitevideo.s3.amazonaws.com/offsite.webp"
                  alt="Offsite"
                  style={{
                    width: "100%",
                    borderRadius: "16px",
                  }}
                />
              )}
              {selectedToken1 === "token4" && (
                <img
                  src="https://typowebsitevideo.s3.amazonaws.com/candid.webp"
                  alt="Candid"
                  style={{
                    width: "100%",
                    borderRadius: "16px",
                  }}
                />
              )}
            </div>
          </article>

          <p className="bg-secondary text-white p-3 rounded-2xl">
            In order to assemble the best team, we raised over $6m in seed
            funding from Elad Gil, Gokul Rajaram, Sarah Guo, and the leaders of
            companies like Figma, Adobe, and Plaid
          </p>
          <article className="bg-secondary pt-3 rounded-2xl">
            <p className="text-white px-3">
              If you're interested in working with us please fill out this form:
            </p>
            <button
              data-aos-once="false"
              data-aos="fade-up"
              onClick={() => handleTokenClick("token1", 3)}
              className={`flex items-center gap-0.5 text-xs py-1 px-2 rounded-3xl w-fit cursor-pointer ml-3 ${
                selectedToken3 === "token1"
                  ? "bg-white text-primary"
                  : "bg-[#FFFFFF33] text-white"
              }`}
            >
              <div className="tokenPill">
                <img className="tokenimg" src={chain} alt="Token" />

                <span>Typeform.com</span>
              </div>
            </button>
            <div className="bubble-bottom mt-3">
              {selectedToken3 === "token1" && (
                <PreviewBox
                  imageURL=""
                  // logoURL="https://static.cdninstagram.com/rsrc.php/v3/yI/r/VsNE-OHk_8a.png"
                  ItemURL="https://www.typeform.com/tyyyyyyyyyyypo/"
                  websiteName="Typo* on Typeform"
                  description="A more ~editorial~ pov"
                />
              )}
            </div>
          </article>

          <article className="bg-secondary pt-3 rounded-2xl">
            <p className="text-white px-3">
              We are recruiting across product roles, but are most actively
              hiring an iOS engineer. You can find out more about that position
              here:
            </p>
            <button
              data-aos-once="false"
              data-aos="fade-up"
              onClick={() => handleTokenClick("token1", 4)}
              className={`flex items-center gap-0.5 text-xs py-1 px-2 rounded-3xl w-fit cursor-pointer ml-3 ${
                selectedToken4 === "token1"
                  ? "bg-white text-primary"
                  : "bg-[#FFFFFF33] text-white"
              }`}
            >
              <div className="tokenPill">
                <img className="tokenimg" src={chain} alt="Token" />

                <span>Notion.so</span>
              </div>
            </button>
            <div className="bubble-bottom mt-2">
              {selectedToken4 === "token1" && (
                <PreviewBox
                  imageURL=""
                  // logoURL="https://static.cdninstagram.com/rsrc.php/v3/yI/r/VsNE-OHk_8a.png"
                  ItemURL="https://www.notion.so/tyyyyyyyyyyypo/"
                  websiteName="Typo* on Notion"
                  description="A more ~editorial~ pov"
                />
              )}
            </div>
          </article>

          <p className="bg-secondary text-white p-3 rounded-2xl">
            And if you don't fit the exact experience requirements, it's still
            worth applying. We want to work with the best, and the best come in
            different forms
          </p>
        </div>
      </div>

      <Waitlist open={open} setOpen={setOpen} />
    </div>
  );
}

export default Jobs;
