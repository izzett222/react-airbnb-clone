import banner from "../assets/banner.png";

export default function Banner() {
  return (
    <section className="mt-7 px-9">
      <div className="flex justify-center ">
        <img src={banner} alt="banner" />
      </div>
      <div className="mt-8">
        <h1 className="font-semibold mb-4 text-[36px] leading-[1.1]">Online Experiences</h1>
        <p className="font-light leading-[1.1] max-w-xs">
          Join unique interactive activities led by one-of-a-kind hosts—all
          without leaving home.
        </p>
      </div>
    </section>
  );
}
