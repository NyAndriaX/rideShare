import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import Input from '@/components/common/Input/Input'
import { styled } from 'styled-components'
import {
  MagnifyingGlassIcon,
  ChevronRightIcon,
} from '@heroicons/react/20/solid'
import Button from '@/components/common/Button/Button'
import { useNavigate } from 'react-router-dom'
import { countriesData } from '@/data/countries-data'
import { FormTripsData } from '@/types/interface'
import {
  useFormTripsData,
  useFormTripsActions,
} from '@/stores/use-form-trips-store'
import { useCurrentCountryState } from '@/stores/use-contry-store'

const ContainerOptionsProvince = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  border-radius: 0.375rem;
  cursor: pointer;
  align-items: center;
  padding: 1rem;
`

const TextOptionsProvince = styled.p`
  font-size: 1rem;
  line-height: 1.5rem;
  font-weight: 600;
  text-transform: capitalize;
`

const Arrival: React.FC = () => {
  const formTripsData = useFormTripsData()
  const { setFormTripsData } = useFormTripsActions()
  const {
    register,
    handleSubmit,
    formState: { isDirty, errors, isValid },
    setValue,
    trigger,
  } = useForm<Partial<FormTripsData>>({
    mode: 'onSubmit',
    defaultValues: {
      destinationProvince: formTripsData?.destinationProvince || '',
    },
  })
  const [query, setQuery] = useState<string>(
    formTripsData?.destinationProvince || '',
  )
  const navigate = useNavigate()
  const [open, setOpen] = useState<boolean>(false)
  const currentCountry = useCurrentCountryState()
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
    setValue('destinationProvince', province)
    await trigger('destinationProvince')
  }

  const handleInputChange = async (value: string) => {
    setOpen(true)
    setQuery(value)
    setValue('destinationProvince', '')
    await trigger('destinationProvince')
  }

  const submit = async (data: Partial<FormTripsData>) => {
    await setFormTripsData(data as Partial<FormTripsData>)
    navigate('/app/offer-seats/arrival/precise')
  }

  return (
    <div className='flex flex-col gap-8 px-4 md:px-0 w-full md:w-1/2 pt-10 pb-28'>
      <h1 className='text-blue-900'>Where are you going ?</h1>
      <form
        className='flex flex-col gap-6'
        onSubmit={handleSubmit((data) => submit(data))}
      >
        <div className='hidden'>
          <Input
            {...register('destinationProvince', {
              required: 'Destination province is required',
            })}
            error={errors.destinationProvince?.message}
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
                    className='bg-white hover:bg-gray-50'
                    onClick={() => handleChoiceProvince(province)}
                  >
                    <TextOptionsProvince className='text-blue-900'>
                      {province}
                    </TextOptionsProvince>
                    <ChevronRightIcon className='h-6 w-6 text-gray-400' />
                  </ContainerOptionsProvince>
                  <div className='border-b border-gray-100' />
                </div>
              ))
            )}
          </div>
        )}
        {isValid && (
          <Button
            type='submit'
            text='Continue'
            disabled={!isValid}
            className={`rounded-md font-semibold text-blue-900 bg-yellow`}
          />
        )}
      </form>
    </div>
  )
}
export default Arrival
