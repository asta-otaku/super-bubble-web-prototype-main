import Header from "../components/Header";
import logo from "../assets/logo.svg";
import back from "../assets/back.svg";
import doc from "../assets/doc.svg";
import subinv from "../assets/subinv.png";
import message from "../assets/message4.svg";
import mockone from "../assets/mock-one.svg";
import mocktwo from "../assets/mock-two.svg";
import mockthree from "../assets/mock-three.svg";
import mockfour from "../assets/mock-four.svg";
import footermock from "../assets/footer-mock.svg";
import footermockmobile from "../assets/foote-mock-mobile.svg";
import Waitlist from "../components/Waitlist";
import { useState } from "react";

function App() {
  const [open, setOpen] = useState(false);
  const [selectedToken1, setSelectedToken1] = useState("token1");

  return (
    <div>
      <div
        onClick={() => setOpen(false)}
        className={`pt-8 bg-white ${open && "blur-[2px]"}`}
      >
        <Header />
        {/* Hero */}
        <div className="h-[800px] max-w-screen-2xl mx-auto flex flex-col items-center justify-center relative">
          <div className="flex flex-col items-center gap-4">
            <img src={logo} alt="logo" />
            <h1 className="text-3xl font-bold text-secondary">
              Chat less, make more.
            </h1>
            <p className="text-lg text-center">
              Communication designed for teams <br />
              who create
            </p>
          </div>
          <div className="bottom-[12%] absolute flex flex-col items-center gap-2">
            <p className="text-[#7E7E7E]">To learn more, just scroll</p>
            <img src={back} className="-rotate-90" />
          </div>
        </div>

        {/* Season 1 */}
        <div className="h-[600px] max-w-screen-2xl mx-auto flex flex-col items-center justify-center relative">
          <div className="flex flex-col items-center gap-3">
            <h1 className="text-3xl font-bold text-secondary">Typo* Season¹</h1>
            <h6 className="text-primary font-medium text-xl">
              It all begins with a new bubble.
            </h6>
            <p className="text-lg text-center text-[#7E7E7E] max-w-[340px] leading-5">
              Each season of Typo unlocks new possibilities. Season¹ is all
              about building a space that lets you communicate with clarity.
            </p>
          </div>
        </div>

        {/* Bubbles */}
        <div className="flex flex-col items-center justify-center p-4 h-[600px]">
          <div className="flex flex-col items-end max-w-[280px] w-full">
            <article className="bg-secondary text-white text-[17px] pt-3 rounded-2xl">
              <div className="px-3">
                Hey what do you think of these cuts?
                <button
                  onClick={() => setSelectedToken1("token1")}
                  className={`inline-flex items-center gap-0.5 text-xs py-1 px-2 rounded-3xl w-fit cursor-pointer ${
                    selectedToken1 === "token1"
                      ? "bg-gray-300 text-primary"
                      : "bg-[#FFFFFF33] text-white"
                  }`}
                >
                  <div className="tokenPill">
                    <div className="thumbnail">
                      <img
                        src="https://typowebsitevideo.s3.amazonaws.com/whiteboarding.webp "
                        alt="Token Thumbnail"
                        className="thumbnailImg"
                      ></img>
                    </div>

                    <span>video.mp4</span>
                  </div>
                </button>
                <button
                  onClick={() => setSelectedToken1("token2")}
                  className={`inline-flex items-center gap-0.5 text-xs py-1 px-2 rounded-3xl w-fit cursor-pointer ${
                    selectedToken1 === "token2"
                      ? "bg-gray-300 text-primary"
                      : "bg-[#FFFFFF33] text-white"
                  }`}
                >
                  <div className="tokenPill">
                    <div className="thumbnail">
                      <img
                        src="https://typowebsitevideo.s3.amazonaws.com/whiteboarding.webp "
                        alt="Token Thumbnail"
                        className="thumbnailImg"
                      ></img>
                    </div>

                    <span>video.mp4</span>
                  </div>
                </button>{" "}
                and here's the og script{" "}
                <button
                  onClick={() => setSelectedToken1("token3")}
                  className={`inline-flex items-center gap-0.5 text-xs py-1 px-2 rounded-3xl w-fit cursor-pointer ${
                    selectedToken1 === "token3"
                      ? "bg-gray-300 text-primary"
                      : "bg-[#FFFFFF33] text-white"
                  }`}
                >
                  <div className="tokenPill">
                    <div className="thumbnail">
                      <img src={doc}></img>
                    </div>

                    <span>doc.pdf</span>
                  </div>
                </button>
                <br />I think one of these thumbnails would work best{" "}
                <button
                  onClick={() => setSelectedToken1("token4")}
                  className={`inline-flex items-center gap-0.5 text-xs py-1 px-2 rounded-3xl w-fit cursor-pointer ${
                    selectedToken1 === "token4"
                      ? "bg-gray-300 text-primary"
                      : "bg-[#FFFFFF33] text-white"
                  }`}
                >
                  <div className="tokenPill">
                    <div className="thumbnail">
                      <img
                        src="https://typowebsitevideo.s3.amazonaws.com/whiteboarding.webp "
                        alt="Token Thumbnail"
                        className="thumbnailImg"
                      ></img>
                    </div>

                    <span>thumbnail 1.jpg</span>
                  </div>
                </button>
                <button
                  onClick={() => setSelectedToken1("token5")}
                  className={`inline-flex items-center gap-0.5 text-xs py-1 px-2 rounded-3xl w-fit cursor-pointer ${
                    selectedToken1 === "token5"
                      ? "bg-gray-300 text-primary"
                      : "bg-[#FFFFFF33] text-white"
                  }`}
                >
                  <div className="tokenPill">
                    <div className="thumbnail">
                      <img
                        src="https://typowebsitevideo.s3.amazonaws.com/whiteboarding.webp "
                        alt="Token Thumbnail"
                        className="thumbnailImg"
                      ></img>
                    </div>

                    <span>thumbnail 2.jpg</span>
                  </div>
                </button>
                <button
                  onClick={() => setSelectedToken1("token6")}
                  className={`inline-flex items-center gap-0.5 text-xs py-1 px-2 rounded-3xl w-fit cursor-pointer ${
                    selectedToken1 === "token6"
                      ? "bg-gray-300 text-primary"
                      : "bg-[#FFFFFF33] text-white"
                  }`}
                >
                  <div className="tokenPill">
                    <div className="thumbnail">
                      <img
                        src="https://typowebsitevideo.s3.amazonaws.com/whiteboarding.webp "
                        alt="Token Thumbnail"
                        className="thumbnailImg"
                      ></img>
                    </div>

                    <span>thumbnail 3.jpg</span>
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
                {selectedToken1 === "token5" && (
                  <img
                    src="https://typowebsitevideo.s3.amazonaws.com/whiteboarding.webp "
                    alt="Whiteboarding"
                    style={{
                      width: "100%",
                      borderRadius: "16px",
                    }}
                  />
                )}
                {selectedToken1 === "token6" && (
                  <img
                    src="https://typowebsitevideo.s3.amazonaws.com/lockedin.webp"
                    alt="Locked in"
                    style={{
                      width: "100%",
                      borderRadius: "16px",
                    }}
                  />
                )}
              </div>
            </article>
            <div
              style={{
                backgroundImage: `url(${subinv})`,
              }}
              className="flex justify-center items-center bg-no-repeat bg-cover bg-center w-[100px] h-8 mr-4 text-primary text-xs p-3"
            >
              <img src={message} alt="" />
            </div>
          </div>
          <h4 className="mt-4 text-primary font-medium text-xl">
            Meet your Super Bubble
          </h4>
          <p className="text-[#7E7E7E] font-medium text-xl">click around</p>
        </div>

        <div className="flex flex-col gap-[300px] w-full">
          <div className="max-w-screen-2xl w-[90%] md:w-full mx-auto flex flex-col items-center gap-12 relative md:h-[600px] bg-[#F3F3F3] rounded-3xl pt-4 md:bg-inherit">
            <div className="md:max-w-[300px] px-4 lg:px-0 w-full lg:absolute top-[40%] right-[10%]">
              <h2 className="text-primary font-medium text-xl mb-1">
                Never detach content from context
              </h2>
              <p className="text-[#7E7E7E]">
                The creative process is messy but the tool you use to capture it
                doesn't need to be. As you share links, videos, songs, and the
                context behind your next big idea, nothing should get lost.
              </p>
            </div>
            <img src={mockone} className="md:h-[600px] w-full" />
          </div>
          <div className="max-w-screen-2xl w-[90%] md:w-full mx-auto flex flex-col items-center gap-12 relative md:h-[600px] bg-[#F3F3F3] rounded-3xl pt-4 md:bg-inherit">
            <div className="md:max-w-[300px] px-4 lg:px-0 w-full lg:absolute top-[40%] left-[10%]">
              <h2 className="text-primary font-medium text-xl mb-1">
                Comments that let you focus
              </h2>
              <p className="text-[#7E7E7E]">
                Whether you're giving feedback on a specific photo or ideating
                in the comments, you should be able to glide between what you're
                writing about.
              </p>
            </div>
            <img src={mocktwo} className="md:h-[600px] w-full" />
          </div>
          <div className="max-w-screen-2xl w-[90%] md:w-full mx-auto flex flex-col items-center gap-12 relative md:h-[600px] bg-[#F3F3F3] rounded-3xl pt-4 md:bg-inherit">
            <div className="md:max-w-[300px] px-4 lg:px-0 w-full lg:absolute top-[40%] right-[10%]">
              <h2 className="text-primary font-medium text-xl mb-1">
                Media at your fingertips
              </h2>
              <p className="text-[#7E7E7E]">
                Previewing media on other messengers kinda sucks. It doesn't
                need to though.
              </p>
            </div>
            <img src={mockthree} className="md:h-[600px] w-full" />
          </div>
          <div className="max-w-screen-2xl w-[90%] md:w-full mx-auto flex flex-col items-center gap-12 relative md:h-[600px] bg-[#F3F3F3] rounded-3xl pt-4 md:bg-inherit">
            <div className="md:max-w-[300px] px-4 lg:px-0 w-full lg:absolute top-[40%] left-[10%]">
              <h2 className="text-primary font-medium text-xl mb-1">
                Threads, fixed
              </h2>
              <p className="text-[#7E7E7E]">
                We've all been there. The chat is popping off with new topics,
                some people aren't threading their messages in the right place,
                and it all becomes a mess. You can't keep up or find what you
                need. It doesn't need to be so noisy.
              </p>
            </div>
            <img src={mockfour} className="md:h-[600px] w-full" />
          </div>

          <div className="max-w-screen-2xl w-[90%] md:w-full mx-auto flex flex-col items-center gap-12 relative md:h-[600px] bg-[#F3F3F3] rounded-3xl pt-4 md:bg-inherit">
            <div className="max-w-[300px] w-full text-center">
              <h2 className="text-primary font-medium text-xl mb-1">
                At home on iPhone and Mac
              </h2>
              <p className="text-[#7E7E7E]">
                No matter where you create, we've built a native experience to
                help you communicate.
              </p>
            </div>
            <div className="flex gap-8 w-full justify-center">
              <img
                src={footermock}
                className="h-0 md:h-[600px] invisible md:visible"
              />
              <img
                src={mockfour}
                className="h-0 md:h-[600px] invisible md:visible"
              />
              <img src={footermockmobile} className="md:hidden w-full" />
            </div>
          </div>
        </div>

        <div className="h-[300px] md:h-[600px] max-w-screen-2xl mx-auto flex flex-col items-center justify-center relative">
          <h1 className="text-3xl font-bold text-secondary">
            Season² coming soon
          </h1>
        </div>
      </div>

      <Waitlist open={open} setOpen={setOpen} />
    </div>
  );
}

export default App;
