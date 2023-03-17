import * as React from "react";
import Box from "@mui/material/Box";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import useStyles from "./Faqcss";
import curve from "../../assets/curvy.png";

const faqs = [
  {
    question: "Is ZenZone right for me?",
    answer:
      "ZenZone may be right for you if you're looking to improve the quality of your life. Whenever there is anything that interferes with your happiness or prevents you from achieving your goals, we may be able to help. We also have therapists who specialize in specific issues such as stress, anxiety, relationships, parenting, depression, addictions, eating, sleeping, trauma, anger, family conflicts, LGBT matters, grief, religion, self esteem, and more.",
  },
  {
    question: "How long can I use ZenZone?",
    answer:
      "This depends on your needs and varies a lot from one person to another. Some people feel they get most of the value after just a few weeks, while others prefer to stick to the program for an extended period of time. This is completely up to you.",
  },
  {
    question: "How much does it cost?",
    answer:
      "ZenZone is more affordable than traditional offline counseling and therapy, and our prices may be even lower than your health insurance co-pay. You can view pricing details in our Terms of Service.",
  },
  // {
  //   question: "After I sign up, how long until I'm matched with a therapist?",
  //   answer:
  //     "You will be matched with a therapist within 24 hours. If you haven't been matched within 24 hours, please contact us at"
  // },
  // {
  //   question: "How will I communicate with my therapist?",
  //   answer:
  //     "You can get therapy in four ways via messages, live chat, phone, and video conferencing.You can use different ways at different times as you wish, based on your needs, availability, and convenience.",
  // },
];

export default function Faq() {
  const classes = useStyles();
  return (
    <>
      <img src={curve} alt="curve" className={classes.curveImage}></img>
      <div className={classes.section}>
        <Box sx={{ width: "100%" }}>
          <h5 className={classes.heading} >
            Frequently Asked Questions
          </h5>
          {faqs.map((faq, index) => (
            <Accordion key={index} className={classes.accordian}>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls={`faq${index}-content`}
                id={`faq${index}-header`}
              >
                <p className={classes.accordianContent}>{faq.question}</p>
              </AccordionSummary>
              <AccordionDetails>
                <p className={classes.accordianContent}>{faq.answer}</p>
              </AccordionDetails>
            </Accordion>
          ))}
        </Box>
      </div>
      <img src={curve} alt="curve" className={classes.curveImage2}></img>
    </>
  );
}
