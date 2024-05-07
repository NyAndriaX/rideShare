import React, { Dispatch, SetStateAction } from 'react'
import { Link } from 'react-router-dom'
import { Reorder } from 'framer-motion'
import { styled } from 'styled-components'
import { useNavigate } from 'react-router-dom'
import Button from '@/components/common/Button/Button'
import { Stop, FormOfferSeatsData } from '@/types/interface'
import { useFormOfferSeatsActions } from '@/stores/use-form-offer-seats-store'

const ContainerOptionsProvince = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  border-radius: 0.375rem;
  cursor: pointer;
  align-items: center;
  padding: 1rem;
`

const Label = styled.label`
  font-size: 1rem;
  line-height: 1.5rem;
  font-weight: 600;
  text-transform: capitalize;
`

interface ListDeclaredStopoversProps {
  listStopovers: Stop[] | []
  setListStopovers: Dispatch<SetStateAction<Stop[] | []>>
}

const ListDeclaredStopovers: React.FC<ListDeclaredStopoversProps> = ({
  listStopovers,
  setListStopovers,
}) => {
  const navigate = useNavigate()
  const { setFormOfferSeatsData } = useFormOfferSeatsActions()
  const handleToggleChecked = (index: number) => {
    setListStopovers((prevList) =>
      prevList.map((stop, i) =>
        i === index ? { ...stop, checked: !stop.checked } : stop,
      ),
    )
  }

  const onSubmit = async (event: any) => {
    event.preventDefault()
    const stops: Stop[] = listStopovers.filter((stop) => stop.checked === true)
    await setFormOfferSeatsData({
      stops,
    } as Partial<FormOfferSeatsData>)
    navigate('/app/offer-seats/meeting-points')
  }

  return (
    <div className='flex flex-col gap-8 w-1/2 pt-10 pb-28'>
      <h1 className='text-blue-900'>Add steps to find more passengers</h1>
      <form
        className='flex flex-col gap-8 w-full'
        onSubmit={(event) => onSubmit(event)}
      >
        <Reorder.Group
          axis='y'
          values={listStopovers}
          onReorder={setListStopovers}
        >
          {listStopovers.map((stop, index) => (
            <Reorder.Item
              key={index}
              value={stop}
              onClick={() => handleToggleChecked(index)}
            >
              <ContainerOptionsProvince className='bg-white hover:bg-gray-50'>
                <Label className='text-blue-900'>{stop.stopLocation}</Label>
                <input type='checkbox' checked={listStopovers[index].checked} />
              </ContainerOptionsProvince>
              <div className='border-b border-gray-100' />
            </Reorder.Item>
          ))}
        </Reorder.Group>
        <Link
          className='text-blue-500'
          to='/app/offer-seats/declared-stopovers/add'
        >
          Ajouter une étape
        </Link>
        <Button
          type='submit'
          text='Continue'
          className={` rounded-md font-semibold text-blue-900 bg-yellow`}
        />
      </form>
    </div>
  )
}

export default ListDeclaredStopovers
