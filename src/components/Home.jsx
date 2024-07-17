import {
  BrowserRouter as Router,
  Routes,
  Route,
  NavLink,
  Link,
} from "react-router-dom";

const Home = () => {
  return (
    <div>
      <header>
        <nav className="container">
          <div className="flex items-center  gap-2">
            <img src="houses-logo.svg" alt="Logo" />
            <h1 className="text-4xl font-normal">SELHONO</h1>
          </div>
          <ul>
            <li>
              <Link to="home" />
            </li>
          </ul>
        </nav>
      </header>
      <main>
        <div className="container">
          <img
            style={{ width: "1100px", height: "570px", paddingBottom: "95px" }}
            src="sofa.png"
            alt="Sofa"
          />
          <div className="flex items-center justify-center gap-10">
            <div className="">
              <h3 className="text-2xl font-normal pb-5 ">Project Plan</h3>
              <p className="text-xl font-normal text-slate-600 pb-12">
                There are many variations of the <br /> passages of lorem Ipsum
                from <br />
                available, majority.
              </p>

              <button className="">Read More</button>
            </div>
            <div className="">
              <h3 className="text-2xl font-normal pb-5 ">Interior Work</h3>
              <p className="text-xl font-normal text-slate-600 pb-12">
                There are many variations of the <br /> passages of lorem Ipsum
                from <br />
                available, majority.
              </p>

              <button>Read More</button>
            </div>
            <div className="">
              <h3 className="text-2xl font-normal pb-5 ">Realization</h3>
              <p className="text-xl font-normal text-slate-600 pb-12">
                There are many variations of the <br /> passages of lorem Ipsum
                from <br />
                available, majority.
              </p>

              <button>Read More</button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Home;
