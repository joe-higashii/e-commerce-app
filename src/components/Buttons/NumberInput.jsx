import React from "react"
import { Button, HStack, Input, useNumberInput } from "@chakra-ui/react"

function NumberInput(estoque) {
    const { getInputProps, getIncrementButtonProps, getDecrementButtonProps } =
      useNumberInput({
        step: 1,
        defaultValue: 1,
        min: 1,
        max: estoque,
        precision: 0,
      })
  
    const inc = getIncrementButtonProps()
    const dec = getDecrementButtonProps()
    const input = getInputProps()
  
    return (
      <HStack maxW='140px'>
        <Button {...inc}>+</Button>
        <Input {...input} />
        <Button {...dec}>-</Button>
      </HStack>
    )
  }

export default NumberInput;