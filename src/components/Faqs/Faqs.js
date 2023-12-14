import React, { Children } from 'react'
import './Faqs.css';
import 'react-accessible-accordion/dist/fancy-example.css';
import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemButton,
    AccordionItemPanel,
} from 'react-accessible-accordion';
const faq_data=[
    {id:1,
    question:'What is statutory health insurance (SHI) in Germany?',
    answer :'SHI is mandatory health insurance financed by contributions from employees and employers, covering a wide range of medical services.'
    },
    {id:2,
    question:'How does the German healthcare system work?',
    answer :`Germany's healthcare system comprises statutory health insurance (SHI) and private health insurance (PHI). SHI is mandatory, while PHI offers more comprehensive coverage at a higher cost`
    },
    {id:3,
    question:'Can I choose my own doctor and hospital with SHI?',
    answer :'Yes, SHI allows policyholders the freedom to choose their preferred doctors and hospitals.'
    },
    {id:4,
    question:"What's the difference between statutory and private health insurance in Germany?",
    answer :'Statutory health insurance currently costs an average of 16.3% of gross wages half of gross wages (half of which paid by employer) plus long-term care insurance (which accounts for around 20% gross wages). The cost of private health insurance, on the other hand, depends on age, state of health and benifits'
    },
    {id:5,
    question:'How much does health insurance cost in Germany?',
    answer :'Costs vary based on income and insurance type. On average, SHI is around 14% of gross salary (shared between employee and employer), while PHI can cost several hundred euros monthly.'
    },
    {id:6,
    question:'Who is eligible for statutory health insurance in Germany?',
    answer :'All legal residents must have health insurance. Those earning below a certain amount are obligated to have SHI, while higher earners have the option for private insurance.'
    },
    {id:7,
    question:'Is private health insurance in Germany worth it?',
    answer :'It depends on your needs. PHI provides more comprehensive coverage, additional benefits, shorter waiting times, and greater flexibility. Compare options to find what suits you best.'
    },
    {id:8,
    question:'What are the benefits of private health insurance in Germany?',
    answer :'PHI offers enhanced coverage, additional benefits, shorter waiting times, and increased flexibility.'
    },
    {id:9,
    question:'How does the German healthcare system compare to other countries?',
    answer :"Germany's healthcare system is highly regarded globally, known for its universal coverage, freedom to choose doctors and hospitals, and high satisfaction levels. However, healthcare costs have been rising."
    },
    {id:10,
    question:'What is the annual insurance limit for 2023?',
    answer :'For 2023, you can switch to private health insurance if your gross income exceeds €66,600 per year or €5,550 per month. Still, have questions? Contact us for personalized guidance and explore the best health insurance options in Germany.'
    },
]

function Faqs() {
  return (
 <>
  <div className="faqs-section">
    <h3>FAQs</h3>
    <div className="faqs-container">
    <Accordion>
        {faq_data.map((faqs)=>{
            return(
                <>
                <AccordionItem>
                <AccordionItemHeading>
                    <AccordionItemButton>
                {faqs.question}
                    </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                    <p>
                        {faqs.answer}
                    </p>
                </AccordionItemPanel>
            </AccordionItem>
                </>
            )
    })}
        </Accordion>
    </div>
  </div>

 </>
  )
}

export default Faqs