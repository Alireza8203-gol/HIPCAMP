import NewsLetter_email_svg from "@/components/NewsLetter_email_svg.tsx";
import NewsLetter_sendBtn_svg from "@/components/NewsLetter_sendBtn_svg.tsx";

const NewsLetterForm = () => {
  return (
    <form action="" className="newsletter__form">
      <div className="newsletter__email-address">
        <NewsLetter_email_svg />
        <input
          type="text"
          className="newsletter__input"
          placeholder="Email Address"
        />
      </div>
      <button className="newsletter__submit" type="submit">
        <NewsLetter_sendBtn_svg />
      </button>
    </form>
  );
};

export default NewsLetterForm;
