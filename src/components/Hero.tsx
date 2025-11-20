

const features = [
  {
    name: 'Push to deploy',
    description:
      'Morbi viverra dui mi arcu sed. Tellus semper adipiscing suspendisse semper morbi. Odio urna massa nunc massa.'
  },
  // {
  //   name: 'SSL certificates',
  //   description:
  //     'Sit quis amet rutrum tellus ullamcorper ultricies libero dolor eget. Sem sodales gravida quam turpis enim lacus amet.'
  // },
  // {
  //   name: 'Simple queues',
  //   description:
  //     'Quisque est vel vulputate cursus. Risus proin diam nunc commodo. Lobortis auctor congue commodo diam neque.'
  // },
  // {
  //   name: 'Advanced security',
  //   description:
  //     'Arcu egestas dolor vel iaculis in ipsum mauris. Tincidunt mattis aliquet hac quis. Id hac maecenas ac donec pharetra eget.'
  // },
]

export default function Hero() {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-base/7 font-semibold text-indigo-600">GitHub Repositories</h2>
          <p className="mt-2 text-4xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-5xl lg:text-balance">
            See everything I am building
          </p>
          <p className="mt-6 text-lg/8 mx-auto max-w-lg text-gray-700">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quae atque excepturi in ea eos labore vitae laboriosam! Minima fugit nesciunt obcaecati delectus reprehenderit, earum deserunt aperiam iste nihil soluta similique.
          </p>
        </div>
      </div>
    </div>
  )
}
