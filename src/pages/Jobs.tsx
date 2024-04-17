import Header from "../components/Header";
import chain from "../assets/chain.svg";
import imageIcon from "../assets/imageIcon.svg";
import Waitlist from "../components/Waitlist";

function Jobs() {
  return (
    <div className="pt-8 bg-white">
      <Header />
      <div className="max-w-xs w-full px-3 mx-auto flex flex-col gap-3 pt-8">
        <p className="bg-secondary text-white p-3 rounded-2xl">
          If you're excited by our vision to reshape communication for creation
          then we want to hear from you
        </p>
        <article className="bg-secondary text-white p-3 rounded-2xl">
          We work together IRL in Soho, NYC. Our office doubles as an art
          studio, film set, and all-round creative space <br />
          <div className="grid grid-cols-3 gap-1">
            <a
              href="#"
              className="flex items-center gap-0.5 text-sm py-1 px-2 rounded-3xl bg-[#FFFFFF33] w-fit"
            >
              <img src={imageIcon} alt="" />
              Studio.jpg
            </a>
            <a
              href="#"
              className="flex items-center gap-0.5 text-sm py-1 px-2 rounded-3xl bg-[#FFFFFF33] w-fit"
            >
              <img src={imageIcon} alt="" />
              vibes.jpg
            </a>
            <a
              href="#"
              className="flex items-center gap-0.5 text-sm py-1 px-2 rounded-3xl bg-[#FFFFFF33] w-fit"
            >
              <img src={imageIcon} alt="" />
              art.jpg
            </a>
            <a
              href="#"
              className="flex items-center gap-0.5 text-sm py-1 px-2 rounded-3xl bg-[#FFFFFF33] w-fit col-span-3"
            >
              <img src={imageIcon} alt="" />
              standing on business.jpg
            </a>
          </div>
        </article>
        <p className="bg-secondary text-white p-3 rounded-2xl">
          In order to assemble the best team, we raised over $6m in seed funding
          from Elad Gil, Gokul Rajaram, Sarah Guo, and the leaders of companies
          like Figma, Adobe, and Plaid
        </p>
        <p className="bg-secondary text-white p-3 rounded-2xl">
          If you're interested in working with us please fill out this form:{" "}
          <br />
          <a
            href="https://typeform.com"
            className="flex items-center gap-0.5 text-sm py-1 px-2 rounded-3xl bg-[#FFFFFF33] w-fit"
          >
            <img src={chain} alt="" />
            Typeform.com
          </a>
        </p>
        <p className="bg-secondary text-white p-3 rounded-2xl">
          We are recruiting across product roles, but are most actively hiring
          an iOS engineer. You can find out more about that position here:{" "}
          <br />
          <a
            href="https://notion.so"
            className="flex items-center gap-0.5 text-sm py-1 px-2 rounded-3xl bg-[#FFFFFF33] w-fit"
          >
            <img src={chain} alt="" />
            Notion.so
          </a>
        </p>
        <p className="bg-secondary text-white p-3 rounded-2xl">
          And if you don't fit the exact experience requirements, it's still
          worth applying. We want to work with the best, and the best come in
          different forms
        </p>
      </div>

      <Waitlist />
    </div>
  );
}

export default Jobs;
