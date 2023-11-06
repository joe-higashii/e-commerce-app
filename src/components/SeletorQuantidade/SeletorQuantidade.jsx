import { Button } from "@chakra-ui/button"
import { Input } from "@chakra-ui/input"
import { HStack } from "@chakra-ui/layout"
import { useNumberInput } from "@chakra-ui/number-input"


const SeletorQuantidade = ({ quantidade, totalitens }) => {
    const { getInputProps, getIncrementButtonProps, getDecrementButtonProps } =
        useNumberInput({
            step: 1,
            defaultValue: totalitens,
            min: 1,
            max: quantidade,
            precision: 0,
        })

    const inc = getIncrementButtonProps()
    const dec = getDecrementButtonProps()
    const input = getInputProps()

    return (
        <HStack maxW='150px'>
            <Button {...dec}>-</Button>
            <Input {...input} />
            <Button {...inc}>+</Button>
        </HStack>
    )
}
export default SeletorQuantidade