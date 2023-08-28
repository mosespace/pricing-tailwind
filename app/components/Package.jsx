export default function Package({ data }) {
  const { title, price, features, isRecommended } = data;

  return (
    <section className=' py-6 sm:py-1 min-[320px]:py-1'>
      <div
        className={`bg-white py-4 ${
          isRecommended
            ? "border-4 border-amber-500 rounded-lg shadow-lg shadow-slate-900/60"
            : "px-0"
        }`}
      >
        <div
          className={
            isRecommended
              ? "package recommended flex flex-col justify-center items-center gap-6 text-sky-950 b"
              : "flex flex-col justify-center items-center gap-6 text-sky-950"
          }
        >
          {isRecommended && (
            <p className='bg-sky-950 text-amber-500 text-xs px-2 rounded-md uppercase'>
              recommended
            </p>
          )}

          <h4 className='text-3xl font-semibold rounded-md md:text-2xl min-[320px]:text-1xl'>
            {title}
          </h4>
          <h3 className='text-2xl font-bold '>
            $ <span className='text-5xl font-bold'>{price}</span>/mon
          </h3>
          <div className=''>
            {features.map((feature, i) => {
              return (
                <p key={i} className='flex gap-2 px-0 text-1xl'>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    fill='none'
                    viewBox='0 0 24 24'
                    strokeWidth={1.5}
                    stroke='currentColor'
                    className='w-6 h-6 text-amber-500 font-extrabold'
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      d='M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z'
                    />
                  </svg>
                  {feature}
                </p>
              );
            })}
          </div>
          <button
            className={`${
              isRecommended
                ? "bg-amber-500 px-8 py-4 text-white hover:bg-amber-400 shadow-lg shadow-slate-900/40 "
                : "package-btn bg-sky-900 px-8 py-4 text-white hover:bg-sky-800 shadow-lg shadow-amber-500/70 "
            }`}
          >
            SignUp Today
          </button>
          <p></p>
        </div>
      </div>
    </section>
  );
}
