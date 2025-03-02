import tentImg from "@/assets/Images/tent.png";
import NewsLetterForm from "@/components/NewsLetterForm.tsx";

const NewsLetter = () => {
  return (
    <section className="newsletter">
      <div className="newsletter__content">
        <h2 className="newsletter__title">Let's Stay in Touch</h2>
        <p className="newsletter__caption">
          Get travel planning ideas, helpful tips, and stories from our visitors
          delivered right to your inbox.
        </p>
        <div className="newsletter__email-box">
          <NewsLetterForm />
        </div>
      </div>
      <div className="newsletter__banner">
        <img src={tentImg} alt="tent" className="newsletter__img" />
      </div>
    </section>
  );
};

export default NewsLetter;
