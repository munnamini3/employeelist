import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import IconButton from '@material-ui/core/IconButton';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormControl from '@material-ui/core/FormControl';
import FormHelperText from '@material-ui/core/FormHelperText';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import { withStyles } from '@material-ui/core/styles';
import Email from '@material-ui/icons/Email'
import { connect } from 'react-redux';

const styles = theme => ({
  paper: {
    marginTop: theme.spacing(23),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: "white",
    padding: "20px",
    borderRadius: "10px"
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),

  },
  formControl: {
    width: '100%'
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  text: {
    color: "teal"
  }
});
class LoginIn extends React.Component {
  state = {
    email: "",
    showPassword: false,
    password: "",
    error: true,
    emailErr: "",
    passwordErr: ""
  }
  handleChange = (e) => {
    if (e.target.name === "email") {
      this.setState({ [e.target.name]: e.target.value, emailErr:"" })
    } else {
      this.setState({ [e.target.name]: e.target.value, passwordErr:"" })
    }
    
  }
  handleClickShowPassword = () => {
    this.setState({ showPassword: !this.state.showPassword })
  }
  handleMouseDownPassword = (e) => {
    e.preventDefault();
  };
  onSubmit = (e) => {
    e.preventDefault()
    const { email, password } = this.state
    var emailErr = ""
    var passwordErr = ""
    if (email === "") {
      emailErr = "This field is required"
    } else if (/^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/.test(email) == false) {
      emailErr = "Invalid Email"
    } else if (email !== "hruday@gmail.com") {
      emailErr = "Incorrect Username"
    }
    if (password === "") {
      passwordErr = "This field is required"
    } else if (password !== "hruday123") {
      passwordErr = "Incorrect Password"
    }

    if (emailErr == "" && passwordErr == "") {
      var data = {
        "email": email,
        "password": password
      }
      this.props.dispatch({
        type: 'ADD_POST',
        data
      });
      this.props.history.push("/employees")
      this.setState({ emailErr: "", passwordErr: "" })
    } else {
      this.setState({ emailErr, passwordErr })
    }

  }
  render() {
    const { classes } = this.props;
    const { showPassword, password, email, emailErr, passwordErr } = this.state
    return (
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5" className={classes.text}>
            <b>Appiness Interactive</b>
          </Typography>
          <form className={classes.form} onSubmit={this.onSubmit}>
            <FormControl className={classes.formControl} error={emailErr}>
              <InputLabel htmlFor="standard-adornment-email">Username</InputLabel>
              <Input
                id="standard-adornment-email"
                type="text"
                value={email}
                name="email"
                onChange={(e) => this.handleChange(e)}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="email"
                    >
                      <Email />
                    </IconButton>
                  </InputAdornment>
                }
              />
              <FormHelperText id="standard-adornment-email">{emailErr}</FormHelperText>
            </FormControl>
            <FormControl className={classes.formControl} error={passwordErr}>
              <InputLabel htmlFor="standard-adornment-password">Password</InputLabel>
              <Input
                id="standard-adornment-password"
                type={showPassword ? 'text' : 'password'}
                value={password}
                name="password"
                onChange={(e) => this.handleChange(e)}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={this.handleClickShowPassword}
                      onMouseDown={this.handleMouseDownPassword}
                    >
                      {showPassword ? <Visibility /> : <VisibilityOff />}
                    </IconButton>
                  </InputAdornment>
                }
              />
              <FormHelperText id="standard-adornment-password">{passwordErr}</FormHelperText>
            </FormControl>
            {/* <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            /> */}
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              // href="/employees"
              className={classes.submit}
            >
              Sign In
          </Button>
            {/* Its not there in requirement so commented */}
            {/* <Grid container>
              <Grid item xs>
                <Link href="#" variant="body2">
                  Forgot password?
              </Link>
              </Grid>
              <Grid item>
                <Link href="#" variant="body2">
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid> */}
          </form>
        </div>

      </Container>
    );
  }
}

export default withStyles(styles, { withTheme: true })
  (connect()(LoginIn));
