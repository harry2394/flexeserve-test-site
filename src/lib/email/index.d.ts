type To = string | string[];

interface NodeMailerOptions {
    to: To;
    subject: string;
    rawHtml: string;
}

interface SendDemoEmail {
    to: To;
    subject: string;
    unsubscribeURL: string;
    emailSummaryTop: string;
    callToActionHeader: string;

    headerBlock: {
        logoLinkURL: string;
        logoURL: string;
        text: string;
    };

    actionButton: {
        url: string;
        text: string;
    };
}
