import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import '../style.css'

const styles = theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
  },
});


class OutlinedTextFields extends React.Component {
  state = {
    username: '',
    password: '',
    email: ''
  };

  handleChange = name => event => {
    this.setState({
      [name]: event.target.value,
    });
  };

  render() {
    const { classes } = this.props;

    return (
      <div className="tealBackground">
      <form className={classes.container}
        className="loginFormContainer"
        noValidate autoComplete="off">
      <h1 className="loginTitle">Create a New Chat App Account</h1>

        <TextField
          required
          fullWidth
          id="username"
          label="username"
          className={classes.textField}
          value={this.state.name}
          onChange={this.handleChange('username')}
          margin="normal"
          variant="outlined"
        />
        <TextField
          required
          fullWidth
          id="password"
          label="password"
          defaultValue=""
          className={classes.textField}
          value={this.state.name}
          onChange={this.handleChange('username')}
          margin="normal"
          variant="outlined"
        />
        <Button variant="contained" color="primary" className={classes.button} type="submit">
       Create Account
       </Button>

      </form>
      </div>
    );
  }
}

OutlinedTextFields.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(OutlinedTextFields);



/*import React, { Component } from 'react';

class Createaccount extends Component {
  render(){
      return(
        <div>
          <form class="loginForm" class="centeredVertical">
          <input type="text" class="loginInput" /><br/>
          <input type="text" class="loginInput" /><br/>
          <input type="text" class="loginInput" /><br/>
          </form>
        </div>
    )
  }
}
export default Createaccount*/