import Header from "../components/Header";
import logo from "../assets/logo.svg";
import back from "../assets/back.svg";
import doc from "../assets/doc.svg";
import subtractinv from "../assets/SubtractInv.svg";
import mockone from "../assets/mock-one.svg";
import mocktwo from "../assets/mock-two.svg";
import mockthree from "../assets/mock-three.svg";
import mockfour from "../assets/mock-four.svg";
import footermock from "../assets/footer-mock.svg";
import footermockmobile from "../assets/foote-mock-mobile.svg";
import imageIcon from "../assets/imageIcon.svg";
import videoIcon from "../assets/videoIcon.svg";
import { ChatBubbleBottomCenterIcon } from "../assets/icons";
import Waitlist from "../components/Waitlist";

function App() {
  return (
    <div className="pt-8 bg-white">
      <Header />
      {/* Hero */}
      <div className="h-[500px] max-w-screen-2xl mx-auto flex flex-col items-center justify-center relative">
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
        <div className="bottom-0 absolute flex flex-col items-center gap-2">
          <p className="text-primary">To learn more, just scroll</p>
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
          <p className="text-lg text-center text-[#7E7E7E] max-w-[340px]">
            Each season of Typo unlocks new possibilities. Season¹ is all about
            building a space that lets you communicate with clarity.
          </p>
        </div>
      </div>

      {/* Bubbles */}
      <div className="flex flex-col items-center justify-center p-4 h-[600px]">
        <div className="flex flex-col items-end max-w-[280px] w-full">
          <article className="bg-secondary text-white text-[17px] p-3 rounded-2xl">
            Hey what do you think of these cuts?
            <a
              href="#"
              className="inline-flex items-center gap-0.5 py-1 px-2 mx-1 text-xs rounded-3xl bg-[#FFFFFF33] w-fit"
            >
              <img src={videoIcon} alt="" />
              video.mp4
            </a>
            <a
              href="#"
              className="inline-flex items-center gap-0.5 text-xs py-1 px-2 rounded-3xl bg-[#FFFFFF33] w-fit"
            >
              <img src={videoIcon} alt="" />
              video.mp4
            </a>{" "}
            and here's the og script{" "}
            <a
              href="#"
              className="inline-flex items-center gap-0.5 text-xs py-1 px-2 rounded-3xl bg-[#FFFFFF33] w-fit"
            >
              <img src={doc} alt="" />
              doc.pdf
            </a>
            <br />I think one of these thumbnails would work best{" "}
            <a
              href="#"
              className="inline-flex items-center gap-0.5 text-xs py-1 px-2 rounded-3xl bg-[#FFFFFF33] w-fit"
            >
              <img src={imageIcon} alt="" />
              thumbnail 2.jpg
            </a>
            <a
              href="#"
              className="inline-flex items-center gap-0.5 text-xs py-1 px-2 mx-1 rounded-3xl bg-[#FFFFFF33] w-fit"
            >
              <img src={imageIcon} alt="" />
              thumbnail 3.jpg
            </a>
            <a
              href="#"
              className="inline-flex items-center gap-0.5 text-xs py-1 px-2 rounded-3xl bg-[#FFFFFF33] w-fit"
            >
              <img src={imageIcon} alt="" />
              thumbnail 1.jpg
            </a>
          </article>
          <div
            style={{
              backgroundImage: `url(${subtractinv})`,
            }}
            className="flex justify-center items-center gap-3 bg-no-repeat bg-cover bg-center w-[150px] text-primary text-xs p-3 rounded-3xl"
          >
            <ChatBubbleBottomCenterIcon className="w-6 h-6" />4
          </div>
        </div>
        <h4 className="mt-4 text-primary font-medium text-xl">
          Meet your Super Bubble
        </h4>
        <p className="text-[#7E7E7E] font-medium text-xl">click around</p>
      </div>

      <div className="flex flex-col gap-[200px] w-full">
        <div className="max-w-screen-2xl w-[90%] md:w-full mx-auto flex flex-col items-center gap-12 relative md:h-[600px] bg-[#F3F3F3] rounded-3xl pt-4 md:bg-inherit">
          <div className="max-w-[300px] w-full md:absolute top-[40%] right-[10%]">
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
          <div className="max-w-[300px] w-full md:absolute top-[40%] left-[10%]">
            <h2 className="text-primary font-medium text-xl mb-1">
              Comments that let you focus
            </h2>
            <p className="text-[#7E7E7E]">
              Whether you're giving feedback on a specific photo or ideating in
              the comments, you should be able to glide between what you're
              writing about.
            </p>
          </div>
          <img src={mocktwo} className="md:h-[600px] w-full" />
        </div>
        <div className="max-w-screen-2xl w-[90%] md:w-full mx-auto flex flex-col items-center gap-12 relative md:h-[600px] bg-[#F3F3F3] rounded-3xl pt-4 md:bg-inherit">
          <div className="max-w-[300px] w-full md:absolute top-[40%] right-[10%]">
            <h2 className="text-primary font-medium text-xl mb-1">
              Media at your fingertips
            </h2>
            <p className="text-[#7E7E7E]">
              Previewing media on other messengers kinda sucks. It doesn't need
              to though.
            </p>
          </div>
          <img src={mockthree} className="md:h-[600px] w-full" />
        </div>
        <div className="max-w-screen-2xl w-[90%] md:w-full mx-auto flex flex-col items-center gap-12 relative md:h-[600px] bg-[#F3F3F3] rounded-3xl pt-4 md:bg-inherit">
          <div className="max-w-[300px] w-full md:absolute top-[40%] left-[10%]">
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
              className="h-[600px] hidden md:inline-block"
            />
            <img src={mockfour} className="h-[600px] hidden md:inline-block" />
            <img src={footermockmobile} className="md:hidden w-full" />
          </div>
        </div>
      </div>

      <div className="h-[300px] md:h-[600px] max-w-screen-2xl mx-auto flex flex-col items-center justify-center relative">
        <h1 className="text-3xl font-bold text-secondary">
          Season² coming soon
        </h1>
      </div>
      <Waitlist />
    </div>
  );
}

export default App;
