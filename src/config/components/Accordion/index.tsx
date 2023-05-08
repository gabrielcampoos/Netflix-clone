import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";

export default function SimpleAccordion() {
  return (
    <div>
      <Accordion
        sx={{
          backgroundColor: "rgba(45, 45, 45, 1)",
          padding: "1rem 0",
          "&:hover": { backgroundColor: " rgba(78, 78, 78, 1)" },
        }}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon color="warning" />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography color="white">Accordion 1</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography color="white">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        sx={{
          backgroundColor: "rgba(45, 45, 45, 1)",
          padding: "1rem 0",
          "&:hover": { backgroundColor: " rgba(78, 78, 78, 1)" },
        }}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon color="warning" />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography color="white">Accordion 2</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography color="white">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        sx={{
          backgroundColor: "rgba(45, 45, 45, 1)",
          padding: "1rem 0",
          "&:hover": { backgroundColor: " rgba(78, 78, 78, 1)" },
        }}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon color="warning" />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography color="white">Accordion 3</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography color="white">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        sx={{
          backgroundColor: "rgba(45, 45, 45, 1)",
          padding: "1rem 0",
          "&:hover": { backgroundColor: " rgba(78, 78, 78, 1)" },
        }}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon color="warning" />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography color="white">Accordion 4</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography color="white">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
