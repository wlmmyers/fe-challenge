import { emailValidator } from '@hc/component-lib';
import { string, object, func } from 'prop-types';

class FeedbackForm extends React.PureComponent {
  static propTypes = {
    email: string,
    theme: object,
    handleSubmit: func.isRequired,
    apiError: string
  }

  componentWillMount () {
    this.state = {
      email: '',
      emailErr: '',
      message: '',
      disableSend: true,
      helperText: 'Please fill out all fields'
    };
  }

  handleEmailChange = (val) => {
    this.setState({ email: val });
    this.checkValidation();
  }

  handleMessageChange = (val) => {
    this.setState({ message: val });
    this.checkValidation();
  }

  handleSubmit = () => {
    const data = {
      email: this.state.email,
      message: this.state.message
    };

    this.props.handleSubmit(data);

    this.setState({
      disableSend: true,
      helperText: null
    });
  }

  checkValidation = () => {
    var isEmailValid = emailValidator(this.state.email);
    var isValid = isEmailValid && this.state.email.length && this.state.message.length;
    const stateChanges = {
      disableSend: !isValid,
      helperText: null,
      emailErr: isEmailValid ? null : 'Please enter a valid email address'
    };

    if (!isValid) {
      if (!isEmailValid) {
        stateChanges.helperText = 'Please enter a valid email address.';
      } else if (!this.state.message.length) {
        stateChanges.helperText = 'Please enter a message.';
      }
    }

    this.state = stateChanges;
    this.forceUpdate();
  }

  render () {
    const { theme, apiError } = this.props;
    this.checkValidation();

    return (
      <div className={theme.FeedbackForm}>
        <textarea
          type='email'
          placeholder='Email address'
          onChange={this.handleEmailChange}
          value={this.state.email}
          error={this.state.email.length > 0 && this.state.emailErr}
        />
        <textarea
          placeholder='Enter your message here.'
          onChange={this.handleMessageChange}
          value={this.state.message}
        />
        <button
          onClick={this.handleSubmit}
          disabled={this.state.disableSend}
          title={this.state.helperText}>
          Submit
        </button>
        {
          apiError &&
          <div className={theme.formError}>{apiError}</div>
        }
      </div>
    );
  }
}

export default FeedbackForm;
