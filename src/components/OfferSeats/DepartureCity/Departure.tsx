import React, { useState, useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import { FormOfferSeatsData } from '@/types/interface'
import Input from '@/components/common/Input/Input'
import {
  useFormOfferSeatsActions,
  useFormOfferSeatsData,
} from '@/stores/use-form-offer-seats-store'
import { countriesData } from '@/data/countries-data'
import Button from '@/components/common/Button/Button'
import { MagnifyingGlassIcon } from '@heroicons/react/20/solid'
import { useCurrentCountryState } from '@/stores/use-contry-store'
import { ChevronRightIcon } from '@heroicons/react/20/solid'
import { styled } from 'styled-components'

const ContainerOptionsProvince = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  border-radius: 0.375rem;
  cursor: pointer;
  align-items: center;
  padding: 1rem;
  background-color: var(--color-white);
  &:hover {
    background-color: var(--color-off-white);
  }
`

const TextOptionsProvince = styled.p`
  font-size: 1rem;
  line-height: 1.5rem;
  font-weight: 600;
  text-transform: capitalize;
  color: var(--color-deep-sea-blue);
`

const Departure: React.FC = () => {
  const formOfferSeatsData = useFormOfferSeatsData()
  const {
    register,
    handleSubmit,
    formState: { isDirty, errors, isValid },
    setValue,
    trigger,
  } = useForm<Partial<FormOfferSeatsData>>({
    mode: 'onSubmit',
    defaultValues: {
      departureProvince: formOfferSeatsData?.departureProvince || '',
    },
  })
  const navigate = useNavigate()
  const [query, setQuery] = useState<string>(
    formOfferSeatsData?.departureProvince || '',
  )
  const [open, setOpen] = useState<boolean>(false)
  const currentCountry = useCurrentCountryState()
  const { setFormOfferSeatsData } = useFormOfferSeatsActions()
  const [currentProvince, setCurrentProvince] = useState<string[] | []>([])

  const filteredProvince =
    query === ''
      ? currentProvince
      : currentProvince.filter((province) =>
          province
            .toLocaleLowerCase()
            .replace(/\s+/g, '')
            .includes(query.toLocaleLowerCase().replace(/\s+/g, '')),
        )

  useEffect(() => {
    const filteredCountries = countriesData.filter(
      (country) => country.code === currentCountry,
    )

    const provinces =
      filteredCountries.length > 0 ? filteredCountries[0].province : []

    setCurrentProvince(provinces)
  }, [currentCountry])

  const handleChoiceProvince = async (province: string) => {
    setOpen(false)
    setQuery(province)
    setValue('departureProvince', province)
    await trigger('departureProvince')
  }

  const handleInputChange = async (value: string) => {
    setOpen(true)
    setQuery(value)
    setValue('departureProvince', '')
    await trigger('departureProvince')
  }

  const submit = async (data: Partial<FormOfferSeatsData>) => {
    await setFormOfferSeatsData(data)
    navigate('/app/offer-seats/departure/precise')
  }

  return (
    <div className='flex flex-col gap-8 w-1/2 pt-10 pb-28'>
      <h1 className='text-blue-900'>Where are you leaving from ?</h1>
      <form
        className='flex flex-col gap-6'
        onSubmit={handleSubmit((data) => submit(data))}
      >
        <div className='hidden'>
          <Input
            {...register('departureProvince', {
              required: 'Departure province is required',
            })}
            error={errors.departureProvince?.message}
            ariaInvalid={isDirty}
            type='text'
            autofocus
            autoComplete='off'
          />
        </div>
        <Input
          type='text'
          value={query}
          icon={<MagnifyingGlassIcon className='h-5 w-6 text-gray-400' />}
          placeholder='Enter a province'
          onChange={(event) => handleInputChange(event.target.value)}
          autofocus
          autoComplete='off'
        />
        {open && (
          <div className='flex flex-col gap-4'>
            {filteredProvince.length === 0 && query !== '' ? (
              <div className='relative cursor-default select-none px-4 py-2 text-gray-700'>
                Nothing found.
              </div>
            ) : (
              filteredProvince.map((province) => (
                <div key={province} className='flex flex-col w-full gap-1'>
                  <ContainerOptionsProvince
                    onClick={() => handleChoiceProvince(province)}
                  >
                    <TextOptionsProvince>{province}</TextOptionsProvince>
                    <ChevronRightIcon className='h-6 w-6' />
                  </ContainerOptionsProvince>
                  <div className='border-b border-gray-200' />
                </div>
              ))
            )}
          </div>
        )}

        {isValid && (
          <Button
            type='submit'
            text='Coninue'
            disabled={!isValid}
            className={`rounded-md font-semibold text-blue-500 bg-yellow`}
          />
        )}
      </form>
    </div>
  )
}

export default Departure
