import { useLocation, useNavigate } from "react-router-dom";
import back from "../assets/back.svg";
import blueback from "../assets/blueback.svg";
import { useState } from "react";

function Blogpost() {
  const location = useLocation();
  const navigate = useNavigate();
  const { post } = location.state;
  const [hovered, setHovered] = useState(false);

  return (
    <div className="pt-8 bg-white max-w-screen w-full min-h-screen flex justify-center">
      <div className="max-w-sm p-4 w-full">
        <button
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
          onClick={() => navigate("/blog")}
          className={`flex items-center gap-2 font-medium ${
            hovered ? "text-secondary" : "text-[#7E7E7E]"
          }`}
        >
          <img src={hovered ? blueback : back} alt="back" />
          Back
        </button>
        <div className="mt-4">
          <h1 className="text-xl text-secondary font-bold">{post?.title}</h1>
          <div className="flex justify-between items-center w-full">
            <span className="font-mono text-xs md:hidden text-[#7E7E7E] mt-1">
              {post.author}
            </span>
            <span className="font-mono text-xs md:hidden text-[#7E7E7E] mt-1">
              {post.date}
            </span>
          </div>
        </div>
        {post?.content.map((cnt: string, index: number) => (
          <p key={index} className="text-sm text-primary font-mono mt-4">
            {cnt}
          </p>
        ))}
      </div>
    </div>
  );
}

export default Blogpost;
