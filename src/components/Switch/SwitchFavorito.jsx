import { FormLabel, Switch } from '@chakra-ui/react'
import { FormControl } from '@chakra-ui/react'
import { useState } from 'react'

const SwitchFavorito = ({ isFavorite }) => {
  const [isFav, setIsFav] = useState(isFavorite)

  const handleToggle = () => {
    setIsFav(!isFav)
  }

  return (
    <FormControl display='flex' alignItems='center'>
      <FormLabel htmlFor='email-alerts' mb='0'>
        Enable email alerts?
      </FormLabel>
      <Switch id='email-alerts' isChecked={isFav} onChange={handleToggle} />
    </FormControl>
  )
}

export default SwitchFavorito
