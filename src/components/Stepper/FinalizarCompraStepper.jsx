import { Box, Step, StepDescription, StepIcon, StepIndicator, StepNumber, StepSeparator, StepStatus, StepTitle, Stepper, useSteps } from "@chakra-ui/react";
import React, { useState } from "react";


const steps = [
    { title: 'Primeiro', description: 'Verificar Carrinho' },
    { title: 'Segundo', description: 'Endereço de Entrega' },
    { title: 'Terceiro', description: 'Método de Pagamento'},
    { title: 'Quarto', description: 'Confirmar Informações'},
    { title: 'Quinto', description: 'Concluir'},
  ]
  
  function FinalizarCompraStepper() {
    const { activeStep } = useSteps({
      index: 0,
      count: steps.length,
    })
  
    return (
      <Stepper index={activeStep}>
        {steps.map((step, index) => (
          <Step key={index}>
            <StepIndicator>
              <StepStatus
                complete={<StepIcon />}
                incomplete={<StepNumber />}
                active={<StepNumber />}
              />
            </StepIndicator>
  
            <Box flexShrink='0'>
              <StepTitle>{step.title}</StepTitle>
              <StepDescription>{step.description}</StepDescription>
            </Box>
  
            <StepSeparator />
          </Step>
        ))}
      </Stepper>
    )
  }
  

  export default FinalizarCompraStepper