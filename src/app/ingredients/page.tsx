import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";

export default function Ingredients() {
  return (
    <div>
      halo
      <Container maxWidth="lg">
        <Box component="form" noValidate autoComplete="off">
          <TextField
            id="ingredients-create-form__name"
            variant="outlined"
            label="Name"
          />
          <TextField
            id="ingredients-create-form__energy"
            variant="outlined"
            label="Energy"
            slotProps={{
              input: {
                endAdornment: (
                  <InputAdornment position="end">kcal/100g</InputAdornment>
                ),
              },
            }}
          />
          <TextField
            id="ingredients-create-form__proteins"
            variant="outlined"
            label="Proteins"
            slotProps={{
              input: {
                endAdornment: (
                  <InputAdornment position="end">g/100g</InputAdornment>
                ),
              },
            }}
          />
          <TextField
            id="ingredients-create-form__fats"
            variant="outlined"
            label="Fats"
            slotProps={{
              input: {
                endAdornment: (
                  <InputAdornment position="end">g/100g</InputAdornment>
                ),
              },
            }}
          />
          <TextField
            id="ingredients-create-form__carbohydrates"
            variant="outlined"
            label="Carbohydrates"
            slotProps={{
              input: {
                endAdornment: (
                  <InputAdornment position="end">g/100g</InputAdornment>
                ),
              },
            }}
          />
        </Box>
      </Container>
    </div>
  );
}
