'use client'
import {
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
  Accordion as AccordionUI,
} from '@radix-ui/react-accordion'

export const Accordion = () => {
  return (
    <AccordionUI type="single" collapsible >
      <AccordionItem value="item-1">
        <AccordionTrigger>Is it accessible?</AccordionTrigger>
        <AccordionContent>
          Yes. It adheres to the WAI-ARIA design pattern.
        </AccordionContent>
      </AccordionItem>

      <AccordionItem value="item-2">
        <AccordionTrigger>Is it accessible?</AccordionTrigger>
        <AccordionContent>
          Yes. It adheres to the WAI-ARIA design pattern.
        </AccordionContent>
      </AccordionItem>
    </AccordionUI>
  )
}
