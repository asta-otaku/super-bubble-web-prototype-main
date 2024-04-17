import Header from "../components/Header";
import chain from "../assets/chain.svg";
import imageIcon from "../assets/imageIcon.svg";
import Waitlist from "../components/Waitlist";

function About() {
  return (
    <div className="pt-8 bg-white">
      <Header />
      <div className="max-w-xs w-full px-3 mx-auto flex flex-col gap-3 pt-8 min-h-[calc(80vh)]">
        <article className="bg-secondary text-white p-3 rounded-2xl">
          We're a small team of crafts people who believe art and technology
          must mix. We're motivated by mission, craft, and people <br />
          <div className="flex gap-1 items-center flex-wrap">
            <a
              href="#"
              className="flex items-center gap-0.5 text-xs py-1 px-2 rounded-3xl bg-[#FFFFFF33] w-fit"
            >
              <img src={imageIcon} alt="" />
              Whiteboard.jpg
            </a>
            <a
              href="#"
              className="flex items-center gap-0.5 text-xs py-1 px-2 rounded-3xl bg-[#FFFFFF33] w-fit"
            >
              <img src={imageIcon} alt="" />
              Whiteboard.jpg
            </a>
            <a
              href="#"
              className="flex items-center gap-0.5 text-xs py-1 px-2 rounded-3xl bg-[#FFFFFF33] w-fit"
            >
              <img src={imageIcon} alt="" />
              offsite.jpg
            </a>
            <a
              href="#"
              className="flex items-center gap-0.5 text-xs py-1 px-2 rounded-3xl bg-[#FFFFFF33] w-fit"
            >
              <img src={imageIcon} alt="" />
              candid.jpg
            </a>
          </div>
        </article>
        <article className="bg-secondary text-white p-3 rounded-2xl">
          Where to find us: <br />
          <div className="flex gap-1 items-center flex-wrap">
            <a
              href="https://instagram.com"
              className="flex items-center gap-0.5 text-xs py-1 px-2 rounded-3xl bg-[#FFFFFF33] w-fit"
            >
              <img src={chain} alt="" />
              Instagram.com
            </a>
            <a
              href="https://youtube.com"
              className="flex items-center gap-0.5 text-xs py-1 px-2 rounded-3xl bg-[#FFFFFF33] w-fit"
            >
              <img src={chain} alt="" />
              Youtube.com
            </a>
            <a
              href="https://x.com"
              className="flex items-center gap-0.5 text-xs py-1 px-2 rounded-3xl bg-[#FFFFFF33] w-fit"
            >
              <img src={chain} alt="" />
              X.com
            </a>
          </div>
        </article>
        <article className="bg-secondary text-white p-3 rounded-2xl">
          Obligatory legal stuff: <br />
          <div className="flex gap-1 items-center flex-wrap">
            <a
              href="#"
              className="flex items-center gap-0.5 text-xs py-1 px-2 rounded-3xl bg-[#FFFFFF33] w-fit"
            >
              <img src={chain} alt="" />
              Terms of Service
            </a>
            <a
              href="#"
              className="flex items-center gap-0.5 text-xs py-1 px-2 rounded-3xl bg-[#FFFFFF33] w-fit"
            >
              <img src={chain} alt="" />
              Privacy Policy
            </a>
          </div>
        </article>
      </div>

      <Waitlist />
    </div>
  );
}

export default About;
