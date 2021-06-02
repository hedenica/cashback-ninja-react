import { useState, FormEvent, ChangeEvent } from 'react'
import { useHistory } from 'react-router'

import { Button } from 'shared/Button'
import { Input } from './components/Input'

import styles from './form.module.scss'
import { formatCurrency, useCreateOrder } from 'resources'

export function Form () {
  const { mutate } = useCreateOrder()

  const history = useHistory()
  const [formFields, setFormFields] = useState([
    {
      id: Math.floor(Math.random() * 100),
      productValue: '',
      priceValue: '',
    },
  ])

  const handleInputProductChange = (
    event: ChangeEvent<HTMLInputElement>,
    id: number,
  ): void => {
    const updatedProductField = formFields.map(field =>
      field.id === id ? { ...field, productValue: event.target.value } : field,
    )

    setFormFields(updatedProductField)
  }

  const cleanValue = (value: string): number =>
    Number(value.replace(/\D+/g, '')) / 100

  function maskPrice (value: string): string {
    return formatCurrency(cleanValue(value))
  }

  const handleInputPriceChange = (
    event: ChangeEvent<HTMLInputElement>,
    id: number,
  ): void => {
    const updatedPriceField = formFields.map(field =>
      field.id === id
        ? { ...field, priceValue: maskPrice(event.target.value) }
        : field,
    )

    setFormFields(updatedPriceField)
  }

  const handleAddProduct = (): void => {
    const newFields = {
      id: Math.floor(Math.random() * 100),
      productValue: '',
      priceValue: '',
    }

    setFormFields(formFields => [...formFields, newFields])
  }

  const handleRemoveProduct = (fieldId: number): void => {
    setFormFields(formFields =>
      formFields.filter(field => field.id !== fieldId),
    )
  }

  const isFormFieldsValid = formFields
    .every(field => field.priceValue !== '' && field.productValue !== '')

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    if (!isFormFieldsValid) {
      alert('❌ Todos os campos devem ser preenchidos!')
      return
    }

    try {
      const products = formFields.map(field => ({
        name: field.productValue,
        price: cleanValue(field.priceValue),
      }))

      const total = products.reduce((acc, item) => {
        return acc + item.price
      }, 0)

      mutate({ products, total })

      history.push('/')
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <>
      <form id='form' onSubmit={handleSubmit}>
        <h2>Cadastre seu pedido</h2>
        {formFields.map(field => (
          <div key={field.id} className={styles.form}>
            <Input
              name='product'
              className={styles.input}
              type='text'
              placeholder='nome do produto'
              value={field.productValue}
              onChange={event => handleInputProductChange(event, field.id)}
            />
            <Input
              name='price'
              className={styles.input}
              type='text'
              placeholder='preço'
              value={field.priceValue}
              onChange={event => handleInputPriceChange(event, field.id)}
            />
            <Button
              type='button'
              color='red'
              size='small'
              className={styles.button}
              onClick={() => handleRemoveProduct(field.id)}
            >
              -
            </Button>
          </div>
        ))}
      </form>
      <div className={styles.btnContainer}>
        <Button
          className={styles.addProduct}
          color='yellow'
          size='large'
          onClick={handleAddProduct}
        >
          Adicionar novo produto
        </Button>
        <Button type='submit' form='form' color='yellow' size='large'>
          Finalizar pedido
        </Button>
      </div>
    </>
  )
}
