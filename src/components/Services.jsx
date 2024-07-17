import { Link } from "react-router-dom";

const Services = () => {
  return (
    <div>
      <header>
        <nav>
          <div className="flex items-center gap-2">
            <img src="houses-logo.svg" alt="Logo" />
            <h1 className="text-4xl font-normal">SELHONO</h1>
          </div>

          <ul>
            <li>
              <Link to="services" />
            </li>
          </ul>
        </nav>
      </header>
      <main>
        <div className="mt-16">
          <img src="flower.png" alt="Flower" />
        </div>

        <div className="flex items-center justify-center gap-12 pt-36">
          <div className=" duration-75 cursor-pointer hover:text-orange-600">
            <h3 className="text-2xl font-normal pb-5 ">Project Plan</h3>
            <p className="text-xl font-normal  pb-12">
              There are many variations of the <br /> passages of lorem Ipsum
              from <br />
              available, majority.
            </p>

            <button>Read More</button>
          </div>
          <div className="cursor-pointer hover:text-orange-600">
            <h3 className="text-2xl font-normal pb-5 ">Interior Work</h3>
            <p className="text-xl font-normal  pb-12">
              There are many variations of the <br /> passages of lorem Ipsum
              from <br />
              available, majority.
            </p>

            <button>Read More</button>
          </div>
          <div className="cursor-pointer hover:text-orange-600">
            <h3 className="text-2xl font-normal pb-5 ">Retail Design</h3>
            <p className="text-xl font-normal  pb-12">
              There are many variations of the <br /> passages of lorem Ipsum
              from <br />
              available, majority.
            </p>

            <button>Read More</button>
          </div>
        </div>

        <div className="flex items-center justify-center gap-12 pt-20">
          <div className=" duration-75 cursor-pointer hover:text-orange-600">
            <h3 className="text-2xl font-normal pb-5 ">2d/3d Art Work</h3>
            <p className="text-xl font-normal  pb-12">
              There are many variations of the <br /> passages of lorem Ipsum
              from <br />
              available, majority.
            </p>

            <button>Read More</button>
          </div>
          <div className="cursor-pointer hover:text-orange-600">
            <h3 className="text-2xl font-normal pb-5 ">Interior Work</h3>
            <p className="text-xl font-normal  pb-12">
              There are many variations of the <br /> passages of lorem Ipsum
              from <br />
              available, majority.
            </p>

            <button>Read More</button>
          </div>
          <div className="cursor-pointer hover:text-orange-600">
            <h3 className="text-2xl font-normal pb-5 ">Decoration Work</h3>
            <p className="text-xl font-normal  pb-12">
              There are many variations of the <br /> passages of lorem Ipsum
              from <br />
              available, majority.
            </p>

            <button>Read More</button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Services;
