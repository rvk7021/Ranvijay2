const SocialMedia = () => {
    return (
      <div className="">
        <h1 className="text-center font-bold text-[20px]">Where to find me ?</h1>
<div className="flex justify-center md:justify-start my-5 gap-7">
        <a
          className="w-8 h-8 hover:opacity-50 transition duration-500"
          href="https://www.linkedin.comhttps://www.linkedin.com/in/ranvijay-kumar-825457255/"
          target="_blank"
          rel="noreferrer"
        >
          <img alt="linkedin-link" src="/linkedin.png" />
        </a>
        <a
          className="hover:opacity-50 transition duration-500"
          href="https://leetcode.com/phoenix_rvk"
          target="_blank"
          rel="noreferrer"
        >
          <img alt="leetcode" src="/leetcode.png" className="w-8 h-8 md:hover:scale-110 rounded-md" />
        </a>
        <a
          className="hover:opacity-50 transition duration-500"
          href="https://codeforces.com/profile/pheonix_rvk"
          target="_blank"
          rel="noreferrer"
        >
          <img alt="facebook-link" src="/codeforces.png" className="w-8 h-8 md:hover:scale-110 rounded-md" />
        </a>
        <a
          className="hover:opacity-50 transition duration-500"
          href="https://www.github.com/rvk7021"
          target="_blank"
          rel="noreferrer"
        >
          <img alt="instagram-link" src="/github.jpeg" className="w-8 h-8 md:hover:scale-110 rounded-md" />
        </a>
      </div>
      </div>
      
    );
  };
  
  export default SocialMedia;