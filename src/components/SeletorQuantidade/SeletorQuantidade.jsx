import { Button } from "@chakra-ui/button"
import { Input } from "@chakra-ui/input"
import { HStack } from "@chakra-ui/layout"
import { useNumberInput } from "@chakra-ui/number-input"


const SeletorQuantidade = ({ quantidade, totalitens, setqtd }) => {
    
    const handleChangeDecrement = () => {
        setqtd(totalitens-1)
    }

    const handleChangeIncrement = () => {
        setqtd(totalitens+1)
    }
    

    return (
        <HStack maxW='150px'>
            <Button onClick={handleChangeDecrement}>-</Button>
            <Input value={totalitens} onChange={(e) => {setqtd(e.target.value)}}/>
            <Button onClick={handleChangeIncrement}>+</Button>
        </HStack>
    )
}
export default SeletorQuantidade