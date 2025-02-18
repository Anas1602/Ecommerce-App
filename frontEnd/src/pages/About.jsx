import { assets } from "../assets/frontend_assets/assets";
import Title from "../Components/Title";
import NewsLetter from "../Components/NewsLetter";

const About = () => {
  return (
    <div>
      <div className="text-2xl text-center border-gray-300 pt-8 border-t">
        <Title text1={"ABOUT"} text2={"US"} />
      </div>

      <div className="my-10 flex flex-col md:flex-row gap-16">
        <img className="w-full max-w-[450px] " src={assets.about_img} alt="" />
        <div className="flex flex-col justify-center gap-6 md:w-2/4 text-gray-600">
          <p>
            Forever was born out of a passion for innovation and a desire to
            revolution. Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Temporibus deleniti facilis nihil pariatur et quod, tempora
            reprehenderit distinctio voluptas porro!{" "}
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi,
            consequatur fuga architecto iure minima ipsa tempore quis! Modi
            ipsum aut ad aliquid dolorum impedit laudantium sunt? Aliquid,
            assumenda nihil nam natus quos rem aliquam corporis mollitia
            perferendis ipsam harum perspiciatis culpa, quis quod ratione
            quaerat. Mollitia voluptatem culpa laborum totam?
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere
            ipsam quia doloribus excepturi ullam nihil eaque quo corrupti nemo,
            eligendi iste saepe officiis, vero maxime odit iure facilis, rem
            itaque repudiandae aut? Similique, nobis facilis.
          </p>
          <b className="text-gray-800">Our Mission</b>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ut
            incidunt laboriosam perspiciatis iste nisi debitis neque assumenda
            beatae in, repudiandae atque cumque expedita aspernatur illum sed
            modi nobis quidem! Sequi accusamus quod, quasi perspiciatis at
            quisquam provident sed soluta doloribus.
          </p>
        </div>
      </div>
      <div className="text-xl py-4">
        <Title text1={"WHY"} text2={"CHOOSE US"} />
      </div>

      <div className="flex flex-col md:flex-row text-sm mb-20">
        <div className="border border-gray-200 px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>Quality Assurance</b>
          <p className="text-gray-500">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi,
            ratione. A aspernatur blanditiis, dolorem hic delectus soluta
            tenetur veniam odio!
          </p>
        </div>
        <div className="border border-gray-200 px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>Convenience</b>
          <p className="text-gray-500">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi,
            ratione. A aspernatur blanditiis,
          </p>
        </div>
        <div className="border border-gray-200 px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>Exceptional Customer Service</b>
          <p className="text-gray-500">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit
            dolores nesciunt quaerat numquam sunt, iusto ipsa itaque odit,
            assumenda placeat illum maiores reiciendis provident quis.
          </p>
        </div>
      </div>

      <NewsLetter />
    </div>
  );
};

export default About;
