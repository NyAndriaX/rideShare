import React from 'react'
import { styled } from 'styled-components'
import { useNavigate } from 'react-router-dom'
import { FormOfferSeatsData } from '@/types/interface'
import { ChevronRightIcon } from '@heroicons/react/20/solid'
import { useFormOfferSeatsActions } from '@/stores/use-form-offer-seats-store'

const ContainerOptions = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  border-radius: 0.375rem;
  cursor: pointer;
  align-items: center;
  padding: 1rem;
`

const TextOptions = styled.p`
  font-size: 1rem;
  line-height: 1.5rem;
  font-weight: 600;
  text-transform: lowercase;
`
interface ComfortItem {
  id: number
  text: string
  value: boolean
}

const comfortState: ComfortItem[] = [
  {
    id: 1,
    text: 'That works!',
    value: true,
  },
  {
    id: 2,
    text: 'No, there will be three of them',
    value: false,
  },
]

const Confort: React.FC = () => {
  const navigate = useNavigate()
  const { setFormOfferSeatsData } = useFormOfferSeatsActions()

  const handleChoice = async (data: ComfortItem) => {
    await setFormOfferSeatsData({
      isComfort: data.value,
    } as Partial<FormOfferSeatsData>)
    navigate('/app/offer-seats/seats')
  }

  return (
    <div className='flex flex-row gap-4 justify-between items-start'>
      <div className='flex'>
        <img
          className='w-full'
          src='/public/image/hehe-voyageant-automobile-isole-illustration-vectorielle-plane-vue-face-du-pere-bande-dessinee-mere-fils-fille-voiture_74855-8399.jpg'
          alt='une image qui montre la conformité dans une bus'
        />
      </div>
      <div className='flex flex-col gap-8 pt-10 px-4 pb-28'>
        <h1 className='text-blue-900'>
          Comfort is important ! Leave a seat free in the back.
        </h1>
        <div className='flex flex-col items-center justify-center gap-6'>
          {comfortState.map((state) => (
            <div
              key={state.id}
              onClick={() => handleChoice(state)}
              className='flex flex-col w-full items-center justify-center gap-2'
            >
              <div className='flex flex-col w-full gap-1'>
                <ContainerOptions className='bg-white hover:bg-gray-50'>
                  <TextOptions className='text-blue-900'>
                    {state.text}
                  </TextOptions>
                  <ChevronRightIcon className='h-6 w-6 text-gray-400' />
                </ContainerOptions>
                <div className='border-b border-gray-100' />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
export default Confort
