import React from 'react';
import MUIAccordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

export interface IAccordionChildren {
  title: string;
  subtitle?: string;
  content: string | React.ReactNode;
}

export interface IAccordionProps {
  elements: IAccordionChildren[];
}

export const Accordion = ({ elements }: IAccordionProps) => {
  const [expanded, setExpanded] = React.useState<string | false>(false);

  const handleChange =
    (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
      setExpanded(isExpanded ? panel : false);
    };

  return (
    <div>
      {(elements || []).map((child: IAccordionChildren, index: number) => (
        <MUIAccordion key={index} expanded={expanded === 'panel' + index} onChange={handleChange('panel' + index)}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1bh-content"
            id="panel1bh-header"
          >
            <Typography sx={{ width: '33%', flexShrink: 0 }}>
              {child?.title}
            </Typography>
            <Typography sx={{ color: 'text.secondary' }}>{child?.subtitle}</Typography>
          </AccordionSummary>
          <AccordionDetails>
            {typeof child.content === 'string' ? (
              <Typography>
                {child.content}
              </Typography>
            ) : (
              child.content
            )}

          </AccordionDetails>
        </MUIAccordion>
      ))}
    </div>
  );
}
