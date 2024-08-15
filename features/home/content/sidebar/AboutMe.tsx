import Profile from './Profile';

export default function AboutMe() {
  return (
    <section className="flex flex-col gap-5">
      <h3 className="text-xl">
        ✨ <b>About Me</b>
      </h3>
      <div className="box-shadow flex flex-col gap-5 rounded-[10px] bg-white p-6">
        <Profile />
        <p>
          Hello! My name is Dongwoo Kim
          <br />
          Welcome to my Blog!
        </p>
      </div>
    </section>
  );
}
