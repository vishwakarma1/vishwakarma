import React from "react"

class ContactForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            buttonDisabled: true,
            message: { fromEmail: "", subject: "", body: "" },
            submitting: false,
            error: null,
        }
    }

    onChange = event => {
        const name = event.target.getAttribute("name")
        this.setState({
            message: { ...this.state.message, [name]: event.target.value },
        })
    }
    render() {
        return (
            <>
                <div className="background-white" style={{paddingBottom: '24px'}}>
                    <div style={{padding: '24px 0px', margin: 'auto', width: '200px'}}>
                        <span className="black_title_big">Contact</span>
                    </div>
                    <div>
                        <div>{this.state.error}</div>
                        <form
                            style={{
                                display: `flex`,
                                margin: `auto`,
                                flexDirection: `column`,
                                maxWidth: `500px`,
                                padding: `0px 10px`
                            }}
                            method="post"
                        >
                            <label htmlFor="fromEmail">Your email address:</label>
                            <input
                                type="email"
                                name="fromEmail"
                                id="fromEmail"
                                value={this.state.message.fromEmail}
                                onChange={this.onChange}
                            ></input>
                            <label htmlFor="subject">Subject:</label>
                            <input
                                type="text"
                                name="subject"
                                id="subject"
                                value={this.state.message.subject}
                                onChange={this.onChange}
                            />
                            <label htmlFor="body">Message:</label>
                            <textarea
                                style={{
                                    height: `150px`,
                                }}
                                name="body"
                                id="body"
                                value={this.state.message.body}
                                onChange={this.onChange}
                            />
                            <button
                                style={{
                                    marginTop: `7px`,
                                }}
                                type="submit"
                                disabled={this.state.submitting}
                                onClick={this.onClick}
                            >
                                Send message
                            </button>
                        </form>
                    </div>
                </div>
            </>
        )
    }
}

export default ContactForm;