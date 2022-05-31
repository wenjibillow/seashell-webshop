//components
import Grid from '@material-ui/core/Grid'
//styles
import { Wrapper } from './Footer.styles'

const Footer: React.FC = () => {
  return (
    <Wrapper>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={4}>
          <div>Lorem ipsum dolor sit amet</div>
          <div>Aenean massa. Cum sociis natoque</div>
          <div>Donec pede justo, fringilla vel</div>
        </Grid>
        <Grid item xs={12} sm={4}>
          <div>Lorem ipsum dolor sit amet</div>
          <div>Aenean massa. Cum sociis natoque</div>
          <div>Donec pede justo, fringilla vel</div>
        </Grid>
        <Grid item xs={12} sm={4}>
          <div>Lorem ipsum dolor sit amet</div>
          <div>Aenean massa. Cum sociis natoque</div>
          <div>©WTech 2022</div>
        </Grid>
      </Grid>
    </Wrapper>
  )
}

export default Footer