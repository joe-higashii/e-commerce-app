import { Button } from "@chakra-ui/button"
import { Input } from "@chakra-ui/input"
import { HStack } from "@chakra-ui/layout"
import { useNumberInput } from "@chakra-ui/number-input"

const SeletorQuantidade = ({ quantidade, totalitens, setqtd }) => {
    
    const handleChangeDecrement = () => {
        if (totalitens > 1) {
            setqtd(totalitens - 1);
        }
    }

    const handleChangeIncrement = () => {
        if (totalitens < quantidade) {
            setqtd(totalitens + 1);
        }
    }

    return (
        <HStack maxW='150px'>
            <Button onClick={handleChangeDecrement}>-</Button>
            <Input value={totalitens} onChange={(e) => {setqtd(parseInt(e.target.value) || 0)}}/>
            <Button onClick={handleChangeIncrement}>+</Button>
        </HStack>
    )
}

export default SeletorQuantidade
