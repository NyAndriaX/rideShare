import React from 'react'
import Line from '@/components/common/Line/Line'

interface TestimonialCardProps {
  imgSrc: string
  name: string
  quote: string
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({
  imgSrc,
  name,
  quote,
}) => {
  return (
    <div className='w-full mx-auto rounded-lg bg-white border border-gray-200 p-5 text-gray-800 font-light mb-6'>
      <div className='w-full flex mb-4 items-center'>
        <div className='overflow-hidden rounded-full w-10 h-10 bg-gray-50 border border-gray-200'>
          <img src={imgSrc} alt={name} />
        </div>
        <div className='flex-grow pl-3'>
          <h6 className='font-bold text-sm uppercase text-gray-600'>{name}</h6>
        </div>
      </div>
      <div className='w-full'>
        <p className='text-sm leading-tight'>
          <span className='text-lg leading-none italic font-bold text-gray-400 mr-1'>
            "
          </span>
          {quote}
          <span className='text-lg leading-none italic font-bold text-gray-400 ml-1'>
            "
          </span>
        </p>
      </div>
    </div>
  )
}

const Testimonials: React.FC = () => {
  return (
    <div className='w-full px-4 mx-auto'>
      <div className='text-center max-w-xl mx-auto'>
        <h1 className='text-6xl text-blue-900'>
          What people <br />
          are saying.
        </h1>
        <p className='text-lg text-gray-500'>
          Each review makes us want it even more
        </p>
        <Line />
      </div>
      <div className='-mx-3 md:flex items-start'>
        {/* Cartes de témoignages */}
        <div className='px-3 md:w-1/3'>
          <TestimonialCard
            imgSrc='https://i.pravatar.cc/100?img=1'
            name='Kenzie Edgar'
            quote='Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos sunt ratione dolor exercitationem minima quas itaque saepe quasi architecto vel! Accusantium, vero sint recusandae cum tempora nemo commodi soluta deleniti.'
          />
          <TestimonialCard
            imgSrc='https://i.pravatar.cc/100?img=2'
            name='Stevie Tifft'
            quote='Lorem ipsum, dolor sit amet, consectetur adipisicing elit. Dolore quod necessitatibus, labore sapiente, est, dignissimos ullam error ipsam sint quam tempora vel.'
          />
        </div>
        <div className='px-3 md:w-1/3'>
          <TestimonialCard
            imgSrc='https://i.pravatar.cc/100?img=3'
            name='Tommie Ewart'
            quote='Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vitae, obcaecati ullam excepturi dicta error deleniti sequi.'
          />
          <TestimonialCard
            imgSrc='https://i.pravatar.cc/100?img=4'
            name='Charlie Howse'
            quote='Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto inventore voluptatum nostrum atque, corrupti, vitae esse id accusamus dignissimos neque reprehenderit natus, hic sequi itaque dicta nisi voluptatem! Culpa, iusto.'
          />
        </div>
        <div className='px-3 md:w-1/3'>
          <TestimonialCard
            imgSrc='https://i.pravatar.cc/100?img=5'
            name='Nevada Herbertson'
            quote='Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis, voluptatem porro obcaecati dicta, quibusdam sunt ipsum, laboriosam nostrum facere exercitationem pariatur deserunt tempora molestiae assumenda nesciunt alias eius? Illo, autem!'
          />
          <TestimonialCard
            imgSrc='https://i.pravatar.cc/100?img=6'
            name='Kris Stanton'
            quote='Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem iusto, explicabo, cupiditate quas totam!'
          />
        </div>
      </div>
    </div>
  )
}

export default Testimonials
