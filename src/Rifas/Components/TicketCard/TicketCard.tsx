import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  IconButton,
  Typography,
} from "@mui/material";

import ConfirmationNumberIcon from "@mui/icons-material/ConfirmationNumber";
import { CostPerTicket } from "./TicketCard.styles";

export const TicketCard = () => {
  return (
    <Card>
      <CardHeader
        title="Tradicional"
        subheader="September 14, 2016"
        sx={{
          backgroundColor: "#0097DD",
          color: "white",
          borderBottom: "1px dashed white",
        }}
      />
      <CardContent sx={{ backgroundColor: "#0097DD", color: "white" }}>
        <Typography variant="h4">Participa por un IPHONE 15</Typography>
        <Typography variant="body2">
          texto para llamar la atencion del cliente
        </Typography>
        <Typography variant="body1">Rifa subtitle</Typography>
      </CardContent>
      <CardActions>
        <CostPerTicket>
          <div className="cost-per-ticket-price">
            <IconButton>
              <ConfirmationNumberIcon />
            </IconButton>
            <div className="cost-per-ticket-description">
              <Typography>Costo por boleto</Typography>
              <Typography>$200</Typography>
            </div>
          </div>
          <div>
            <Button variant="contained" sx={{ borderRadius: "1rem" }}>
              Participa
            </Button>
          </div>
        </CostPerTicket>
      </CardActions>
    </Card>
  );
};
